import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Page404(props) {
    let location = useLocation();
    return (
        <div>
            <div id="layoutError">
                <div id="layoutError_content">
                    <main>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-6">
                                    <div class="text-center mt-4">
                                        <img class="img-fluid p-4" src={require("../../assets/img/freepik/404-error-pana.svg")} alt="404" />
                                        <p class="lead">This requested {location.pathname} was not found on this server.</p>
                                        <Link class="text-arrow-icon" to="/">
                                            <i class="ml-0 mr-1" data-feather="arrow-left"></i>
                                        Return to Dashboard
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div id="layoutError_footer">
                    <footer class="footer mt-auto footer-light">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-6 small">Copyright &#xA9; Your Website 2020</div>
                                <div class="col-md-6 text-md-right small">
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