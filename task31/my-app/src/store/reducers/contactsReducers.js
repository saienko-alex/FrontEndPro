import { DELETE_USER, CREATE_USER, SET_USER, LOADING_DATA } from '../actions/contacts';

const INITIAL_STATE = {
    isLoading: false,
    list: [
 ],
};

//{ type: DELETE_TODO, payload }

export default function (state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case LOADING_DATA:
            return {...state, isLoading: payload};
        case DELETE_USER:
            return {
                ...state,
                list: state.list.filter((item) => payload !== item.id),
            };
            case CREATE_USER:
            return {
                ...state,
                list: [...state.list, payload
                ],
            };
            case SET_USER:
            return {
                ...state,
                list: payload,
            };

        default:
            return state;
    }
}


