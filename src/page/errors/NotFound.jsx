import React from 'react';
import { FaRegSadCry } from "react-icons/fa";

export default function NotFound() {
    return (
        <div class="w-full mx-auto">
            <div class="flex border h-screen">
                <div class="w-full flex flex-col justify-center items-center">
                    <i class="fas fa-exclamation-triangle text-6xl text-danger">
                        <FaRegSadCry />
                    </i>
                    <h5 class="my-4">Page non trouvée</h5>
                    <a href="/" class="btn mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Retour à l'accueil</a>
                </div>
            </div>
        </div>
    )
}