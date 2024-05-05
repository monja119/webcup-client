import React, {useState, useEffect} from 'react'
import { useData } from '../../contexts/DataContext';
// componenents
import AddProjectModal from '../../Components/AddProjectModal';
import ProjectCard from '../../Components/ProjectCard';
import { listProjectByUserId } from '../../services/projectServices';
import AddProjectCardItem from '../../Components/AddProjectCardItem';

const MyProject = () => {
  const [projects, setProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([])
  const { user } = useData();

  useEffect(()=>{
    user?.id && listProjectByUserId(user?.id).then(res=>{
      setAllProjects(res.data)
    })
  }, [user])

  return (
    <div className='h-full w-full overflow-y-scroll p-6 overflow-x-hidden'>
      <button className="bg-main text-secondary py-2 px-4 rounded-md shadow hover:opacity-70 transition-all" onClick={()=>document.getElementById('AddProjectModal').showModal()}>+</button>
      {
        allProjects.length === 0 ?
          (
            <p className="mt-3 mb-6 text">
              <span>0 projet(s)</span> ajouté(s)
            </p> 
          ) :
          (
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {
                allProjects?.map((project, index)=>(
                    <AddProjectCardItem
                      key={index}
                      projectName={project.name}
                      projectLink={project.url}
                      githubLink={project.github}
                    >
                      {project.description}
                  </AddProjectCardItem>
                ))
              }
            </div>
          )
      }

          

      <AddProjectModal projects={projects} setProjects={setProjects}/>
    </div>
  )
}

export default MyProject          