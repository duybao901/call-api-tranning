import React, { Component } from 'react';

import ProductListContainer from '../../containers/ProductListContainer'

class PageProductList extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-md-12 col-lg-12">
                    <button className="btn btn-primary btn-add">Thêm sản phẩm</button>
                    <ProductListContainer>                       
                    </ProductListContainer>
                </div>
            </div>
         
        );
    }
}
export default PageProductList;
