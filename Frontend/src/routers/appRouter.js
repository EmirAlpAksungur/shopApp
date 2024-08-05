import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

import history from './history';
import PrivateRoute from './privateRouter'
import AppLayout from '../layout/appLayout'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import ProtectedRouter from './protectedRouter';
import AddProduct from '../pages/app/addProduct/addproduct'

import Hoc from '../pages/app/hoc/hoc'
const AppRouter = () => {
    return (
        <HistoryRouter history={history}>
            <Fragment>
                <Routes>
                    <Route exact path='/' element={<PrivateRoute />}>
                        <Route exact path='/' element={<AppLayout />}>
                            <Route exact path='/' element={<Hoc />} />
                            <Route exact path='/' element={<ProtectedRouter />}>
                                <Route exact path='/addproduct' element={<AddProduct />} />
                            </Route>
                        </Route>
                    </Route>
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/register' element={<Register />} />
                </Routes>
            </Fragment>
        </HistoryRouter>

    );
}

export default AppRouter