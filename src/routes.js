import React from 'react'

import PageHome from './pages/pageHome/PageHome'
import PageNotFound from './pages/pageNotFound/PageNotFound'
import PageProductList from './pages/pageProductList/PageProductList'
import PageProductAction from './pages/pageProductAction/PageProductAction'

const routers = [
    {
        path: '/',
        exact: true,
        main: () => <PageHome />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <PageProductList />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({ history }) => <PageProductAction history={history}/>
    },
    {
        // Neu khong tim thay 
        path: '',
        exact: false,
        main: ()=> <PageNotFound />
    }
]

export default routers