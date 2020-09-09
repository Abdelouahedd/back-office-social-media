import React from 'react';
import Footer from '../shared/footer';
import * as Icon from 'react-feather';

function Main(props) {
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
                        <div className="col-xxl-4 col-xl-12 mb-4">
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
                                                src={require("../../assets/img/freepik/at-work-pana.svg")}
                                                style={{ maxWidth: "26rem" }}
                                                alt="at-work img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-3">
                            <div className="card bg-primary text-white mb-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-3">
                                            <div className="text-white-75 small">Earnings (Monthly)</div>
                                            <div className="text-lg font-weight-bold">$40,000</div>
                                        </div>
                                        <Icon.Calendar className="feather-xl text-white-50" />

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-3">
                            <div className="card bg-warning text-white mb-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-3">
                                            <div className="text-white-75 small">Earnings (Annual)</div>
                                            <div className="text-lg font-weight-bold">$215,000</div>
                                        </div>
                                        <Icon.DollarSign className="feather-xl text-white-50" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-3 ">
                            <div className="card bg-success text-white mb-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-3">
                                            <div className="text-white-75 small">Task Completion</div>
                                            <div className="text-lg font-weight-bold">24</div>
                                        </div>
                                        <Icon.CheckSquare className="feather-xl text-white-50" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-3 ">
                            <div className="card bg-danger text-white mb-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-3">
                                            <div className="text-white-75 small">Pending Requests</div>
                                            <div className="text-lg font-weight-bold">17</div>
                                        </div>
                                        <Icon.MessageCircle className="feather-xl text-white-50" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-xxl-4 col-xl-6 mb-4">
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
                                <table className="table table-bordered table-hover" id="dataTable" width="100%"
                                    cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <td>Tiger Nixon</td>
                                            <td>System Architect</td>
                                            <td>Edinburgh</td>
                                            <td>61</td>
                                            <td>2011/04/25</td>
                                            <td>$320,800</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"> <Icon.MoreVertical size="15" /></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark">
                                                    <Icon.Trash2 size="15" />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Garrett Winters</td>
                                            <td>Accountant</td>
                                            <td>Tokyo</td>
                                            <td>63</td>
                                            <td>2011/07/25</td>
                                            <td>$170,750</td>
                                            <td>
                                                <div className="badge badge-warning badge-pill">Pending</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"> <Icon.MoreVertical size="15" /></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark">
                                                    <Icon.Trash2 size="15" />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ashton Cox</td>
                                            <td>Junior Technical Author</td>
                                            <td>San Francisco</td>
                                            <td>66</td>
                                            <td>2009/01/12</td>
                                            <td>$86,000</td>
                                            <td>
                                                <div className="badge badge-secondary badge-pill">Part-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                                                    <Icon.MoreVertical size="15" />
                                                </button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><Icon.Trash2 size="15" /></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Main;