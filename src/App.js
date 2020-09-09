import React, {useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import NavBar from "./components/shared/navBar";
import SideBar from './components/shared/sideBar';
import Main from "./components/content/main";

function App() {

    useEffect(() => {
        document.getElementById("sidebarToggle").addEventListener('click', () => {
            document.querySelector('body').classList.toggle('sidenav-toggled')
        })
    }, [])


    return (
        <>
            <NavBar/>
            <div id="layoutSidenav">
                <SideBar/>
                <Main/>
            </div>
        </>
    );
}

export default App;
