import React from 'react'

// components
import PostCard from "../Components/PostCard"
import ProjectCard from '../Components/ProjectCard'

const Project = () => {
  return (
    <div className="w-full h-full p-20 pt-[6em]">
        <div className="w-full h-full rounded-md shadow-xl p-12 flex flex-col" style={{background: "#fff"}}>
          <h1 className='text-3xl fon bold mb-6'>La liste des projets éffectués par les vétérans dans webcup 24h</h1>
          <div className='bg-gray-100 h-[1px] w-full mb-6'></div>
          <select className="select select-bordered w-full max-w-xs mb-12">
            <option disabled selected>Tiré par</option>
            <option>Les plus récents</option>
            <option>Les plus pertinent</option>
          </select>
          <div className="flex h-6/7 w-full overflow-x-hidden overflow-y-scroll flex flex-wrap gap-x-12 gap-y-12 p-20">
            <ProjectCard creator={{name:"miantsa fanirina"}}projectName="azeaze" projectLink="azeazeaze" githubLink="azeazea">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nam velit nesciunt voluptas perferendis et. Ipsa consequuntur officia eveniet nihil.
            </ProjectCard>
            <ProjectCard creator={{name:"miantsa fanirina"}}projectName="azeaze" projectLink="azeazeaze" githubLink="azeazea">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nam velit nesciunt voluptas perferendis et. Ipsa consequuntur officia eveniet nihil.
            </ProjectCard>
            <ProjectCard creator={{name:"miantsa fanirina"}}projectName="azeaze" projectLink="azeazeaze" githubLink="azeazea">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nam velit nesciunt voluptas perferendis et. Ipsa consequuntur officia eveniet nihil.
            </ProjectCard>
            <ProjectCard creator={{name:"miantsa fanirina"}}projectName="azeaze" projectLink="azeazeaze" githubLink="azeazea">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nam velit nesciunt voluptas perferendis et. Ipsa consequuntur officia eveniet nihil.
            </ProjectCard>
            <ProjectCard creator={{name:"miantsa fanirina"}}projectName="azeaze" projectLink="azeazeaze" githubLink="azeazea">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nam velit nesciunt voluptas perferendis et. Ipsa consequuntur officia eveniet nihil.
            </ProjectCard>
          </div>

        </div>
    </div>
  )
}

export default Project