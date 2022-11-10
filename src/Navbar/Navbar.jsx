import React from "react";
import './navbarStyle.css';
import { NavLink } from 'react-router-dom'

export default function Navbar() {
   return (
      <>
            <nav className="navbar navbar-expand-lg navbar-light">
               <div className="container">
                  <NavLink className="navbar-brand" to="/">
                  START REACT
                  </NavLink>
                  <button
                     className="navbar-toggler"
                     type="button"
                     data-bs-toggle="collapse"
                     data-bs-target="#navbarSupportedContent"
                     aria-controls="navbarSupportedContent"
                     aria-expanded="false"
                     aria-label="Toggle navigation"
                  >
                     <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                     className="collapse navbar-collapse"
                     id="navbarSupportedContent"
                  >
                     <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        {/* {({ isActive }) => isActive ? 'activeStyle nav-item mx-2 ' : 'nav-item mx-2'} */}
                        
                        <li className='nav-item mx-2' >
                           <NavLink className={({ isActive }) => isActive ? 'activestyle nav-link mx-2 ' : 'nav-link mx-2'}  to="portfolio">
                           PORTFOLIO
                           </NavLink>
                        </li>

                        <li className="nav-item mx-2">
                           <NavLink className={({ isActive }) => isActive ? 'activestyle nav-link mx-2 ' : 'nav-link mx-2'} to="about">
                           ABOUT
                           </NavLink>
                        </li>

                        <li className="nav-item mx-2">
                           <NavLink className={({ isActive }) => isActive ? 'activestyle nav-link mx-2 ' : 'nav-link mx-2'} to="contact">
                           CONTACT
                           </NavLink>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
      </>
   );
}
