import  { createStore , combineReducers, applyMiddleware} from 'redux' ;
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import {productsReducer, productDetailsReducer} from './reducers/productReducers'
import { authRequired , userReducer} from './reducers/userReducers';
const reducer = combineReducers({
    products:productsReducer,
    productDetails :productDetailsReducer,
    auth:authRequired,
    user:userReducer
})


let initialstate = {}

const middleware = [thunk]

const store = createStore(reducer, initialstate, composeWithDevTools(applyMiddleware(...middleware)))

export default store;