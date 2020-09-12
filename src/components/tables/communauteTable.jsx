import React from 'react';
import { API_URL } from '../../_helper/helper';
import * as Icon from 'react-feather';

function CommunauteTable(props) {

    return (
        <table className="table table-bordered table-hover" id="myTable" width="100%"
            cellSpacing="0">
            <thead>
                <tr>
                    <th>photo_com</th>
                    <th>titre</th>
                    <th>visibilite</th>
                    <th>admin</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th>photo_com</th>
                    <th>titre</th>
                    <th>visibilite</th>
                    <th>admin</th>
                    <th>Actions</th>
                </tr>
            </tfoot>
            <tbody>
                {
                    props.communauties.map(c =>
                        <tr key={c._id}>
                            <td >
                                <div className="avatar avatar-xxl">
                                    <img className="avatar-img img-fluid" src={API_URL + c.photo_com} alt="" />
                                </div>
                            </td>
                            <td>{c.titre}</td>
                            <td>{c.visibilite}</td>
                            <td>
                                <small className="text-info,">{c.admin.nom}</small>
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
                    )
                }
            </tbody>
        </table>
    );
}

export default CommunauteTable;