import React, { useEffect } from 'react'

import { useData } from "../contexts/DataContext"

// Router
import {Outlet, Link} from "react-router-dom"

// components
import Navbar from "../Components/Navbar"
import { MdMenu } from "react-icons/md";
import "../asstets/css/layout.css"

// icons
import { MdForum } from "react-icons/md"
import { FaCommentAlt } from "react-icons/fa"
import { MdComputer } from "react-icons/md"

const MainLayout = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const { user, setUser, token, setToken } = useData()
  const handleMenu = () => {
    setShowMenu(!showMenu);
  }

  const handleNavbarSearch = () => {
    const navbarSearch = document.getElementById("navbar-nav-search");
    const navbarNav = document.getElementById("navbar-nav");
    navbarSearch.classList.toggle("hidden");
    navbarNav.classList.toggle("hidden");
  }


  useEffect(() => {
    const user_local = localStorage.getItem("webcup_user");
    const token_local = localStorage.getItem("webcup_token");
    if (user_local && token_local) {
      setUser(JSON.parse(user_local));
      setToken(token_local);
    }
    else {
      window.location.href = "/sign";
    }

  }, [])

  return (
    <>
          <Navbar showMenu={showMenu}/> 
          <div className="h-full w-full flex flex-col ">

            {/* navbar */}
            <div className="navbar rounded-md shadow-md bg-base-100 w-[700px] fixed right-20 top-[10px]">
              <div className="flex-1">
                <a className="btn btn-ghost text-xl" onClick={handleMenu}><MdMenu className="menu-icon" /></a>
              </div>
              <div className="flex-none gap-2">
                <div className="form-control">
                  <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                  <button tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                      <span className="badge badge-xs badge-primary bg-secondary indicator-item"></span>
                    </div>
                  </button>
                  <ul tabIndex={0} className="mt-3 z-10 p-6 shadow menu menu-sm dropdown-content bg-base-100 rounded-box">
                    <li className='w-[300px] p-6 border border-gray-300 rounded-lg mb-3 font-bold text-md cursor-pointer bg-secondary text-white hover:opacity-50 transition-all flex items-center justify-between'>2 Nouvelles Discussion <MdForum className='text-xl' /></li>
                    <li className="w-[300px] p-6 border border-gray-300 rounded-lg mb-3 font-bold text-md cursor-pointer hover:bg-gray-100 transition-all flex items-center justify-between">Monja a commenté votre discussion <FaCommentAlt className='text-xl' /></li>
                    <li className="w-[300px] p-6 border border-gray-300 rounded-lg font-bold text-md cursor-pointer hover:bg-gray-100 transition-all flex items-center justify-between">Cousema a publié un nouveau projet <MdComputer className='text-xl' /></li>
                  </ul>
                </div>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <ul tabIndex={0} className="mt-3 z-10  p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li><Link to="/">Mon Profile</Link></li>
                    <li><Link to="/settings">Paramètres</Link></li>
                    <li><Link to="/logout">Déconnexion</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <Outlet/>      
          </div>
             

    </>
  )
}

export default MainLayout

