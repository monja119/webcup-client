import React from 'react'
import {createPortal} from "react-dom"

const AddTopicModal = () => {

    return createPortal(
      <dialog id="AddTopicModal" className="modal m-0 h-full absolute top-0 left-0">
        {/* Modal content */}
        <div className="modal-box p-12 min-w-[500px]">

          <h3 className="font-bold text-2xl mb-12">Ajouter une nouvelle discussion</h3>
          {/* Topic addition form */}
          <div className="flex flex-col mb-6 gap-6">
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-bold">Type de discussion</span>
                </div>
                <select className="select select-bordered w-full max-w-xs">
                    <option selected>FAQ</option>
                    <option>Feed</option>
                    <option>Annoncement</option>
                    <option>Sans topique</option>
                </select>
            </label>
            

            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-bold">Topique de discussion</span>
                </div>
                <input type="text" placeholder="Un sujet super" className="input input-bordered w-full" />
            </label>

            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-bold">Description</span>
                </div>
                <textarea className="textarea textarea-bordered resize-none text-lg" placeholder="Suis-je un très bon developpeur ?"></textarea>
            </label>

          </div>
  
  
          {/* Modal action */}
          <div className="modal-action">
            <form method="dialog">
              {/* Button to close modal */}
              <button className="bg-main text-secondary py-4 px-4 rounded-md shadow hover:opacity-70 transition-all">Ajouter une discussion</button>
              <button className="btn btn-outline ml-6">Annuler</button>
            </form>
          </div>
        </div>
      </dialog>,
      document.body
    );
};

export default AddTopicModal