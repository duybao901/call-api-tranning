import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import ProductListContainer from '../../containers/ProductListContainer'

class PageProductList extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-md-12 col-lg-12">
                    <Link to="/product/add" className="btn btn-primary btn-add">Thêm sản phẩm</Link>
                    <ProductListContainer>                       
                    </ProductListContainer>
                </div>
            </div>
         
        );
    }
}
export default PageProductList;
