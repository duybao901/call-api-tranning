import React, { Component } from 'react';
import { connect } from 'react-redux'


import ProductItem from '../components/productItem/ProductItem'
import ProductList from '../components/productList/ProductList'
import callerApi from '../ultils/callerApi'



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
        callerApi("GET", 'products', null).then(res => {
            this.setState({
                products: res.data
            })
        })
    }

    showProducts = (products) => {
        var result = null;
        result = products.map((product, index) => {
            return (
                <ProductItem
                    key={index}
                    index={index}
                    product={product}
                />
            )
        })
        return result;
    }

    render() {
        // const { products } = this.props;
        var { products } = this.state;
        return (
            <ProductList products={products}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductListContainer);
