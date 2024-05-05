import React, { useEffect, useState} from 'react'

// Router
import { NavLink, Outlet} from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

// icons
import { BsTelephone } from "react-icons/bs"
import { CiMail } from "react-icons/ci"
import { LuGithub } from "react-icons/lu"

import { useData } from '../../contexts/DataContext'

const Profile = () => {
    const { user } = useData()
    const [userData, setUserData] = useState({})

    useEffect(() => {
        setUserData(user)
        console.log(user)
    }, [user])
  return (
    <div className="w-full h-full p-20 pt-[6em]">
        <div className="w-full h-full rounded-md shadow-xl p-12 flex flex-col overflow-y-scroll" style={{background: "#fff"}}>
            
            {/* TOP SECTION */}
            <div className="flex justify-between h-20 w-full">
                <div className="flex items-center h-full w-1/3">

                    <div className="avatar h-full flex items-center justify-center">
                        <div className="h-full mask mask-squirle">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="w-full"/>
                        </div>
                    </div>

                    
                    <div className="ml-6 flex flex-col h-full justify-center">
                        <h1 className="font-bold text-2xl mb-1">{ userData?.name }</h1>
                        <h3 className="text-lg text-gray-700">
                            {userData?.skills }
                        </h3>
                        <h5 className="text-lg text-gray-700 opacity-75">
                            Id : {userData?.id }
                        </h5>
                    </div>
                </div>

                <div className="flex flex-col justify-center h-full w-2/3 gap-1">

                    <div className="flex items-center gap-3">
                        <BsTelephone className="text-xl text-secondary "/>
                        <h4 className="font-bold">Téléphone</h4>
                        <span>
                            { userData?.phone ? userData.phone : "Non renseigné" }
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <CiMail className="text-xl text-secondary"/>
                        <h4 className="font-bold">Email</h4>
                        <span>
                        { userData?.email ? userData.email : "Non renseigné" }
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <LuGithub className="text-xl text-secondary"/>
                        <h4 className="font-bold">Github</h4>
                        <a 
                            href={ userData?.github ? userData.github : "#" } 
                            className="underline text-secondary">
                        { userData?.github ? userData.github : "Non renseigné" }
                        </a>
                    </div>

                </div>

            </div>
            {/* END TOP SECTION */}
            
            <div className='w-full h-[1px] bg-gray-100 my-6'></div>

            <nav className='flex gap-4'>
                <NavLink className="ProfileNavLink" to="/">Mes Projet</NavLink>
                <NavLink className="ProfileNavLink" to="/Mytopic">Mes Discussion</NavLink>
                <NavLink className="ProfileNavLink" to="/MyRecompense">Récompense</NavLink>
            </nav>

            <div className='w-full h-[1px] bg-gray-100 my-6'></div>

            <div className='h-3/4'>
                
                <Outlet/>
            </div>

        </div>



    </div>
  )
}

export default Profile          