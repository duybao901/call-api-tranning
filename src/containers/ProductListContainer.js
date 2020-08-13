import React, { Component } from 'react';
import { connect } from 'react-redux'

import ProductItem from '../components/productItem/ProductItem'
import ProductList from '../components/productList/ProductList'
import callerApi from '../ultils/callerApi'
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
        //! Cach nay khonh khuyen cao nen dung
        callerApi("GET", 'products', null).then(res => {                
            this.props.fecthAllProducts(res.data);
        })
    }
    
    onDelete = (id) => {
        const { products } = this.state
        var filterProducts;
        callerApi("DELETE", `products/${id}`, null).then(res => {
            if (res.status === 200) {
                filterProducts = products.filter((product) => {
                    return product.id !== id
                })
                this.setState({
                    products: filterProducts
                })
            }
        })
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
        //var { products } = this.state;
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
        fecthAllProducts: (products) => {
            dispatch(Actions.actFecthProductsRequest(products));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
