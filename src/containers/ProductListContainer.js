import React, { Component } from 'react';
import { connect } from 'react-redux'

import ProductItem from '../components/productItem/ProductItem'
import ProductList from '../components/productList/ProductList'

import * as Actions from '../actions/index'



class ProductListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    // render -> componentdidmount -> this.setState -> render 
    // Nhu the nay thi du lieu moi co
    componentDidMount() {           
        //console.log("Product Container componentDidMount")
        this.props.fecthAllProducts();    
    }
    
    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    }

    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        index={index}
                        product={product}
                        onDelete={this.onDelete}
                    />
                )
            })
        }
        return result;
    }
    render() {
        const { products } = this.props;
        return (
            <ProductList products={products}>
                {this.showProducts(products)}
            </ProductList>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fecthAllProducts: () => {
            dispatch(Actions.actFecthProductsRequest());
        },
        onDeleteProduct: (id) => {
            dispatch(Actions.actDeleteProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
