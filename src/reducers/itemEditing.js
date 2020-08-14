import * as Types from '../constants/ActionType'

var initialState = {};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.EDIT_PRODUCT:
            state = action.product;
            return {...state}
        default:
            return {...state};
    }
}
export default myReducer;