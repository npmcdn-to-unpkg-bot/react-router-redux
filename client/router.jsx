import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { hashHistory } from 'react-router'

import Layout from './layout';
import Home from './routes/home/index'
import AppContainer from './routes/'
const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}/>
            <Route path="index"
                   component={Layout}>
                <IndexRoute component={Home}/>
            </Route>
            <Route path="applist" component={AppContainer}>
                
            </Route>
        </Route>
        
    </Router>
)

export default routes