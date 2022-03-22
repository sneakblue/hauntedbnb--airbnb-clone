import { csrfFetch } from "./csrf";

const LOAD_HAUNTS = 'haunts/LOAD_HAUNTS';
const CREATE_HAUNT = 'haunts/CREATE_HAUNT';
const UPDATE = 'haunts/UPDATE';
const DELETE = 'haunts/DELETE';

const initialState = {};

export default function hauntsReducer (state = initialState, action) {
    switch (action.type) {
        case LOAD_HAUNTS: {
            const newHaunts = {};
            action.list.forEach(haunt => {
                haunt.imgUrl = [];
                action.images.forEach(image => {
                    if (image.hauntId === haunt.id) {
                        haunt.imgUrl.push(image.url);
                    }
                })
                newHaunts[haunt.id] = haunt;
            });
            return { ...state, ...newHaunts};
        }
        case CREATE_HAUNT: {
            const newState = {...state};
            const newHaunt = action.haunt;
            let newImages = [];
            action.images.forEach(image => {
                newImages.push(image.url);
            })
            console.log(newHaunt);
            newState[newHaunt.haunt.id] = {
                id: newHaunt.id,
                userId: newHaunt.userId,
                address: newHaunt.address,
                city: newHaunt.city,
                state: newHaunt.state,
                country: newHaunt.country,
                lat: newHaunt.lat,
                lng: newHaunt.lng,
                name: newHaunt.name,
                price: newHaunt.price,
                description: newHaunt.description,
                activity: newHaunt.activity,
                imgUrl: newImages,
            };
            return newState;
        }
        case UPDATE: {
            const image = state[action.haunt.updatedHaunt.id].imgUrl;
            return {
                ...state,
                [action.haunt.updatedHaunt.id]: {
                    ...action.haunt.updatedHaunt,
                    imgUrl: image,
                }
            }
        }
        case DELETE: {
            const newState = {...state};
            delete newState[action.id]
            return newState;
        }
        default: {
            return state;
        }
    }
}

const loadHaunts = (list, images) => ({
    type: LOAD_HAUNTS,
    list,
    images
});

const createHaunt = (haunt, images) => ({
    type: CREATE_HAUNT,
    haunt,
    images
})

const update = haunt => ({
    type: UPDATE,
    haunt
})

const deleteHaunt = id => ({
    type: DELETE,
    id
})

export const getHaunts = () => async dispatch => {
    const response = await csrfFetch('/api/haunts');
    const imgResponse = await csrfFetch('/api/images');

    if (response.ok && imgResponse.ok) {
        const list = await response.json();
        const images = await imgResponse.json();
        dispatch(loadHaunts(list.haunts, images.images));
    }
};

export const newHaunt = (haunt) => async dispatch => {
    const { userId, address, city, state, country, lat, lng, name, price, activity, description, images, image } = haunt;
    const hauntResponse = await csrfFetch('/api/haunts/create', {
        method: 'POST',
        body: JSON.stringify({ userId, address, city, state, country, lat, lng, name, price, description, activity })
    });
    if(hauntResponse.ok) {
        const createdHaunt = await hauntResponse.json();
        const formData = new FormData();

        if (images && images.length !== 0) {
            for (let i = 0; i < images.length; i++) {
                formData.append("images", images[i]);
            }
        }

        if (image) formData.append("image", image);

        let res;
        if (images) {
            res = await csrfFetch('/api/images/create-mult', {
                method: 'POST',
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                body: formData,
            })
        } else {
            res = await csrfFetch('/api/images/create-single', {
                method: 'POST',
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                body: formData,
            });
        }

        const newImages = await res.json();

        // let newImages = [];
        // images.forEach( async image => {

        //     const response = await csrfFetch('/api/images/create', {
        //         method: 'POST',
        //         body: JSON.stringify({ hauntId: createdHaunt.haunt.id, url: image })
        //     });
        //     if (response.ok) {
        //         const createdImage = await response.json();
        //         newImages.push(createdImage.imageUrl)
        //     };
        // });
        dispatch(createHaunt(createdHaunt, newImages));
        return createdHaunt;
    };
};

export const updateHaunt = (haunt) => async dispatch => {
    const { userId, address, city, state, country, lat, lng, name, price, description, activity, id } = haunt;
    const response = await csrfFetch(`/api/haunts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ userId, address, city, state, country, lat, lng, name, price, description, activity })
    });

    if (response.ok) {
        const updatedHaunt = await response.json();
        dispatch(update(updatedHaunt));
        return updatedHaunt;
    }
}

export const removeHaunt = (id) => async dispatch => {
    const response = await csrfFetch(`/api/haunts/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(deleteHaunt(id));
    }
}
