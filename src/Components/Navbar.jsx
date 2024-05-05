import React, { useEffect} from 'react'

// Router
import { Link } from 'react-router-dom'

import { sideBarLayout } from '../data/layoutData'
import "../asstets/css/layout.css"
import { FaChevronDown } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { useData } from '../contexts/DataContext';

export const Navbar = ({showMenu}) => {
    const { user, setUser } = useData()
    const handleSubMenu = (id) => {
        document.getElementById(id).classList.toggle('showMenu')
        document.getElementById('arrow-' + id.split('-')[1]).style.transform =  document.getElementById(id).classList.contains('showMenu') ? 'rotate(180deg)' : 'rotate(0deg)'
    }
  return (
    <>
        <div className={ showMenu ? "sidebar" : "sidebar close"}>
            <div className="logo-details ml-6 ">
                <img src="/logo.png" alt="logo" width="25px" height="25px" className="logo_img" />
                <span className="ml-12  logo_name">Web Cup Hub</span>
            </div>
            <ul className="nav-links">
                {
                    sideBarLayout.map((item, index) => {
                        return (
                            <li key={index}
                            
                            id={'link-' + index}
                            >
                                <div className="iocn-link"
                                onClick={() => handleSubMenu("link-" + index)}
                                >
                                    <a href='#'>
                                        <i className='flex items-center justify-center' style={{ paddingRight : '25px'}} >
                                            <item.icon color='white' width={200} height={200} />
                                        </i>
                                        <span style={{color : 'white'}} className="link_name">{item.name}</span>
                                    </a>
                                    <FaChevronDown className='arrow mr-7' color='white' width={200} height={200}                                         
                                        id={"arrow-" + index}
                                        hidden={ showMenu ? false : true}
                                    />
                                </div>
                                {
                                    
                                    <ul className="sub-menu" id={"sub-menu" + index}>
                                        <li><Link className="link_name" to={item.path}>{item.name}</Link></li>
                                        {
                                            Object.keys(item.children).map((child, index) => {
                                                const childItem = item.children[child]
                                                return childItem.onlyAdmin && user?.role !== 'admin' ? '' :(<li key={index}><Link to={childItem.path}>{childItem.name}</Link></li>)
                                            })
                                        }
                                    </ul>
                                }
                            </li>
                        )
                    })
                }
           
            </ul>

        </div>
        </>
  )
}

export default Navbar