import React, { Component } from 'react';
import classnames from 'class-name'

class ProductItem extends Component {
    render() {
        const { product, index } = this.props;
        var badgeClassName = classnames({
            "badge badge-primary": product.status === true,
            "badge badge-warning": product.status === false
        })
        return (
            <tr>
                <td>{index+1}</td>
                <td>{product.label}</td>
                <td>{product.name}</td>
                <td>{product.price} Đ</td>
                <td>
                    <span className={badgeClassName}>{product.status ? 'Còn hàng':'Hết hàng'}</span>
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
