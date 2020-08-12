import React, { Component } from 'react';

import ProductItem from '../productItem/ProductItem'



class ProductList extends Component {

    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {            
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        index={index}
                        product={product}
                    />
                )
            })
        }
        return result;
    }

    render() {
        var { products } = this.props      
        return (
            <div className="panel">
                <span className="panel-heading">Danh sách sản phẩm</span>
                <table className="table-bordered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã</th>
                            <th>Tên</th>
                            <th>Giá</th>
                            <th>Trạng thái</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    {products.length === 0 ?
                        <div class="spinner-border text-primary mr-auto" role="status">
                            <span class="sr-only">Loading...</span>
                        </div> :
                        <tbody>
                            {this.showProducts(products)}
                        </tbody>
                    }                    
                </table>
            </div>
        );
    }

}


export default ProductList;
