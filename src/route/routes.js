import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";



const Home = lazy(() => import("../components/home/home"));



const CreateRoutes = () => (
    <Switch>
        <Route path='/' component={Home} exact />
    </Switch>
);
export default CreateRoutes;