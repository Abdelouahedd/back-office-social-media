import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import { useToasts } from 'react-toast-notifications';
import { API_URL } from '../../../_helper/helper';
import UsersTable from '../../tables/usersTable';
import ModalAddUser from './ModalAddUser';

function UsersManag(props) {

    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState("");
    const [tmpUsers, setSearch] = useState([]);
    const { addToast } = useToasts();


    useEffect(() => {
        const abortCtrl = new AbortController();
        const opts = { signal: abortCtrl.signal };
        fetch(`${API_URL}/admin/users`, {
            method: 'GET',
            opts,
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + localStorage.getItem('jwtInfo')
            }
        }).then(res => res.json())
            .then(res => {
                if (res.success === true) {
                    setUsers(res.user);
                    setSearch(res.user);
                }
            })
            .catch(err => {
                console.error(err);
                if (err.name === 'AbortError') {
                    console.log('request was cancelled');
                }
            })
        return () => {
            abortCtrl.abort();
        }
    }, []);

    const addUser = async (user) => {
        // await fetch(`${API_URL}/admin/addUser`, {
        await fetch('http://localhost:4000/admin/addUser', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + localStorage.getItem('jwtInfo')
            }
        }).then(res => res.json())
            .then(res => {
                if (res.success === true) {
                    users.unshift(res.user);
                    setUsers(users);
                    addToast(res.msg, { appearance: 'success', autoDismiss: true },);
                    setMsg(res.msg)
                } else {
                    addToast(res.msg, { appearance: 'error', autoDismiss: true },);
                }
            })
            .catch(err => {
                console.error(err);
            })
    }


    const findUser = (e) => {
        if (!e.target.value ||
            e.target.value === " " ||
            e.target.value === "") {
            setUsers(tmpUsers)
        }
        else {
            let newArray = [];
            newArray = users.filter((user) =>
                user.nom.toLowerCase()
                    .includes(e.target.value.toLowerCase()) ||
                user.prenom.toLowerCase()
                    .includes(e.target.value.toLowerCase()) ||
                user.fonction.toLowerCase()
                    .includes(e.target.value.toLowerCase())
            );
            setUsers(newArray);
        }
    }

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
                                            <button className="btn btn-info btn-lg" data-toggle="modal" data-target="#exampleModal">Add user</button>
                                        </div>
                                        <div className="col-4">
                                            <form className="form-inline mr-auto d-none d-md-block">
                                                <div className="input-group input-group-joined input-group-solid">
                                                    <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                                        aria-label="Search ..." name="search"
                                                        onChange={findUser}
                                                    />
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
                                        <UsersTable users={users} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <ModalAddUser addUser={addUser} msg={msg} />
        </div>
    );
}

export default UsersManag;