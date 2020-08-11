import React, { Component } from 'react';

class PageHomeProductAction extends Component {
    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label>Mã sản phẩm</label>
                        <input type="text" className="form-control"/>
                        <small id="emailHelp" className="form-text text-muted">Không được để trống.</small>
                    </div>
                    <div className="form-group">
                        <label >Tên sản phẩm</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label >Giá sản phẩm</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input"/>
                        <label className="form-check-label">Còn hàng</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </form>
            </div>
        );
    }
}
export default PageHomeProductAction;
