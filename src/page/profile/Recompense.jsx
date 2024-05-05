import React from 'react'
import ForumCard from '../../Components/ForumCard'

const Recompense = () => {
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint ipsa inventore distinctio! Dolorem consequatur quia doloremque dignissimos quae, omnis doloribus quos architecto mollitia incidunt nulla, ipsum et cum ad."
    const truncateText = (text, count) => {
        const words = text.split(' ');
        if (words.length > count) {
            return words.slice(0, count).join(' ') + ' (...)';
        }
        return text;
    };

    const truncatedDescription = truncateText(description, 10);
    
    return (
        <div className='h-full w-full overflow-y-scroll p-6 overflow-x-hidden flex gap-x-36 gap-y-12 flex-wrap items-center'>

            <div className="card h-fit w-96 bg-base-100 shadow-xl cursor-pointer hover:scale-105 transition-all">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Site pour les I.A.s qui ont perdu leur maître
                        <div className="badge badge-secondary">2nd</div>
                    </h2>
                    <p>{truncatedDescription}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">ReactJs</div> 
                        <div className="badge badge-outline">PHP</div>
                    </div>
                    
                </div>
            </div>

            <div className="card h-fit w-96 bg-base-100 shadow-xl cursor-pointer hover:scale-105 transition-all">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Site pour les I.A.s qui ont perdu leur maître
                        <div className="badge badge-secondary">2nd</div>
                    </h2>
                    <p>{truncatedDescription}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">ReactJs</div> 
                        <div className="badge badge-outline">PHP</div>
                    </div>
                    
                </div>
            </div>
            <div className="card h-fit w-96 bg-base-100 shadow-xl cursor-pointer hover:scale-105 transition-all">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Site pour les I.A.s qui ont perdu leur maître
                        <div className="badge badge-secondary">2nd</div>
                    </h2>
                    <p>{truncatedDescription}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">ReactJs</div> 
                        <div className="badge badge-outline">PHP</div>
                    </div>
                    
                </div>
            </div>
            <div className="card h-fit w-96 bg-base-100 shadow-xl cursor-pointer hover:scale-105 transition-all">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Site pour les I.A.s qui ont perdu leur maître
                        <div className="badge badge-secondary">2nd</div>
                    </h2>
                    <p>{truncatedDescription}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">ReactJs</div> 
                        <div className="badge badge-outline">PHP</div>
                    </div>
                    
                </div>
            </div>
            <div className="card h-fit w-96 bg-base-100 shadow-xl cursor-pointer hover:scale-105 transition-all">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Site pour les I.A.s qui ont perdu leur maître
                        <div className="badge badge-secondary">2nd</div>
                    </h2>
                    <p>{truncatedDescription}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">ReactJs</div> 
                        <div className="badge badge-outline">PHP</div>
                    </div>
                    
                </div>
            </div>
            <div className="card h-fit w-96 bg-base-100 shadow-xl cursor-pointer hover:scale-105 transition-all">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Site pour les I.A.s qui ont perdu leur maître
                        <div className="badge badge-secondary">2nd</div>
                    </h2>
                    <p>{truncatedDescription}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">ReactJs</div> 
                        <div className="badge badge-outline">PHP</div>
                    </div>
                    
                </div>
            </div>

        </div>
        
    )
}

export default Recompense          