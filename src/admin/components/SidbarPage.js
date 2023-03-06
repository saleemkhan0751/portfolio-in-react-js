import React, {useState} from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";
import FooterPage from "./FooterPage";

function SidbarPage() {
    const navigate=useNavigate();
    let user=JSON.parse(localStorage.getItem('user-info'));
    function Logout() {
        localStorage.clear()
        navigate('/')
    }
    return (
        <>
            <link rel="manifest" href="manifest.json" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link rel="shortcut icon" href="admin/img/icons/icon-48x48.png"/>
            <title>Portfolio</title>
            <link href="admin/css/app.css" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet"/>
        <div className="wrapper">
            <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <Link to={"/dashboard"} className="sidebar-brand"> <span
                        className="align-middle">Portfolio</span></Link>
                    <ul className="sidebar-nav">
                        <li className="sidebar-item">
                            <Link to={'/dashboard'} className="sidebar-link" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="feather feather-sliders align-middle">
                                    <line x1="4" y1="21" x2="4" y2="14"></line>
                                    <line x1="4" y1="10" x2="4" y2="3"></line>
                                    <line x1="12" y1="21" x2="12" y2="12"></line>
                                    <line x1="12" y1="8" x2="12" y2="3"></line>
                                    <line x1="20" y1="21" x2="20" y2="16"></line>
                                    <line x1="20" y1="12" x2="20" y2="3"></line>
                                    <line x1="1" y1="14" x2="7" y2="14"></line>
                                    <line x1="9" y1="8" x2="15" y2="8"></line>
                                    <line x1="17" y1="16" x2="23" y2="16"></line>
                                </svg>
                                <span
                                    className="align-middle">Dashboad</span></Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to={'/testimonial'} className="sidebar-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="feather feather-user align-middle me-2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                <span
                                    className="align-middle">Testimonial</span></Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to={'/about-us'} className="sidebar-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="feather feather-user align-middle me-2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                <span
                                    className="align-middle">About Us</span></Link>
                        </li>
                        <li className="sidebar-item ">
                            <Link to={'/service'} className="sidebar-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="feather feather-user align-middle me-2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                <span
                                    className="align-middle">Services</span></Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to={'/portfolio'} className="sidebar-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="feather feather-user align-middle me-2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                <span
                                    className="align-middle">Portfolio</span></Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to={'/setting'} className="sidebar-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="feather feather-user align-middle me-2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                <span
                                    className="align-middle">Setting</span></Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to={'/team'} className="sidebar-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="feather feather-user align-middle me-2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                <span
                                    className="align-middle">Team</span></Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to={'/faq'} className="sidebar-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="feather feather-user align-middle me-2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                <span
                                    className="align-middle">Faq</span></Link>
                        </li>
                    </ul>
                </div>

            </nav>
            <div className="main">
                <nav className="navbar navbar-expand navbar-light navbar-bg">
                    <a className="sidebar-toggle js-sidebar-toggle">
                        <i className="hamburger align-self-center"></i>
                    </a>
                    <div className="navbar-collapse collapse">
                        <ul className="navbar-nav navbar-align">
                            <li className="nav-item dropdown">
                                <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#"
                                   data-bs-toggle="dropdown">
                                    <i className="align-middle" data-feather="settings"></i>
                                </a>

                                <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#"
                                   data-bs-toggle="dropdown">
                                    <img src="admin/img/avatars/avatar.jpg" className="avatar img-fluid rounded me-1 rounded-circle"
                                         alt="Charles Hall"/> <span className="text-dark">{user.success.user.name}</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" onClick={Logout}>Log out</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <main className="content">
                    <div className="container-fluid p-0">
                        <Outlet/>
                    </div>
                </main>
                <FooterPage/>
            </div>
        </div>
            <script src="js/app.js"></script>
            <script src="admin/js/app.js"></script>
            <script src="admin/js/chart.js"></script>
            </>
    )
}

export default SidbarPage