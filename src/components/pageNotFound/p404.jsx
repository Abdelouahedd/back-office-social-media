import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Page404(props) {
    let location = useLocation();
    return (
        <div>
            <div id="layoutError">
                <div id="layoutError_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="text-center mt-4">
                                        <img className="img-fluid p-4" src={require("../../assets/img/freepik/404-error-pana.svg")} alt="404" />
                                        <p className="lead">This requested {location.pathname} was not found on this server.</p>
                                        <Link className="text-arrow-icon" to="/">
                                            <i className="ml-0 mr-1" data-feather="arrow-left"></i>
                                        Return to Dashboard
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div id="layoutError_footer">
                    <footer className="footer mt-auto footer-light">
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

export default Page404;