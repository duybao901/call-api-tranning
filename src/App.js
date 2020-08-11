import React, { Component } from 'react';
import './App.css';

import Menu from './components/menu/Menu'
import ProductList from './components/productList/ProductList'
import ProductItem from './components/productItem/ProductItem';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Menu />
                <div className="products container">
                    <button className="btn btn-primary btn-add">Thêm sản phẩm</button>
                    <ProductList />
                </div>
            </div>
        );
    }
}
export default App;
