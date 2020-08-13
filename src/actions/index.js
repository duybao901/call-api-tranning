import * as Types from '../constants/ActionType'
import callerApi from '../ultils/callerApi'

export const actFecthProductsRequest = () => {
    //console.log("act FecthProducts Request");
    return (dispatch) => {
        // Fecth du lieu tu api
        // Sau do moi dispatch 
        // Su dung middleware de fecth xong moi dicpatch
        return callerApi("GET", "products", null).then(res => {
            dispatch(actFecthProducts(res.data))
        })
    }
}

export const actDeleteProductRequest = (id) => {
    //console.log("act DeleteProduct Request");

    return dispatch => {
        return callerApi("DELETE", `products/${id}`, null).then(res => {
            dispatch(actDeleteProduc(id));
        })
    }
}

export const actDeleteProduc = (id) => {
    //console.log("act DeleteProduc");
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actFecthProducts = (products) => {
    //console.log("act FecthProducts");
    return {
        type: Types.FECTH_PRODUCT,
        products
    }
}