import actions from './actions';

const { INCREMENT, DECREMENT, RESET } = actions;

const initialState = { counter: 0 };

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            state = {
                counter: state.counter < 21
                    ? state.counter += action.payload
                    : state.counter
            };
            return state;

        case DECREMENT:
            state = {
                counter: state.counter > -9
                    ? state.counter -= action.payload
                    : state.counter
            };
            return state;

        case RESET:
            state = { counter: 0 };
            return state;

        default:
            return state;
    }
}