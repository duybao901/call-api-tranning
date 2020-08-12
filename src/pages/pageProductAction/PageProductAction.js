import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import callerApi from '../../ultils/callerApi'

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
    onChange = (event) => {
        var targets = event.target;
        var name = targets.name;
        var value = targets.type === "checkbox" ? targets.checked : targets.value;
        if (targets.name === 'txtPrice') {
            value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }
        this.setState({
            [name]: value
        })
    }

    onSave =(e) => {
        e.preventDefault();
        const { txtCode, txtName, txtPrice, chkbStatus } = this.state;
        var { history } = this.props
        var data = {
            id: txtCode,
            name: txtName,
            price:txtPrice,
            status: chkbStatus
        }
        callerApi("POST", "products", {...data}).then(res => {
            history.goBack();
        })        
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
                            value={chkbStatus}
                        />
                        <label className="form-check-label">Còn hàng</label>
                    </div>
                    <Link to="/product-list" className="btn btn-primary mr-2"><i className="fas fa-long-arrow-alt-left mr-1"></i>Trở Lại</Link>
                    <button type="submit" className="btn btn-primary"><i className="far fa-save mr-1"></i>Lưu Lại</button>
                </form>
            </div>
        );
    }
}
export default PageHomeProductAction;
