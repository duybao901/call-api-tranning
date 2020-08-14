import * as Types from '../constants/ActionType'

var initialState = []

var myReducer = (state = initialState, action) => {
    var { id , product } = action; 
    switch (action.type) {
        case Types.FECTH_PRODUCT:
            state = action.products;
            return [...state]
        case Types.DELETE_PRODUCT:
            const newState = state.filter((product) => {
                return product.id !== id;
            })
            return [...newState];
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state]
        case Types.UPDATE_PRODUCT:
            const index = state.findIndex((products) => {
                return products.id === product.id;
            })
            state[index].product = product;
            return [...state];
        default:
            return [...state];
    }   
}

export default myReducer