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
            if (action.images.image !== undefined) {
                newImages.push(action.images.image.url)
            } else {
                action.images.newImages.forEach(image => {
                    newImages.push(image.url);
                });
            }
            newState[newHaunt.haunt.id] = {
                id: newHaunt.haunt.id,
                userId: newHaunt.haunt.userId,
                address: newHaunt.haunt.address,
                city: newHaunt.haunt.city,
                state: newHaunt.haunt.state,
                country: newHaunt.haunt.country,
                lat: newHaunt.haunt.lat,
                lng: newHaunt.haunt.lng,
                name: newHaunt.haunt.name,
                price: newHaunt.haunt.price,
                description: newHaunt.haunt.description,
                activity: newHaunt.haunt.activity,
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

        if (images && images.length !== 1) {
            for (let i = 0; i < images.length; i++) {
                formData.append("images", images[i]);
            }
        }

        if (image) formData.append("image", image);

        let res;
        if (images.length !== 1) {
            res = await csrfFetch(`/api/images/create-mult/${createdHaunt.haunt.id}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                body: formData,
            })
        } else {
            res = await csrfFetch(`/api/images/create-single/${createdHaunt.haunt.id}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                body: formData,
            });
        }

        const newImages = await res.json();
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
