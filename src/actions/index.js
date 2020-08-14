import * as Types from '../constants/ActionType'
import callerApi from '../ultils/callerApi'

//* ************ Fetch Product  ************
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


export const actFecthProducts = (products) => {
    //console.log("act FecthProducts");
    return {
        type: Types.FECTH_PRODUCT,
        products
    }
}

//* ************ Delete Product  ************
export const actDeleteProductRequest = (id) => {
    //console.log("act DeleteProduct Request");

    return dispatch => {
        return callerApi("DELETE", `products/${id}`, null).then(res => {
            dispatch(actDeleteProduct(id));
        })
    }
}

export const actDeleteProduct = (id) => {
    //console.log("act DeleteProduc");
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}


//* ************ Add Product  ************
export const actAddProductRequest = (product) => {
    return dispatch => {
        return callerApi("POST", "products", product).then(res => {
            dispatch(actAddProduct(product))
        })
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

//* ************ Get Product -> itemEditing  ************
export const actGetProductRequest = (id) => {
    return dispatch => {
        return callerApi("GET", `products/${id}`, null).then(res => {
            dispatch(actGetProduct(res.data));
        })
    }
}

export const actGetProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

//* ************ Update Product ************
export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return callerApi("PUT", `products/${product.id}`, product).then(res => {            
            dispatch(actUpdateProduct(product))
        })
    }
}

export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}
