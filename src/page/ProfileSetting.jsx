import React from "react";

const ProfileSetting = () => {
    return (

    <div className="w-full h-full p-20 pt-[6em] flex items-center justify-center">
        <div className="rounded-md shadow-xl p-12 flex items-center justify-center" style={{background: "#fff"}}>
            <div className="h-full w-full p-6 overflow-x-hidden flex items-center justify-center">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-2xl font-bold">Paramètres du compte</h2>
                        <button className="btn btn-primary">Enregistrer</button>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <label className="flex items-center input input-bordered">
                                <span className="text-gray-500 mr-6">Nom</span>
                                <input type="text" />
                            </label>
                            <label className="flex items-center input input-bordered">
                                <span className="text-gray-500 mr-6">Prénom</span>
                                <input type="text" />
                            </label>
                        </div>
                        <div className="flex flex-col gap-4">
                            <label className="flex items-center input input-bordered">
                                <span className="text-gray-500 mr-6">Email</span>
                                <input type="email" />
                            </label>
                            <label className="flex items-center input input-bordered">
                                <span className="text-gray-500 mr-6">Mot de passe</span>
                                    <input type="password" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ProfileSetting;