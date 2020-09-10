import React, { useEffect } from 'react';
import NavBar from '../shared/navBar';
import SideBar from '../shared/sideBar';
import CreateRoutes from '../../route/routes';

function Home(props) {
    
    useEffect(() => {
        document.getElementById("sidebarToggle").addEventListener('click', () => {
            document.querySelector('body').classList.toggle('sidenav-toggled')
        });
    }, []);

    return (
        <div>
            <NavBar />
            <div id="layoutSidenav">
                <SideBar/>
                <CreateRoutes/>
            </div>
        </div>
    );
}

export default Home;