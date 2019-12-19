import axios from 'axios';

const initialState = {
    allClothes: [],
    tops: {},
    bottoms: {},
    shoes: {},
    accessories: {}
};

const ALL_ITEMS = 'ALL_ITEMS';
const TOPS = 'TOPS';
const BOTTOMS = 'BOTTOMS';
const SHOES = 'SHOES';
const ACCESSORIES = 'ACCESSORIES';

export function allClothes() {
    return {
        type: ALL_ITEMS,
        payload: axios.get('/api/allitems')
    }
}

export function tops(topId) {
    return {
        type: TOPS,
        payload: axios.get(`/api/tops/${topId}`)
    }
}

export function bottoms(bottomId) {
    return {
        type: BOTTOMS,
        payload: axios.get(`/api/bottoms/${bottomId}`)
    }
}

export function shoes(shoeId) {
    return {
        type: SHOES,
        payload: axios.get(`/api/shoes/${shoeId}`)
    }
}

export function accessories(accessId) {
    return {
        type: ACCESSORIES,
        payload: axios.get(`/api/accessories/${accessId}`)
    }
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case `${ALL_ITEMS}_FOUND`:
            return {
                ...state,
                allClothes: payload.data
            }
        case `${TOPS}_FOUND`:
            return {
                ...state,
                tops: payload.data
            }
        case `${BOTTOMS}_FOUND`:
            return {
                ...state,
                bottoms: payload.data
            }
        case `${SHOES}_FOUND`:
            return {
                ...state,
                shoes: payload.data
            }
        case `${ACCESSORIES}_FOUND`:
            return {
                ...state,
                accessories: payload.data
            }
        default: return state;
    }
}
