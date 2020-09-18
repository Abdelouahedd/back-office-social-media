import React from 'react';
import * as Icon from 'react-feather';

function RequestUsersTable(props) {
    return (
        <table className="table table-bordered table-hover" id="myTable" width="100%"
            cellSpacing="0">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>nom</th>
                    <th>prenom</th>
                    <th>email</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {
                    props.users.map(user =>
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.nom}</td>
                            <td>{user.prenom}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn btn-datatable btn-icon btn-transparent-dark">
                                    <Icon.UserCheck size="25" onClick={() => props.acceptRequest(user._id)} />
                                </button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}

export default RequestUsersTable;