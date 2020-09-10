import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";


const Main = lazy(() => import("../components/content/dashbord/main"));
const usersManag = lazy(() => import("../components/content/users/usersManag"));
const CommunitieManag = lazy(() => import("../components/content/communitie/CommunitieManag"));
const CreateRoutes = () => (
    <Switch>
        <Route path='/' component={Main} exact />
        <Route path='/users' component={usersManag} exact />
        <Route path='/com' component={CommunitieManag} exact />
    </Switch>
);
export default CreateRoutes;