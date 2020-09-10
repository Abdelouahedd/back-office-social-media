import React from 'react';
import * as Icon from 'react-feather';

function usersManag(props) {
    return (
        <div id="layoutSidenav_content">
            <main>
                <header className="page-header page-header-dark bg-gray-500">
                    <div className="container">
                        <div className="page-header-content pt-4">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-auto mt-4">
                                    <h1 className="page-header-title">
                                        <div className="page-header-icon">
                                            {/* <i className="fa fa-user text-white-50" aria-hidden="true"></i> */}
                                            <Icon.Users className="feather-xl text-white-50" />
                                        </div>
                                        Users
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <div className="row align-items-center ml-auto">
                                        <div className="col-8 ">
                                            Users Management
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
                                                    <th>photo_profil</th>
                                                    <th>nom</th>
                                                    <th>prenom</th>
                                                    <th>email</th>
                                                    <th>gender</th>
                                                    <th>telephone</th>
                                                    <th>fonction</th>
                                                    <th>role</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>photo_profil</th>
                                                    <th>nom</th>
                                                    <th>prenom</th>
                                                    <th>email</th>
                                                    <th>gender</th>
                                                    <th>telephone</th>
                                                    <th>fonction</th>
                                                    <th>role</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td>Tiger Nixon</td>
                                                    <td>System Architect</td>
                                                    <td>Edinburgh</td>
                                                    <td>61</td>
                                                    <td>61</td>
                                                    <td>61</td>
                                                    <td>2011/04/25</td>
                                                    <td>
                                                        <div className="badge badge-primary badge-pill">Full-time</div>
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                                                            <Icon.MoreVertical size="15" />
                                                        </button>
                                                        <button className="btn btn-datatable btn-icon btn-transparent-dark">
                                                            <Icon.Trash2 size="15" />
                                                        </button>
                                                    </td>
                                                </tr>
                                                                                           </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}

export default usersManag;