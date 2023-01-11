import { DELETE_USER, CREATE_USER } from '../actions';

const INITIAL_STATE = {
    list: [
        { id: 1, name: 'Item 1', surname: 'Item 1', email: 'saenkops3@gmail.com' },
    ],
};

//{ type: DELETE_TODO, payload }

export default function (state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case DELETE_USER:
            return {
                ...state,
                list: state.list.filter((item) => payload !== item.id),
            };
            case CREATE_USER:
            return {
                ...state,
                list: [...state.list, {id: Date.now(), ...payload, isDone: false}
                ],
            };

        default:
            return state;
    }
}