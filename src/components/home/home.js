import React, { useEffect, useCallback } from 'react';
import NavBar from '../shared/navBar';
import SideBar from '../shared/sideBar';
import CreateRoutes from '../../route/routes';
import { useDispatch } from 'react-redux';
import { API_URL } from '../../_helper/helper';
import { getUsers } from '../../redux/actions/usersActions';
import { useToasts } from 'react-toast-notifications';


function Home(props) {

    const dispatch = useDispatch();
    const { addToast } = useToasts();

    const getAllUsers = useCallback(() => {
        fetch(`${API_URL}/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + localStorage.getItem('jwtInfo')
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.success === true) {
                    dispatch(getUsers(res.user));
                    addToast(res.msg, { appearance: 'success' })
                } else {
                    addToast(res.msg, { appearance: 'error' })
                }
            })
            .catch(err => {
                addToast(err.message, { appearance: 'error' })
                console.error(err);
            });
    }, [addToast, dispatch])


    const toggelSideBar = () => {
        document.getElementById("sidebarToggle").addEventListener('click', () => {
            document.querySelector('body').classList.toggle('sidenav-toggled')
        });
    }

    useEffect(() => {
        toggelSideBar();
    }, []);

    useEffect(() => {
        getAllUsers();
    }, [getAllUsers])



    return (
        <div>
            <NavBar />
            <div id="layoutSidenav">
                <SideBar />
                <CreateRoutes />
            </div>
        </div>
    );
}

export default React.memo(Home);