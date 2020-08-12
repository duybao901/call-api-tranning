import React, { Component } from 'react';


class ProductList extends Component {

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
                    <tbody>
                        {products.length === 0 ?
                            <tr>
                                <td>
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </td>
                            </tr> : this.props.children
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}


export default ProductList;
