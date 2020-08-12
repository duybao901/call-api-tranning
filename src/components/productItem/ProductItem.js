import React, { Component } from 'react';
import classnames from 'class-name'

class ProductItem extends Component {

    onDelete = (id) => {
        if(window.confirm('Bạn chắc chắc muốn xóa')) 
            this.props.onDelete(id)
    }

    render() {
        const { product, index } = this.props;
        if (product.status === "true") {
            product.status = true;
        }
        if (product.status === "false") {
            product.status = true;
        }
        var badgeClassName = classnames({
            "badge badge-primary": product.status === true,
            "badge badge-warning": product.status === false
        })
        return (
            <tr>
                <td>{index+1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} Đ</td>
                <td>
                    <span className={badgeClassName}>{product.status ? 'Còn hàng':'Hết hàng'}</span>
                </td>
                <td>
                    <button className="btn btn-primary"><i className="far fa-edit"></i>Sữa</button>
                    <button className="btn btn-danger" onClick={()=> this.onDelete(product.id)}><i className="far fa-trash-alt"></i>Xóa</button>
                </td>
            </tr>
        );
    }
}
export default ProductItem;
