const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").thunk;

const TODO_SUCCESS = "TODO_SUCCESS";
const TODO_LOADING = "TODO_LOADING";
const TODO_ERROR = "TODO_ERROR";

const initialTodo = {
    loading: false,
    todo: [],
    error: null
};

// Action creators
const loadingTodo = () => {
    return {
        type: TODO_LOADING
    };
};

const errorTodo = (error) => {
    return {
        type: TODO_ERROR,
        payload: error
    };
};

const loadingSuccess = (todo) => {
    return {
        type: TODO_SUCCESS,
        payload: todo
    };
};

// Reducer
const todoReducer = (state = initialTodo, action) => {
    switch (action.type) {
        case TODO_LOADING:
            return {
                ...state,
                loading: true,
                todo: [],
                error: null
            };

        case TODO_ERROR:
            return {
                ...state,
                loading: false,
                todo: [],
                error: action.payload
            };

        case TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                todo: action.payload,
                error: null
            };

        default:
            return state;
    }
};

// Thunk
const fetchTodo = () => {
    return async (dispatch) => {
        dispatch(loadingTodo());

        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/todos"
            );

            const data = await response.json();

            dispatch(loadingSuccess(data));
        } catch (error) {
            dispatch(errorTodo(error.message));
        }
    };
};

// Store
const store = createStore(
    todoReducer,
    applyMiddleware(thunk)
);

store.subscribe(() => {
    console.log(store.getState());
});

// Dispatch thunk
store.dispatch(fetchTodo());