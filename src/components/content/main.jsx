import React from 'react';
import Footer from '../shared/footer';

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
                                        <div className="page-header-icon"><i data-feather="activity"></i></div>
                                        Dashboard
                                    </h1>
                                    <div className="page-header-subtitle">Example dashboard overview and content
                                    summary
                                    </div>
                                </div>
                                <div className="col-12 col-xl-auto mt-4">
                                    <button className="btn btn-white btn-sm line-height-normal p-3" id="reportrange">
                                        <i className="mr-2 text-primary" data-feather="calendar"></i>
                                        <span></span>
                                        <i className="ml-1" data-feather="chevron-down"></i>
                                    </button>
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
                        <div className="col-xxl-4 col-xl-6 mb-4">
                            <div className="card card-header-actions h-100">
                                <div className="card-header">
                                    Recent Activity
                                    <div className="dropdown no-caret">
                                        <button className="btn btn-transparent-dark btn-icon dropdown-toggle"
                                            id="dropdownMenuButton" type="button" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"><i className="text-gray-500"
                                                data-feather="more-vertical"></i>
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
                                            aria-haspopup="true" aria-expanded="false"><i className="text-gray-500"
                                                data-feather="more-vertical"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right animated--fade-in-up"
                                            aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#!">
                                                <div className="dropdown-item-icon"><i className="text-gray-500"
                                                    data-feather="list"></i></div>
                                                Manage Tasks
                                            </a>
                                            <a className="dropdown-item" href="#!">
                                                <div className="dropdown-item-icon"><i className="text-gray-500"
                                                    data-feather="plus-circle"></i>
                                                </div>
                                                Add New Task
                                            </a>
                                            <a className="dropdown-item" href="#!">
                                                <div className="dropdown-item-icon"><i className="text-gray-500"
                                                    data-feather="minus-circle"></i>
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
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-3 col-lg-6">
                            <div className="card bg-primary text-white mb-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-3">
                                            <div className="text-white-75 small">Earnings (Monthly)</div>
                                            <div className="text-lg font-weight-bold">$40,000</div>
                                        </div>
                                        <i className="feather-xl text-white-50" data-feather="calendar"></i>
                                    </div>
                                </div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <a className="small text-white stretched-link" href="/">View Report</a>
                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-6">
                            <div className="card bg-warning text-white mb-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-3">
                                            <div className="text-white-75 small">Earnings (Annual)</div>
                                            <div className="text-lg font-weight-bold">$215,000</div>
                                        </div>
                                        <i className="feather-xl text-white-50" data-feather="dollar-sign"></i>
                                    </div>
                                </div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <a className="small text-white stretched-link" href="/">View Report</a>
                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-6">
                            <div className="card bg-success text-white mb-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-3">
                                            <div className="text-white-75 small">Task Completion</div>
                                            <div className="text-lg font-weight-bold">24</div>
                                        </div>
                                        <i className="feather-xl text-white-50" data-feather="check-square"></i>
                                    </div>
                                </div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <a className="small text-white stretched-link" href="/">View Tasks</a>
                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-6">
                            <div className="card bg-danger text-white mb-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-3">
                                            <div className="text-white-75 small">Pending Requests</div>
                                            <div className="text-lg font-weight-bold">17</div>
                                        </div>
                                        <i className="feather-xl text-white-50" data-feather="message-circle"></i>
                                    </div>
                                </div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <a className="small text-white stretched-link" href="/">View Requests</a>
                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 mb-4">
                            <div className="card card-header-actions h-100">
                                <div className="card-header">
                                    Earnings Breakdown
                                    <div className="dropdown no-caret">
                                        <button className="btn btn-transparent-dark btn-icon dropdown-toggle"
                                            id="areaChartDropdownExample" type="button" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"><i className="text-gray-500"
                                                data-feather="more-vertical"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right animated--fade-in-up"
                                            aria-labelledby="areaChartDropdownExample">
                                            <a className="dropdown-item" href="#!">Last 12 Months</a>
                                            <a className="dropdown-item" href="#!">Last 30 Days</a>
                                            <a className="dropdown-item" href="#!">Last 7 Days</a>
                                            <a className="dropdown-item" href="#!">This Month</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#!">Custom Range</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="chart-area">
                                        <canvas id="myAreaChart" width="100%" height="30"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 mb-4">
                            <div className="card card-header-actions h-100">
                                <div className="card-header">
                                    Monthly Revenue
                                    <div className="dropdown no-caret">
                                        <button className="btn btn-transparent-dark btn-icon dropdown-toggle"
                                            id="areaChartDropdownExample" type="button" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"><i className="text-gray-500"
                                                data-feather="more-vertical"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right animated--fade-in-up"
                                            aria-labelledby="areaChartDropdownExample">
                                            <a className="dropdown-item" href="#!">Last 12 Months</a>
                                            <a className="dropdown-item" href="#!">Last 30 Days</a>
                                            <a className="dropdown-item" href="#!">Last 7 Days</a>
                                            <a className="dropdown-item" href="#!">This Month</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#!">Custom Range</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="chart-bar">
                                        <canvas id="myBarChart" width="100%" height="30"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">Personnel Management</div>
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
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
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
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
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
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Cedric Kelly</td>
                                            <td>Senior Javascript Developer</td>
                                            <td>Edinburgh</td>
                                            <td>22</td>
                                            <td>2012/03/29</td>
                                            <td>$433,060</td>
                                            <td>
                                                <div className="badge badge-info badge-pill">Contract</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Airi Satou</td>
                                            <td>Accountant</td>
                                            <td>Tokyo</td>
                                            <td>33</td>
                                            <td>2008/11/28</td>
                                            <td>$162,700</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Brielle Williamson</td>
                                            <td>Integration Specialist</td>
                                            <td>New York</td>
                                            <td>61</td>
                                            <td>2012/12/02</td>
                                            <td>$372,000</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Herrod Chandler</td>
                                            <td>Sales Assistant</td>
                                            <td>San Francisco</td>
                                            <td>59</td>
                                            <td>2012/08/06</td>
                                            <td>$137,500</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Rhona Davidson</td>
                                            <td>Integration Specialist</td>
                                            <td>Tokyo</td>
                                            <td>55</td>
                                            <td>2010/10/14</td>
                                            <td>$327,900</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Colleen Hurst</td>
                                            <td>Javascript Developer</td>
                                            <td>San Francisco</td>
                                            <td>39</td>
                                            <td>2009/09/15</td>
                                            <td>$205,500</td>
                                            <td>
                                                <div className="badge badge-info badge-pill">Contract</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Sonya Frost</td>
                                            <td>Software Engineer</td>
                                            <td>Edinburgh</td>
                                            <td>23</td>
                                            <td>2008/12/13</td>
                                            <td>$103,600</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Jena Gaines</td>
                                            <td>Office Manager</td>
                                            <td>London</td>
                                            <td>30</td>
                                            <td>2008/12/19</td>
                                            <td>$90,560</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Quinn Flynn</td>
                                            <td>Support Lead</td>
                                            <td>Edinburgh</td>
                                            <td>22</td>
                                            <td>2013/03/03</td>
                                            <td>$342,000</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Charde Marshall</td>
                                            <td>Regional Director</td>
                                            <td>San Francisco</td>
                                            <td>36</td>
                                            <td>2008/10/16</td>
                                            <td>$470,600</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Haley Kennedy</td>
                                            <td>Senior Marketing Designer</td>
                                            <td>London</td>
                                            <td>43</td>
                                            <td>2012/12/18</td>
                                            <td>$313,500</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Tatyana Fitzpatrick</td>
                                            <td>Regional Director</td>
                                            <td>London</td>
                                            <td>19</td>
                                            <td>2010/03/17</td>
                                            <td>$385,750</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Michael Silva</td>
                                            <td>Marketing Designer</td>
                                            <td>London</td>
                                            <td>66</td>
                                            <td>2012/11/27</td>
                                            <td>$198,500</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Paul Byrd</td>
                                            <td>Chief Financial Officer (CFO)</td>
                                            <td>New York</td>
                                            <td>64</td>
                                            <td>2010/06/09</td>
                                            <td>$725,000</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Gloria Little</td>
                                            <td>Systems Administrator</td>
                                            <td>New York</td>
                                            <td>59</td>
                                            <td>2009/04/10</td>
                                            <td>$237,500</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Bradley Greer</td>
                                            <td>Software Engineer</td>
                                            <td>London</td>
                                            <td>41</td>
                                            <td>2012/10/13</td>
                                            <td>$132,000</td>
                                            <td>
                                                <div className="badge badge-warning badge-pill">Pending</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Dai Rios</td>
                                            <td>Personnel Lead</td>
                                            <td>Edinburgh</td>
                                            <td>35</td>
                                            <td>2012/09/26</td>
                                            <td>$217,500</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Jenette Caldwell</td>
                                            <td>Development Lead</td>
                                            <td>New York</td>
                                            <td>30</td>
                                            <td>2011/09/03</td>
                                            <td>$345,000</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Yuri Berry</td>
                                            <td>Chief Marketing Officer (CMO)</td>
                                            <td>New York</td>
                                            <td>40</td>
                                            <td>2009/06/25</td>
                                            <td>$675,000</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Caesar Vance</td>
                                            <td>Pre-Sales Support</td>
                                            <td>New York</td>
                                            <td>21</td>
                                            <td>2011/12/12</td>
                                            <td>$106,450</td>
                                            <td>
                                                <div className="badge badge-secondary badge-pill">Part-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Doris Wilder</td>
                                            <td>Sales Assistant</td>
                                            <td>Sidney</td>
                                            <td>23</td>
                                            <td>2010/09/20</td>
                                            <td>$85,600</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Angelica Ramos</td>
                                            <td>Chief Executive Officer (CEO)</td>
                                            <td>London</td>
                                            <td>47</td>
                                            <td>2009/10/09</td>
                                            <td>$1,200,000</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Gavin Joyce</td>
                                            <td>Developer</td>
                                            <td>Edinburgh</td>
                                            <td>42</td>
                                            <td>2010/12/22</td>
                                            <td>$92,575</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Jennifer Chang</td>
                                            <td>Regional Director</td>
                                            <td>Singapore</td>
                                            <td>28</td>
                                            <td>2010/11/14</td>
                                            <td>$357,650</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Brenden Wagner</td>
                                            <td>Software Engineer</td>
                                            <td>San Francisco</td>
                                            <td>28</td>
                                            <td>2011/06/07</td>
                                            <td>$206,850</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Fiona Green</td>
                                            <td>Chief Operating Officer (COO)</td>
                                            <td>San Francisco</td>
                                            <td>48</td>
                                            <td>2010/03/11</td>
                                            <td>$850,000</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Shou Itou</td>
                                            <td>Regional Marketing</td>
                                            <td>Tokyo</td>
                                            <td>20</td>
                                            <td>2011/08/14</td>
                                            <td>$163,000</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Michelle House</td>
                                            <td>Integration Specialist</td>
                                            <td>Sidney</td>
                                            <td>37</td>
                                            <td>2011/06/02</td>
                                            <td>$95,400</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Suki Burks</td>
                                            <td>Developer</td>
                                            <td>London</td>
                                            <td>53</td>
                                            <td>2009/10/22</td>
                                            <td>$114,500</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Prescott Bartlett</td>
                                            <td>Technical Author</td>
                                            <td>London</td>
                                            <td>27</td>
                                            <td>2011/05/07</td>
                                            <td>$145,000</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Gavin Cortez</td>
                                            <td>Team Leader</td>
                                            <td>San Francisco</td>
                                            <td>22</td>
                                            <td>2008/10/26</td>
                                            <td>$235,500</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Martena Mccray</td>
                                            <td>Post-Sales support</td>
                                            <td>Edinburgh</td>
                                            <td>46</td>
                                            <td>2011/03/09</td>
                                            <td>$324,050</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Unity Butler</td>
                                            <td>Marketing Designer</td>
                                            <td>San Francisco</td>
                                            <td>47</td>
                                            <td>2009/12/09</td>
                                            <td>$85,675</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Howard Hatfield</td>
                                            <td>Office Manager</td>
                                            <td>San Francisco</td>
                                            <td>51</td>
                                            <td>2008/12/16</td>
                                            <td>$164,500</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Hope Fuentes</td>
                                            <td>Secretary</td>
                                            <td>San Francisco</td>
                                            <td>41</td>
                                            <td>2010/02/12</td>
                                            <td>$109,850</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Vivian Harrell</td>
                                            <td>Financial Controller</td>
                                            <td>San Francisco</td>
                                            <td>62</td>
                                            <td>2009/02/14</td>
                                            <td>$452,500</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Timothy Mooney</td>
                                            <td>Office Manager</td>
                                            <td>London</td>
                                            <td>37</td>
                                            <td>2008/12/11</td>
                                            <td>$136,200</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Jackson Bradshaw</td>
                                            <td>Director</td>
                                            <td>New York</td>
                                            <td>65</td>
                                            <td>2008/09/26</td>
                                            <td>$645,750</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Olivia Liang</td>
                                            <td>Support Engineer</td>
                                            <td>Singapore</td>
                                            <td>64</td>
                                            <td>2011/02/03</td>
                                            <td>$234,500</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Bruno Nash</td>
                                            <td>Software Engineer</td>
                                            <td>London</td>
                                            <td>38</td>
                                            <td>2011/05/03</td>
                                            <td>$163,500</td>
                                            <td>
                                                <div className="badge badge-info badge-pill">Contract</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Sakura Yamamoto</td>
                                            <td>Support Engineer</td>
                                            <td>Tokyo</td>
                                            <td>37</td>
                                            <td>2009/08/19</td>
                                            <td>$139,575</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Thor Walton</td>
                                            <td>Developer</td>
                                            <td>New York</td>
                                            <td>61</td>
                                            <td>2013/08/11</td>
                                            <td>$98,540</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Finn Camacho</td>
                                            <td>Support Engineer</td>
                                            <td>San Francisco</td>
                                            <td>47</td>
                                            <td>2009/07/07</td>
                                            <td>$87,500</td>
                                            <td>
                                                <div className="badge badge-info badge-pill">Contract</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Serge Baldwin</td>
                                            <td>Data Coordinator</td>
                                            <td>Singapore</td>
                                            <td>64</td>
                                            <td>2012/04/09</td>
                                            <td>$138,575</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Zenaida Frank</td>
                                            <td>Software Engineer</td>
                                            <td>New York</td>
                                            <td>63</td>
                                            <td>2010/01/04</td>
                                            <td>$125,250</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Zorita Serrano</td>
                                            <td>Software Engineer</td>
                                            <td>San Francisco</td>
                                            <td>56</td>
                                            <td>2012/06/01</td>
                                            <td>$115,000</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Jennifer Acosta</td>
                                            <td>Junior Javascript Developer</td>
                                            <td>Edinburgh</td>
                                            <td>43</td>
                                            <td>2013/02/01</td>
                                            <td>$75,650</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Cara Stevens</td>
                                            <td>Sales Assistant</td>
                                            <td>New York</td>
                                            <td>46</td>
                                            <td>2011/12/06</td>
                                            <td>$145,600</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Hermione Butler</td>
                                            <td>Regional Director</td>
                                            <td>London</td>
                                            <td>47</td>
                                            <td>2011/03/21</td>
                                            <td>$356,250</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Lael Greer</td>
                                            <td>Systems Administrator</td>
                                            <td>London</td>
                                            <td>21</td>
                                            <td>2009/02/27</td>
                                            <td>$103,500</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Jonas Alexander</td>
                                            <td>Developer</td>
                                            <td>San Francisco</td>
                                            <td>30</td>
                                            <td>2010/07/14</td>
                                            <td>$86,500</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Shad Decker</td>
                                            <td>Regional Director</td>
                                            <td>Edinburgh</td>
                                            <td>51</td>
                                            <td>2008/11/13</td>
                                            <td>$183,000</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Michael Bruce</td>
                                            <td>Javascript Developer</td>
                                            <td>Singapore</td>
                                            <td>29</td>
                                            <td>2011/06/27</td>
                                            <td>$183,000</td>
                                            <td>
                                                <div className="badge badge-primary badge-pill">Full-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Donna Snider</td>
                                            <td>Customer Support</td>
                                            <td>New York</td>
                                            <td>27</td>
                                            <td>2011/01/25</td>
                                            <td>$112,000</td>
                                            <td>
                                                <div className="badge badge-secondary badge-pill">Part-time</div>
                                            </td>
                                            <td>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><i
                                                    data-feather="more-vertical"></i></button>
                                                <button className="btn btn-datatable btn-icon btn-transparent-dark"><i
                                                    data-feather="trash-2"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        
            {/* <main>
                <div className="container mt-5">
                    <div className="d-flex justify-content-between align-items-sm-center flex-column flex-sm-row mb-4">
                        <div className="mr-4 mb-3 mb-sm-0">
                            <h1 className="mb-0">Dashboard</h1>
                            <div className="small">
                                <span className="font-weight-500 text-primary">Friday</span>
                                &#xB7; September 20, 2020 &#xB7; 12:16 PM
                            </div>
                        </div>
                        <button className="btn btn-white btn-sm line-height-normal p-3" id="reportrange">
                            <i className="mr-2 text-primary" data-feather="calendar"></i>
                            <span></span>
                            <i className="ml-1" data-feather="chevron-down"></i>
                        </button>
                    </div>
                    <div className="card card-waves mb-4 mt-5">
                        <div className="card-body p-5">
                            <div className="row align-items-center justify-content-between">
                                <div className="col">
                                    <h2 className="text-primary">Welcome back, your dashboard is ready!</h2>
                                    <p className="text-gray-700">Great job, your affiliate dashboard is ready to go! You
                                        can view sales, generate links, prepare coupons, and download affiliate reports
                                        using this dashboard.</p>
                                    <a className="btn btn-primary btn-sm px-3 py-2" href="#!">
                                        Get Started
                                        <i className="ml-1" data-feather="arrow-right"></i>
                                    </a>
                                </div>
                                <div className="col d-none d-lg-block mt-xxl-n4"><img
                                    className="img-fluid px-xl-4 mt-xxl-n5"
                                    src={require("../../assets/img/freepik/statistics-pana.svg")}/></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div
                                className="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-primary h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <div className="small font-weight-bold text-primary mb-1">Earnings
                                                (monthly)
                                            </div>
                                            <div className="h5">$4,390</div>
                                            <div
                                                className="text-xs font-weight-bold text-success d-inline-flex align-items-center">
                                                <i className="mr-1" data-feather="trending-up"></i>
                                                12%
                                            </div>
                                        </div>
                                        <div className="ml-2"><i className="fas fa-dollar-sign fa-2x text-gray-200"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div
                                className="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-secondary h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <div className="small font-weight-bold text-secondary mb-1">Average sale
                                                price
                                            </div>
                                            <div className="h5">$27.00</div>
                                            <div
                                                className="text-xs font-weight-bold text-danger d-inline-flex align-items-center">
                                                <i className="mr-1" data-feather="trending-down"></i>
                                                3%
                                            </div>
                                        </div>
                                        <div className="ml-2"><i className="fas fa-tag fa-2x text-gray-200"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div
                                className="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-success h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <div className="small font-weight-bold text-success mb-1">Clicks</div>
                                            <div className="h5">11,291</div>
                                            <div
                                                className="text-xs font-weight-bold text-success d-inline-flex align-items-center">
                                                <i className="mr-1" data-feather="trending-up"></i>
                                                12%
                                            </div>
                                        </div>
                                        <div className="ml-2"><i
                                            className="fas fa-mouse-pointer fa-2x text-gray-200"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div
                                className="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-info h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <div className="small font-weight-bold text-info mb-1">Conversion rate</div>
                                            <div className="h5">1.23%</div>
                                            <div
                                                className="text-xs font-weight-bold text-danger d-inline-flex align-items-center">
                                                <i className="mr-1" data-feather="trending-down"></i>
                                                1%
                                            </div>
                                        </div>
                                        <div className="ml-2"><i className="fas fa-percentage fa-2x text-gray-200"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div className="card mb-4">
                                <div className="card-body text-center p-5">
                                    <img className="img-fluid mb-5"
                                         src={require("../../assets/img/freepik/data-report-pana.svg")}/>
                                    <h4>Report generation</h4>
                                    <p className="mb-4">Ready to get started? Let us know now! It&apos;s time to start
                                        building that dashboard you&apos;ve been waiting to create!</p>
                                    <a className="btn btn-primary btn-sm py-2 px-3" href="#!">Continue</a>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-header border-bottom-0">Affiliate Reports</div>
                                <div className="list-group list-group-flush small">
                                    <a className="list-group-item list-group-item-action" href="#!">
                                        <i className="fas fa-dollar-sign fa-fw text-blue mr-2"></i>
                                        Earnings Reports
                                    </a>
                                    <a className="list-group-item list-group-item-action" href="#!">
                                        <i className="fas fa-tag fa-fw text-purple mr-2"></i>
                                        Average Sale Price
                                    </a>
                                    <a className="list-group-item list-group-item-action" href="#!">
                                        <i className="fas fa-mouse-pointer fa-fw text-green mr-2"></i>
                                        Engagement (Clicks &amp; Impressions)
                                    </a>
                                    <a className="list-group-item list-group-item-action" href="#!">
                                        <i className="fas fa-percentage fa-fw text-yellow mr-2"></i>
                                        Conversion Rate
                                    </a>
                                    <a className="list-group-item list-group-item-action" href="#!">
                                        <i className="fas fa-chart-pie fa-fw text-pink mr-2"></i>
                                        Segments
                                    </a>
                                </div>
                                <div className="card-footer border-top-0">
                                    <a className="text-xs d-flex align-items-center justify-content-between" href="#!">
                                        View More Reports
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="card bg-primary border-0">
                                <div className="card-body">
                                    <h5 className="text-white-50">Budget Overview</h5>
                                    <div className="mb-4">
                                        <span className="display-4 text-white">$48k</span>
                                        <span className="text-white-50">per year</span>
                                    </div>
                                    <div className="progress bg-white-25 rounded-pill" style={{height: "0.5rem"}}>
                                        <div className="progress-bar bg-white w-75 rounded-pill" role="progressbar"
                                             aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mb-4">
                            <div className="card mb-4">
                                <div className="card-header">Revenue Summary</div>
                                <div className="card-body">
                                    <div className="chart-area">
                                        <canvas id="myAreaChart" width="100%" height="30"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="card h-100">
                                        <div className="card-header">Sales Reporting</div>
                                        <div className="card-body d-flex flex-column justify-content-center">
                                            <div className="chart-bar">
                                                <canvas id="myBarChart" width="100%" height="30"></canvas>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <a className="text-xs d-flex align-items-center justify-content-between"
                                               href="#!">
                                                View More Reports
                                                <i className="fas fa-long-arrow-alt-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card h-100">
                                        <div className="card-header">Traffic Sources</div>
                                        <div className="card-body">
                                            <div className="chart-pie mb-4">
                                                <canvas id="myPieChart" width="100%" height="50"></canvas>
                                            </div>
                                            <div className="list-group list-group-flush">
                                                <div
                                                    className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                                                    <div className="mr-3">
                                                        <i className="fas fa-circle fa-sm mr-1 text-blue"></i>
                                                        Direct
                                                    </div>
                                                    <div className="font-weight-500 text-dark">55%</div>
                                                </div>
                                                <div
                                                    className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                                                    <div className="mr-3">
                                                        <i className="fas fa-circle fa-sm mr-1 text-purple"></i>
                                                        Social
                                                    </div>
                                                    <div className="font-weight-500 text-dark">15%</div>
                                                </div>
                                                <div
                                                    className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                                                    <div className="mr-3">
                                                        <i className="fas fa-circle fa-sm mr-1 text-green"></i>
                                                        Referral
                                                    </div>
                                                    <div className="font-weight-500 text-dark">30%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main> */}
            <Footer/>
        </div>
    );
}

export default Main;