{/* <nav className="main-header navbar bg-white text-gray-800"> 
<ul className="navbar-nav flex flex-row">
  <li className="nav-item flex items-center">
  <i className='bx-menu' 
    onClick={handleMenu}
  >
    <MdMenu className="menu-icon" />
  </i>
  </li>
</ul>

<ul 
  id="navbar-nav-search"
  className="navbar-nav-search hidden ml-auto w-full flex flex-row justify-end items-center text-gray-800">
    <div className="navbar-search-block w-full">
      <form className="form-inline w-full">
        <div className="input-group flex flex-row justify-start items-center input-group-sm outline-none">
          <input className="form-control search-input h-[30px] w-[90%] form-control-navbar border border-gray-300 rounded px-2 py-1" 
          type="search" placeholder="Chercher" aria-label="Search" />
          <div className="input-group-append">
            <button className="btn ml-5 btn-navbar bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded" type="submit">
              <FaSearch />
            </button>
            <button 
              onClick={handleNavbarSearch}
            className="btn ml-5 btn-navbar bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded" type="button" data-widget="navbar-search">
              <FaTimes />
            </button>
          </div>
        </div>
      </form>
    </div>
</ul>


<ul 
  id="navbar-nav"
  className="navbar-nav ml-auto w-full flex flex-row justify-end items-center text-gray-800">
  
  <li className="nav-item flex items-center mr-10"
    onClick={handleNavbarSearch}
  >
    <a className="nav-link text-blue-500 hover:text-blue-700" data-widget="navbar-search" href="#" role="button">
      <FaSearch className="w-6 h-6 mr-2" />
    </a>
  </li>

<li className="nav-item relative group mr-10">
  <a className="nav-link text-blue-500 hover:text-blue-700" href="#" role="button">
    <span className="badge badge-danger navbar-badge ml-5">3</span>
    <FaComments className="w-6 h-6 mr-2 mb-5" />
  </a>
  <div className="dropdown-menu absolute hidden right-0 mt-2 w-64 bg-white rounded-md shadow-lg group-hover:block">
    <a href="#" className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      <div className="media">
        <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
        <div className="media-body">
          <h3 className="dropdown-item-title">
            Brad Diesel
            <span className="float-right text-sm text-danger"><FaStar /></span>
          </h3>
          <p className="text-sm">Call me whenever you can...</p>
          <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
        </div>
      </div>
    </a>
    <div className="dropdown-divider border-t my-1 border-gray-200"></div>
    <a href="#" className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      <div className="media">
        <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
        <div className="media-body">
          <h3 className="dropdown-item-title">
            John Pierce
            <span className="float-right text-sm text-muted"><FaStar /></span>
          </h3>
          <p className="text-sm">I got your message bro</p>
          <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
        </div>
      </div>
    </a>
    <div className="dropdown-divider border-t my-1 border-gray-200"></div>
    <a href="#" className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      <div className="media">
        <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
        <div className="media-body">
          <h3 className="dropdown-item-title">
            Nora Silvester
            <span className="float-right text-sm text-warning"><FaStar /></span>
          </h3>
          <p className="text-sm">The subject goes here</p>
          <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
        </div>
      </div>
    </a>
    <div className="dropdown-divider border-t my-1 border-gray-200"></div>
    <a href="#" className="dropdown-item dropdown-footer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">See All Messages</a>
  </div>
</li>

  <li className="nav-item relative group mr-10">
  <a className="nav-link text-blue-500 hover:text-blue-700" href="#" role="button">

    <span className="badge badge-warning navbar-badge ml-5">15</span>
    <FaBell className="w-6 h-6 mr-2 mb-5"  />
  </a>
  <div className="dropdown-menu absolute hidden right-0 mt-2 w-64 bg-white rounded-md shadow-lg group-hover:block">
    <span className="dropdown-item dropdown-header block px-4 py-2 text-sm text-gray-700">15 Notifications</span>
    <div className="dropdown-divider border-t my-1 border-gray-200"></div>
    <a href="#" className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      <FaEnvelope className="w-6 h-6 mr-2" /> 4 new messages
      <span className="float-right text-muted text-sm">3 mins</span>
    </a>
    <div className="dropdown-divider border-t my-1 border-gray-200"></div>
    <a href="#" className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      <FaUsers className="w-6 h-6 mr-2" /> 8 friend requests
      <span className="float-right text-muted text-sm">12 hours</span>
    </a>
    <div className="dropdown-divider border-t my-1 border-gray-200"></div>
    <a href="#" className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      <FaFile className="w-6 h-6 mr-2" /> 3 new reports
      <span className="float-right text-muted text-sm">2 days</span>
    </a>
    <div className="dropdown-divider border-t my-1 border-gray-200"></div>
    <a href="#" className="dropdown-item dropdown-footer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">See All Notifications</a>
  </div>
</li>
<li className="nav-item">
  <a className="nav-link text-blue-500 hover:text-blue-700" data-widget="fullscreen" href="/profile" role="button">
    <FaUser className="w-6 h-6" />
  </a>
</li>
</ul>
</nav> 
 */}
