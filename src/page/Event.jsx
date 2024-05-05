import React from "react"

// icons
import { GrSearch } from "react-icons/gr"

const Event = () => {
    

  return (
    <div className="w-full h-full p-20 pt-[6em]">
        <div className="w-full h-full rounded-md shadow-xl p-20 flex flex-col" style={{background: "#fff"}}>
            
            <div className="w-full flex items-center justify-between  mb-12">
                <h1 className="text-2xl font-bold">Trouvez ici le journal des êvenements</h1>

                <div className="flex items-center">
                    <GrSearch className="text-xl"/>
                    <input type="text" placeholder="Rechercher un évènements" className="ml-3 input input-bordered w-[400px]" />
                </div>

                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Type d'évènemen</option>
                    <option>à venir</option>
                    <option>tous les évènements</option>
                </select>
            </div>
           
            <div className="w-full overflow-x-hidden overflwo-y-scroll flex flex-col gap-12">
                
                <div className="card lg:card-side bg-base-100 shadow-xl w-full max-h-[300px]">
                    <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>

                <div className="card lg:card-side bg-base-100 shadow-xl w-full max-h-[300px]">
                    <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>

                <div className="card lg:card-side bg-base-100 shadow-xl w-full max-h-[300px]">
                    <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>
  )
}

export default Event