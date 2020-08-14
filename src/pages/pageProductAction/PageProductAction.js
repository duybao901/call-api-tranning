import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import * as Actions from '../../actions/index'

class PageHomeProductAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtCode: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: false
        }
    }
    
    componentDidMount() {
        var { match } = this.props;   
        if (match) {            
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
    }
    UNSAFE_componentWillReceiveProps(next) {
        const { itemEditing } = next;
        if (next && next.itemEditing) {            
            this.setState({
                id: itemEditing.id,
                txtCode: itemEditing.label,
                txtName: itemEditing.name,
                txtPrice:itemEditing.price,
                chkbStatus: itemEditing.status
            })
        }
    }
    onChange = (event) => {
        var targets = event.target;
        var name = targets.name;
        var value = targets.type === "checkbox" ? targets.checked : targets.value;      
        this.setState({
            [name]: value
        })
    }

    onSave =(e) => {
        e.preventDefault();
        const { id,  txtCode, txtName, txtPrice, chkbStatus } = this.state;
        var { history } = this.props;
        var data = {
            id: id,
            label: txtCode,
            name: txtName,
            price:txtPrice,
            status: chkbStatus
        }
        if (id) {
            this.props.onUpdateProduct(data)
            history.goBack();
        } else {            
            this.props.onAddProduct(data);
            history.goBack();
        }
    }
    render() {
        const { txtCode, txtName, txtPrice, chkbStatus } = this.state;
        return (
            <div className="container">
                <h2>Thêm Sản Phẩm</h2>
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Mã sản phẩm</label>
                        <input
                            name="txtCode"
                            type="text"
                            className="form-control"
                            onChange={this.onChange}
                            value={txtCode}
                            required
                        />
                        <small id="emailHelp" className="form-text text-muted">Không được để trống.</small>
                    </div>
                    <div className="form-group">
                        <label >Tên sản phẩm</label>
                        <input
                            name="txtName"
                            type="text"
                            className="form-control"
                            onChange={this.onChange}
                            value={txtName}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label >Giá sản phẩm</label>
                        <input
                            name="txtPrice"
                            type="number"
                            className="form-control"
                            onChange={this.onChange}
                            value={txtPrice}
                            required
                        />
                    </div>
                    <div className="form-group form-check">
                        <input
                            name="chkbStatus"
                            type="checkbox"
                            className="form-check-input"
                            onChange={this.onChange}     
                            checked={chkbStatus}
                        />
                        <label className="form-check-label">Còn hàng</label>
                    </div>
                    <Link to="/product-list" className="btn btn-info mr-2"><i className="fas fa-long-arrow-alt-left mr-1"></i>Trở Lại</Link>
                    <button type="submit" className="btn btn-primary"><i className="far fa-save mr-1"></i>Lưu Lại</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddProduct: (product) => {
            dispatch(Actions.actAddProductRequest(product))
        },
        onEditProduct: (id) => {
            dispatch(Actions.actGetProductRequest(id))   
        },
        onUpdateProduct: (product) => {
            dispatch(Actions.actUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageHomeProductAction);
