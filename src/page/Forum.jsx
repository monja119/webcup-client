import React, {useState, useEffect} from 'react'

import {listForums} from '../services/forumService'

// data
import {ForumColor} from "../data/ForumColor"

// components
import ForumCard from '../Components/ForumCard'


// icon
import { BiComment } from "react-icons/bi"
import { FaRegStar } from "react-icons/fa"

import { format_date_time } from '../utils/helper'

const Forum = () => {
    const [forums, setForums] = useState([])
    
  useEffect(() => {
    listForums().then(async (data) => {
      const response = await data
      setForums(response.data.data)
    }).catch((error) => {
      console.log(error)
    }
    );
  }, [])

    const [allCommentsFilter, setAllCommentsFilter] = useState(true)
    const [followingCommentsFilter, setFollowingCommentsFilter] = useState(false)

    const onChangeFilterAllCommentsFilter = () => {
        if(!allCommentsFilter) {
            setAllCommentsFilter(true)
            setFollowingCommentsFilter(false)
        }
    }

    const onChangeFilterFollowingCommentsFilter = () => {
        if(!followingCommentsFilter) {
            setFollowingCommentsFilter(true)
            setAllCommentsFilter(false)
        }
    }

  return (
    <div className="w-full h-full p-20 pt-[6em]">
        <div className="w-full h-full rounded-md shadow-xl p-12 flex " style={{background: "#fff"}}>
            <div className="w-full h-full flex">
                <div className="md:w-3/4 w-full h-full flex flex-col">
                    <select className="select select-bordered w-full max-w-xs">
                        <option selected>Les plus récents</option>
                        <option>Les plus pertinents</option>
                    </select>

                    <div className="w-full h-full mt-12 px-6 flex flex-col gap-12 overflow-y-scroll overflow-x-hidden">
                        {
                            forums?.map((forum, index) => {
                                return (
                                    <ForumCard key={index} username={forum.title} createdAt={format_date_time(forum.created_at)} commentNumber={5}>
                                        {forum.description}
                                    </ForumCard>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="md:w-1/4 w-full h-full md:flex hidden flex-col p-12">  
                    <button onClick={()=>document.getElementById('AddTopicModal').showModal()} className="bg-main text-secondary py-4 px-4 uppercase font-bold text-lg rounded-md shadow hover:opacity-70 transition-all mb-6">
                        Demarrer une nouvelle discussion
                    </button>

                    <div className="w-full mt-12 ">
                        <div className="form-control w-full mb-6">
                            <label className="cursor-pointer label flex items-center">
                                <span className={"label-text text-xl font-bold flex items-center" + (allCommentsFilter ? " text-secondary" : "")}><BiComment className="mr-6 text-3xl"/> Toutes les discussions</span>
                                <input type="checkbox" className="checkbox checkbox-secondary" checked={allCommentsFilter} onChange={onChangeFilterAllCommentsFilter}/>
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="cursor-pointer label flex items-center">
                                <span className={"label-text text-xl font-bold flex items-center" + (followingCommentsFilter ? " text-secondary" : "")}><FaRegStar className="mr-6 text-3xl" /> Discussion des personnes suivies</span>
                                <input type="checkbox" className="checkbox checkbox-secondary" checked={followingCommentsFilter} onChange={onChangeFilterFollowingCommentsFilter}/>
                            </label>
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-gray-300 my-12"></div>

                    <div className="w-full h-full flex flex-col gap-8">
                        <div className="w-full flex items-center font-bold uppercase text-xl text-gray-600">
                            <span className={"w-[15px] h-[15px] mr-6 rounded-full  ring-2 ring-offset-2 bg" + ForumColor.faq + " ring" + ForumColor.faq }></span>
                            faq
                        </div>

                        <div className="w-full flex items-center font-bold uppercase text-xl text-gray-600">
                            <span className={"w-[15px] h-[15px] mr-6 rounded-full  ring-2 ring-offset-2 bg" + ForumColor.feedback + " ring" + ForumColor.feedback}></span>
                            feedback
                        </div>

                        <div className="w-full flex items-center font-bold uppercase text-xl text-gray-600">
                            <span className={"w-[15px] h-[15px] mr-6 rounded-full  ring-2 ring-offset-2 bg" + ForumColor.announcement + " ring" + ForumColor.announcement }></span>
                            Annoncement
                        </div>

                        <div className="w-full flex items-center font-bold uppercase text-xl text-gray-600">
                            <span className={"w-[15px] h-[15px] mr-6 rounded-full  ring-2 ring-offset-2 bg" + ForumColor.offTopic + " ring" + ForumColor.offTopic}></span>
                            Sans topique
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Forum