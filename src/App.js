import React, { Suspense } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import PrivateRoute from './route/privateRoute';
import Home from './components/home/home';
import SignIn from './components/signIN/signIn';
import Page404 from './components/pageNotFound/p404';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { ToastProvider } from 'react-toast-notifications';

const Spinner = (props) => {
    return (
        <div id="layoutAuthentication">
            <main id="layoutAuthentication_content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="mt-5">
                                <button className="btn btn-primary" style={{ width: '340px', margin: 'auto', display: 'block' }}>
                                    <span className="spinner-border spinner-border-lg"></span> Loading..
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

function App() {
    return (
        <Provider store={store}>
            <ToastProvider
                autoDismiss
            >
                <Suspense fallback={<Spinner />}>
                    <BrowserRouter>
                        <Switch>
                            <Route path='/sign' component={SignIn} />
                            {/* <Route path='/' component={Home} /> */}
                            <PrivateRoute path='/'  component={Home} />
                            <Route component={Page404} />
                        </Switch>
                    </BrowserRouter>
                </Suspense>
            </ToastProvider>
        </Provider>
    );
}

export default App;
