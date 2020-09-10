import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import PrivateRoute from './route/privateRoute';
import Home from './components/home/home';
import SignIn from './components/signIN/signIn';
import Page404 from './components/pageNotFound/p404';



function App() {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/sign' component={SignIn} />
                    <PrivateRoute path='/' exact component={Home} />
                    <Route component={Page404} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
