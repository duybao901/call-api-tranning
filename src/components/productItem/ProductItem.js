import React, { Component } from 'react';


class ProductItem extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>1</td>
                <td>Iphone 6 plus</td>
                <td>500</td>
                <td>
                    <span className="badge badge-primary">Còn hàng</span>
                </td>
                <td>
                    <button className="btn btn-primary"><i className="far fa-edit"></i>Sữa</button>
                    <button className="btn btn-danger"><i className="far fa-trash-alt"></i>Xóa</button>
                </td>
            </tr>
        );
    }
}
export default ProductItem;
