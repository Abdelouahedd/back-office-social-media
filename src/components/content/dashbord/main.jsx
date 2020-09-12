import React, { useEffect, useState } from 'react';
import Footer from '../../shared/footer';
import * as Icon from 'react-feather';
import { API_URL } from '../../../_helper/helper';
import UsersTable from '../../tables/usersTable'

function Main(props) {


    const [info, setInfo] = useState({
        nbrPost: 0,
        nbrUsers: 0,
        nbrCommunities: 0,
        nbrRequest: 0,
        newUser: []
    });



    useEffect(() => {
        const abortCtrl = new AbortController();
        const opts = { signal: abortCtrl.signal };

        const fetchData = async () => {
            await fetch(`${API_URL}/admin/dash`, {
                method: 'GET',
                opts,
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + localStorage.getItem('jwtInfo')
                }
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    if (res.success === true) {
                        setInfo(res.dashObject);
                    }
                })
                .catch(err => {
                    console.error(err);
                    if (err.name === 'AbortError') {
                        console.log('request was cancelled');
                    }
                });
        }

        fetchData();

        return () => {
            abortCtrl.abort();
        }
    }, []);



    return (
        <div id="layoutSidenav_content">

            <main>
                <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
                    <div className="container">
                        <div className="page-header-content pt-4">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-auto mt-4">
                                    <h1 className="page-header-title">
                                        <div className="page-header-icon"><Icon.Activity size={25} /></div>
                                        Dashboard
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container mt-n10">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 mb-4">
                            <div className="card h-100">
                                <div className="card-body h-100 d-flex flex-column justify-content-center py-5 py-xl-4">
                                    <div className="row align-items-center">
                                        <div className="col-xl-8 col-xxl-12">
                                            <div className="text-center px-4 mb-4 mb-xl-0 mb-xxl-4">
                                                <h1 className="text-primary">Welcome Back!</h1>
                                                <p className="text-gray-700 mb-0">It&apos;s time to get started! View
                                                    new opportunities now, or continue on your previous work.</p>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-xxl-12 text-center">
                                            <img className="img-fluid"
                                                src={require("../../../assets/img/freepik/at-work-pana.svg")}
                                                style={{ maxWidth: "26rem" }}
                                                alt="at-work img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-3 col-lg-3">
                            <div className="card bg-primary text-white mb-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-3">
                                            <div className="text-white-95 small">Number of users</div>
                                            <div className="text-lg font-weight-bold">{info.nbrUsers}</div>
                                        </div>
                                        <i className="fa fa-user-circle fa-2x text-white-50" aria-hidden="true"></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-3">
                            <div className="card bg-warning text-white mb-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr">
                                            <div className="text-white-95 small">Number of communities</div>
                                            <div className="text-lg font-weight-bold">{info.nbrCommunities}</div>
                                        </div>
                                        <i className="fa fa-users fa-2x text-white-50" aria-hidden="true"></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-3 ">
                            <div className="card bg-success text-white mb-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-3">
                                            <div className="text-white-95 small">Number of posts</div>
                                            <div className="text-lg font-weight-bold">{info.nbrPost}</div>
                                        </div>
                                        <img className="feather-xl" style={{ fill: "red", opacity: "50%" }}
                                            src={require('../../../assets/img/share-post.svg')} alt="Posts" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-3 ">
                            <div className="card bg-danger text-white mb-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-3">
                                            <div className="text-white-95 small">New Requests</div>
                                            <div className="text-lg font-weight-bold">{info.nbrRequest}</div>
                                        </div>
                                        <i className="fa fa-user-plus feather-xl text-white-50" aria-hidden="true"></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-xxl-8 col-xl-6 mb-4">
                            <div className="card card-header-actions h-100">
                                <div className="card-header">
                                    Recent Activity
                                    <div className="dropdown no-caret">
                                        <button className="btn btn-transparent-dark btn-icon dropdown-toggle"
                                            id="dropdownMenuButton" type="button" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                            <Icon.MoreVertical className="text-gray-500" />
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right animated--fade-in-up"
                                            aria-labelledby="dropdownMenuButton">
                                            <h6 className="dropdown-header">Filter Activity:</h6>
                                            <a className="dropdown-item" href="#!"><span
                                                className="badge badge-green-soft text-green my-1">Commerce</span></a>
                                            <a className="dropdown-item" href="#!"><span
                                                className="badge badge-blue-soft text-blue my-1">Reporting</span></a>
                                            <a className="dropdown-item" href="#!"><span
                                                className="badge badge-yellow-soft text-yellow my-1">Server</span></a>
                                            <a className="dropdown-item" href="#!"><span
                                                className="badge badge-purple-soft text-purple my-1">Users</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="timeline timeline-xs">
                                        <div className="timeline-item">
                                            <div className="timeline-item-marker">
                                                <div className="timeline-item-marker-text">27 min</div>
                                                <div className="timeline-item-marker-indicator bg-green"></div>
                                            </div>
                                            <div className="timeline-item-content">
                                                New order placed!
                                                <a className="font-weight-bold text-dark" href="#!">Order #2912</a>
                                                has been successfully placed.
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-item-marker">
                                                <div className="timeline-item-marker-text">58 min</div>
                                                <div className="timeline-item-marker-indicator bg-blue"></div>
                                            </div>
                                            <div className="timeline-item-content">
                                                Your
                                                <a className="font-weight-bold text-dark" href="#!">weekly report</a>
                                                has been generated and is ready to view.
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-item-marker">
                                                <div className="timeline-item-marker-text">2 hrs</div>
                                                <div className="timeline-item-marker-indicator bg-purple"></div>
                                            </div>
                                            <div className="timeline-item-content">
                                                New user
                                                <a className="font-weight-bold text-dark" href="#!">Valerie Luna</a>
                                                has registered
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-item-marker">
                                                <div className="timeline-item-marker-text">1 day</div>
                                                <div className="timeline-item-marker-indicator bg-yellow"></div>
                                            </div>
                                            <div className="timeline-item-content">Server activity monitor alert</div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-item-marker">
                                                <div className="timeline-item-marker-text">1 day</div>
                                                <div className="timeline-item-marker-indicator bg-green"></div>
                                            </div>
                                            <div className="timeline-item-content">
                                                New order placed!
                                                <a className="font-weight-bold text-dark" href="#!">Order #2911</a>
                                                has been successfully placed.
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-item-marker">
                                                <div className="timeline-item-marker-text">1 day</div>
                                                <div className="timeline-item-marker-indicator bg-purple"></div>
                                            </div>
                                            <div className="timeline-item-content">
                                                Details for
                                                <a className="font-weight-bold text-dark" href="#!">Marketing and
                                                    Planning Meeting</a>
                                                have been updated.
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-item-marker">
                                                <div className="timeline-item-marker-text">2 days</div>
                                                <div className="timeline-item-marker-indicator bg-green"></div>
                                            </div>
                                            <div className="timeline-item-content">
                                                New order placed!
                                                <a className="font-weight-bold text-dark" href="#!">Order #2910</a>
                                                has been successfully placed.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-6 mb-4">
                            <div className="card card-header-actions h-100">
                                <div className="card-header">
                                    Progress Tracker
                                    <div className="dropdown no-caret">
                                        <button className="btn btn-transparent-dark btn-icon dropdown-toggle"
                                            id="dropdownMenuButton" type="button" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                            <Icon.MoreVertical className="text-gray-500" />
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right animated--fade-in-up"
                                            aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#!">
                                                <div className="dropdown-item-icon">
                                                    <Icon.List className="text-gray-500" />
                                                </div>
                                                Manage Tasks
                                            </a>
                                            <a className="dropdown-item" href="#!">
                                                <div className="dropdown-item-icon">

                                                    <Icon.PlusCircle className="text-gray-500" />
                                                </div>
                                                Add New Task
                                            </a>
                                            <a className="dropdown-item" href="#!">
                                                <div className="dropdown-item-icon">
                                                    <Icon.MinusCircle className="text-gray-500" />
                                                </div>
                                                Delete Tasks
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h4 className="small">
                                        Server Migration
                                        <span className="float-right font-weight-bold">20%</span>
                                    </h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-danger" role="progressbar"
                                            style={{ width: "20%" }}
                                            aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small">
                                        Sales Tracking
                                        <span className="float-right font-weight-bold">40%</span>
                                    </h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-warning" role="progressbar"
                                            style={{ width: "40%" }}
                                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small">
                                        Customer Database
                                        <span className="float-right font-weight-bold">60%</span>
                                    </h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar" role="progressbar" style={{ width: "60%" }}
                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small">
                                        Payout Details
                                        <span className="float-right font-weight-bold">80%</span>
                                    </h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-info" role="progressbar" style={{ width: "80%" }}
                                            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small">
                                        Account Setup
                                        <span className="float-right font-weight-bold">Complete!</span>
                                    </h4>
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar"
                                            style={{ width: "100%" }}
                                            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <a className="card-footer" href="#!">
                                    <div className="d-flex align-items-center justify-content-between small text-body">
                                        Visit Task Center
                                        <i data-feather="arrow-right"></i>
                                        <Icon.ArrowRight />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header">
                            <div className="row align-items-center ml-auto">
                                <div className="col-8 ">
                                    Personnel Management
                                </div>
                                <div className="col-4">
                                    <form className="form-inline mr-auto d-none d-md-block">
                                        <div className="input-group input-group-joined input-group-solid">
                                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search ..." />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <Icon.Search size={15} />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="datatable">
                                <UsersTable users={info.newUser} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div >
    );
}

export default Main;