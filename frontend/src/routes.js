import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/login';
import Main from './pages/main';

export default function Routes(){
    return(
        // exact ja que /main tb tem /
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/dev/:id" component={Main} />
        </BrowserRouter>
    )
}