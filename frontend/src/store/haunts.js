import { csrfFetch } from "./csrf";

const LOAD_HAUNTS = 'haunts/LOAD_HAUNTS';
// const LOAD_IMAGES = 'haunts/LOAD_IMAGES';
const CREATE_HAUNT = 'haunts/CREATE_HAUNT';

const initialState = {};

export default function hauntsReducer (state = initialState, action) {
    switch (action.type) {
        case LOAD_HAUNTS: {
            const newHaunts = {};
            action.list.forEach(haunt => {
                action.images.forEach(image => {
                    if (image.hauntId === haunt.id) {
                        haunt.imgUrl = image.url;
                    }
                })
                newHaunts[haunt.id] = haunt;
            });
            return { ...state, ...newHaunts};
        }
        // case LOAD_IMAGES: {
        //     const newState = { ...state };
        //     action.images.images.forEach(image => {
        //         newState.haunts[image.hauntId].imgUrl = image;
        //     });
        //     return newState;
        // }
        case CREATE_HAUNT: {
            const newState = { ...state };
            const newHaunt = action.haunt;
            newState[newHaunt.id] = {
                userId: newHaunt.userId,
                address: newHaunt.address,
                city: newHaunt.city,
                state: newHaunt.state,
                country: newHaunt.country,
                lat: newHaunt.lat,
                lng: newHaunt.lng,
                name: newHaunt.name,
                price: newHaunt.price,
                activity: newHaunt.activity
            };
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

// const loadImages = images => ({
//     type: LOAD_IMAGES,
//     images
// })

const createHaunt = haunt => ({
    type: CREATE_HAUNT,
    haunt
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

// export const getImages = () => async dispatch => {
//     const response = await csrfFetch('/api/images');

//     if (response.ok) {
//         const images = await response.json();
//         dispatch(loadImages(images));
//     }
// }

// export const newHaunt = (haunt) => async dispatch => {
//     const response = await csrfFetch('/api/haunts/create')
// }
