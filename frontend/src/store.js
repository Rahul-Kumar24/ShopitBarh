import  { createStore , combineReducers, applyMiddleware} from 'redux' ;
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import {productsReducer, productDetailsReducer} from './reducers/productReducers'
import { authRequired , userReducer, forgotPasswordReducer} from './reducers/userReducers';
import {cartReducers} from './reducers/cartReducers'
import {newOrderReducer, myOrdersReducer, orderDetailsReducer} from './reducers/orderReducers'

const reducer = combineReducers({
    products:productsReducer,
    productDetails :productDetailsReducer,
    auth:authRequired,
    user:userReducer,
    forgotPassword:forgotPasswordReducer,
    cart:cartReducers,
    newOrder:newOrderReducer,
    myOrders:myOrdersReducer,
    orderDetails:orderDetailsReducer,
})


let initialstate = {
    cart:{
        cartItems:localStorage.getItem('cartItems')
            ?JSON.parse(localStorage.getItem('cartItems'))
            :[],
        shippingInfo: localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : {}
    }
}

const middleware = [thunk]

const store = createStore(reducer, initialstate, composeWithDevTools(applyMiddleware(...middleware)))

export default store;