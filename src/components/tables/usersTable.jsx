import React from 'react';
import * as Icon from 'react-feather';

function UsersTable(props) {

    return (
        <table className="table table-bordered table-hover" id="myTable" width="100%"
            cellSpacing="0">
            <thead>
                <tr>
                    <th>photo_profil</th>
                    <th>nom</th>
                    <th>prenom</th>
                    <th>email</th>
                    <th>telephone</th>
                    <th>fonction</th>
                    <th>gender</th>
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
                    <th>telephone</th>
                    <th>fonction</th>
                    <th>gender</th>
                    <th>role</th>
                    <th>Actions</th>
                </tr>
            </tfoot>
            <tbody>
                {
                    props.users.map(user =>
                        <tr key={user._id}>
                            <td >
                                <div className="avatar avatar-xl">
                                    <img src={user.photo_profil} alt="user pic" className="avatar-img img-fluid" />
                                </div>
                            </td>
                            <td>{user.nom}</td>
                            <td>{user.prenom}</td>
                            <td>{user.email}</td>
                            <td>{user.telephone}</td>
                            <td>{user.fonction}</td>
                            <td>{user.gender}</td>
                            <td>
                                <div className={user.role === "USER" ? "badge badge-secondary badge-pill " : "badge badge-primary  badge-pill"}>
                                    {user.role}
                                </div>
                            </td>
                            <td>
                                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                                    <Icon.MoreVertical size="15" />
                                </button>
                                <button className="btn btn-datatable btn-icon btn-transparent-dark">
                                    <Icon.Trash2 size="15" onClick={() => props.deleteUser(user._id)} />
                                </button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}

export default UsersTable;