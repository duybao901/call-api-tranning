import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

var menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản Lý Sản Phẩm',
        to: '/product-list',
        exact: false
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}        
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'nav-item-active' : '';
                return (
                    <li className={`nav-item ${active}`} >
                        <Link to={to} className="menu-link">{label}</Link>
                    </li>
                )
            }}
        />
    )
}

class Menu extends Component {

    showMenuLink = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return <MenuLink
                    key={index}
                    label={menu.name}
                    to={menu.to}
                    activeOnlyWhenExact={menu.exact} >                
                </MenuLink>
            })
        }
        return result;
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="/">CallAPI</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {this.showMenuLink(menus)}
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Menu;
