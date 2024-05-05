import React from "react";

const ProjectCard = ({ creator, projectName, projectLink, githubLink, children }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <div className="flex items-center gap-6">
                <div className="avatar">
                    <div className="w-16 mask mask-squircle">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                
                <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-lg">{creator.name}</h3>
                    <p className="text-gray-500 text-md">24h Webcup 2024</p>
                </div>
            </div>
            <div className="flex gap-2 mt-6 text-xl">
                <h3 className="font-bold">Nom du projet: </h3>
                <span>{projectName}</span>
            </div>

            <p className="text-bold text-gray-600">{children}</p>

            
            <div className="flex gap-5 mt-6">
                <a className="font-bold underline hover:text-secondary transition all" href={projectLink}>Voir le projet</a>
                <a href={githubLink} className="font-bold underline hover:text-secondary transition all">Voir le Code Source</a>
            </div>
        </div>
        
    </div>
  );
}

export default ProjectCard;