import React, { useState } from "react"

const ProfileSetting = () => {
    // Initialize state with an object containing properties for each input
    const [formData, setFormData] = useState({
        username: '',
        github: '',
        email: '',
        password: ''
    })

    // A general function to handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value // Dynamically update the right property based on the input's name
        }))
    }

    return (
        <div className="w-full h-full p-20 pt-[6em] flex items-center justify-center">
            <div className="rounded-md shadow-xl p-12 flex items-center justify-center" style={{ background: "#fff" }}>
                <div className="h-full w-full p-6 overflow-x-hidden flex items-center justify-center">
                    <div className="flex flex-col gap-4 w-[500px]">
                        <div className="flex items-center gap-4 mb-12">
                            <h2 className="text-2xl font-bold">Parametre du compte</h2>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-4">
                                <label className="flex items-center input input-bordered">
                                    <span className="text-gray-500 mr-6">Nom d'utilisateur</span>
                                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                                </label>
                                <label className="flex items-center input input-bordered">
                                    <span className="text-gray-500 mr-6">Github</span>
                                    <input type="text" name="github" value={formData.github} onChange={handleChange} />
                                </label>
                            </div>
                            <div className="flex flex-col gap-4">
                                <label className="flex items-center input input-bordered">
                                    <span className="text-gray-500 mr-6">Email</span>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                                </label>
                                <label className="flex items-center input input-bordered">
                                    <span className="text-gray-500 mr-6">Password</span>
                                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                                </label>
                            </div>
                            
                            <button className="btn btn-primary bg-main border-none text-secondary mt-12">Enregistrer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSetting
