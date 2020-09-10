import React, { useEffect } from 'react';
import NavBar from '../shared/navBar';
import SideBar from '../shared/sideBar';
import Main from '../content/main';

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
                <SideBar />
                <Main />
            </div>
        </div>
    );
}

export default Home;