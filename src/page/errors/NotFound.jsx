
import React from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import Lottie from 'react-lottie'
import animationData from '../../lottie/Error404.json'

const NotFound = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    return createPortal(
        <div className="w-screen absolute top-0 left-0 h-screen bg-white opacity-75 flex flex-col  items-center justify-center">
            <Lottie 
                options={defaultOptions}
                height={200}
                width={200}
            />
            <Link to="/" className='px-4 py-4 text-lg font-bold rounded-md shadow-md bg-main border-none text-secondary mt-12'>Retourner à l'accueil</Link>
        </div>
    , document.body)
}

export default NotFound
// import React from 'react';
// import
// export default function NotFound() {
//     return (
//         <div class="w-full mx-auto">
//             <div class="flex border h-screen">
//                 <div class="w-full flex flex-col justify-center items-center">
//                     <i class="fas fa-exclamation-triangle text-6xl text-danger"></i>
//                     <h5 class="my-4">Page non trouvée</h5>
//                     <a href="/" class="btn mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Retour à l'accueil</a>
//                 </div>
//             </div>
//         // </div>
//     )
// }