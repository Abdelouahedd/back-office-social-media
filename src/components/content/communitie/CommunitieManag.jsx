import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import { API_URL } from '../../../_helper/helper';
import CommunauteTable from '../../tables/communauteTable';
import ModalAddCommunautie from './ModalAddCommunautie';

const CommunitieManag = () => {

    const [communauties, setCommunauties] = useState([]);
    const [users, setUsers] = useState([]);
    const [tmpCommunauties, setSearch] = useState([]);

    useEffect(() => {
        const abortCtrl = new AbortController();
        const opts = { signal: abortCtrl.signal };
        fetch(`${API_URL}/admin/getCommunautieInfo`, {
            method: 'GET',
            opts,
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + localStorage.getItem('jwtInfo')
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                if (res.success === true) {
                    setCommunauties(res.data.communaute);
                    setSearch(res.data.communaute);
                    setUsers(res.data.users)
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



    const findCommunautie = (e) => {
        if (!e.target.value ||
            e.target.value === " " ||
            e.target.value === "") {
            setCommunauties(tmpCommunauties)
        }
        else {
            let newArray = [];
            newArray = communauties.filter((communautie) =>
                communautie.titre.toLowerCase()
                    .includes(e.target.value.toLowerCase())
            );
            setCommunauties(newArray);
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
                                            <i className="fa fa-users text-white-50" aria-hidden="true"></i>
                                        </div>
                                        Communities
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
                                            <button className="btn btn-info btn-lg" data-toggle="modal" data-target="#exampleModal">Add communautie</button>
                                        </div>
                                        <div className="col-4">
                                            <form className="form-inline mr-auto d-none d-md-block">
                                                <div className="input-group input-group-joined input-group-solid">
                                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search ..."
                                                        onChange={findCommunautie} />
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
                                        <CommunauteTable communauties={communauties} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalAddCommunautie users={users} />
            </main>
        </div>

    );
}

export default CommunitieManag;
