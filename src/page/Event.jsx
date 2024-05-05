import React from "react"

// icons
import { GrSearch } from "react-icons/gr"

// components
import EventCard from "../Components/EventCard"

const Event = () => {
    

  return (
    <div className="w-full h-full p-20 pt-[6em]">
        <div className="w-full h-full rounded-md shadow-xl p-20 flex flex-col" style={{background: "#fff"}}>
            
            <div className="w-full flex items-center justify-between  mb-12">
                <h1 className="text-2xl font-bold">Trouvez ici le journal des événements</h1>

                <div className="flex items-center">
                    <GrSearch className="text-xl"/>
                    <input type="text" placeholder="Rechercher un événement" className="ml-3 input input-bordered w-[400px]" />
                </div>

                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Type d'événement</option>
                    <option>à venir</option>
                    <option>tous les événements</option>
                </select>
            </div>
           
            <div className="w-full overflow-x-hidden overflwo-y-scroll flex flex-col gap-12">
                


                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />


            </div>
        </div>
    </div>
  )
}

export default Event