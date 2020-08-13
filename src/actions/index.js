import * as Types from '../constants/ActionType'
import callerApi from '../ultils/callerApi'

export const actFecthProductsRequest = () => {
    return (dispatch) => {
        return callerApi("GET", "products", null).then(res => {
            dispatch(actFecthProducts(res.data))
        })
    }
}

export const actFecthProducts = (products) => {
    return {
        type: Types.FECTH_PRODUCT,
        products
    }
}