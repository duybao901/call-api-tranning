import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="#">CallAPI</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Trang Chủ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Danh sách sản phẩm</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Menu;
