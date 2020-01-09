var redux = require('redux');

const accessInitialState = {
    auth:false,
    role:"",
    token:"",
}
const allReducer = (state = accessInitialState, action) => {
    switch (action.type) {
        case "CHANGE_ADMIN":
            return {...state,role:"admin"}
        case "CHANGE_ACCOUNTANT":
            return {...state,role:"thongKe"}
        case "CHANGE_DEFAULT":
            return {...state,role:"trucTongDai"}
        case "CHANGE_AUTHED_TRUE":
            return {...state,auth:true}
            case "CHANGE_AUTHED_FALSE":
                return {...state,auth:false}             
        case "SET_TOKEN":
            return {...state,token:action.token}
        case "SET_TOKEN_DEFAULT":
                return {...state,token:""}    
        default:
            return state
    }
}
var store=redux.createStore(allReducer);
export default store