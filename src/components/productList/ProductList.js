import React, { Component } from 'react';

import ProductItem from '../productItem/ProductItem'

var products = [
    {
        id: "1",
        label: "1",
        name: "IPhone 8 Plus",
        price: "12.400.000",
        status: true,
    },
    {
        id: "1",
        label: "2",
        name: "Samsung Galaxy S10 Plus",
        price: "16.000.000",
        status: false,
    }
];
class ProductList extends Component {

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
                    <tbody>
                        {this.showProducts(products)}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ProductList;
