import { createStore } from 'redux'

const counterReducer = (state = { products: [] }, action) =>{
    if (action.type === 'getProducts'){
        return {
            products: action.data
        }
    }
    if (action.type === 'addProduct'){
        return {
            products: [...state.products, action.data]
        }
    }
    return state;
}

const store = createStore(counterReducer);

export default store;
