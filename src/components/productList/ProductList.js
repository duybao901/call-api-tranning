import React, { Component } from 'react';

import ProductItem from '../productItem/ProductItem'

class ProductList extends Component {
    render() {
        return (
            <div className="products container">
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-lg-12">
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
                                <tbody>
                                    <ProductItem></ProductItem>
                                    <ProductItem></ProductItem>
                                    <ProductItem></ProductItem>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProductList;
