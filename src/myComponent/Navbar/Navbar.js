import React from 'react';
import './Navbar.css'
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand display-5">Hello Dishan!</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span><i className='bx bxl-react' style={{fontSize:'25px'}}></i></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Hello Dishan!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">About us</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
