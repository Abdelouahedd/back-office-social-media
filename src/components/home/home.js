import React, { useEffect } from 'react';
import NavBar from '../shared/navBar';
import SideBar from '../shared/sideBar';
import CreateRoutes from '../../route/routes';



function Home(props) {

    //show and hide side bar
    const toggelSideBar = () => {
        document.querySelector('body').classList.toggle('sidenav-toggled')
    }

    //add event listener to id of side bar
    useEffect(() => {
        document.getElementById("sidebarToggle").addEventListener('click', toggelSideBar)
        return () => {
            document.getElementById("sidebarToggle").removeEventListener('click', toggelSideBar);
        }
    }, []);

  
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