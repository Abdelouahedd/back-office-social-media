import React from 'react';

function SignIn(props) {
    return (
        <div class="bg-dark">
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-5">
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header justify-content-center"><h3 className="font-weight-light my-4">Login</h3></div>
                                        <div className="card-body">
                                            <form>
                                                <div className="form-group">
                                                    <label className="small mb-1" htmlFor="inputEmailAddress">Email</label>
                                                    <input className="form-control py-4" id="inputEmailAddress" type="email" placeholder="Enter email address" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="small mb-1" htmlFor="inputPassword">Password</label>
                                                    <input className="form-control py-4" id="inputPassword" type="password" placeholder="Enter password" />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox">
                                                        <input className="custom-control-input" id="rememberPasswordCheck" type="checkbox" />
                                                        <label className="custom-control-label" htmlFor="rememberPasswordCheck">Remember password</label>
                                                    </div>
                                                </div>
                                                <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                    <a className="small" href="auth-password-basic.html">Forgot Password?</a>
                                                    <a className="btn btn-primary" href="index.html">Login</a>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center">
                                            {/* <div className="small"><a href="auth-register-basic.html">Need an account? Sign up!</a></div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div id="layoutAuthentication_footer">
                    <footer className="footer mt-auto footer-dark">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 small">Copyright &#xA9; Your Website 2020</div>
                                <div className="col-md-6 text-md-right small">
                                    <a href="#!">Privacy Policy</a>
                            &#xB7;
                            <a href="#!">Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default SignIn;