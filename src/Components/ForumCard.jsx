import React, {useEffect, useRef} from 'react'

// motion
import { motion, useInView, useAnimation } from 'framer-motion'


// icon
import { FaRegComment } from "react-icons/fa"


const ForumCard = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])

  return (
    <motion.div 
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          x: 75
        },
        visible: {
          opacity: 1,
          x: 0
        }
      }}
      initial="hidden"
      animate={mainControls}
      transition={{duration: 0.2, delay: 0.1}}
      className='w-full rounded-md shadow-lg p-12 border flex' style={{borderColor: 'rgba(0,0,0,0.05)'}}>
      <div className='flex items-center justify-center'>
        <div className="avatar self-start">
          <div className="w-24 mask mask-squircle">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>



        <div className="w-full ml-6 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-3xl mb-3">John Doe</h3>
          <p className="text-gray-500 mb-3" style={{color: 'rgba(0,0,0,0.5)'}}>Joined on 15/05/2022</p>
          <p style={{color: 'rgba(0,0,0,0.5)'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium itaque necessitatibus beatae! Maxime, quis. Quae, veniam doloribus modi enim officia incidunt, porro asperiores eligendi molestias voluptatum nihil sapiente quam omnis architecto culpa facere iste! Sunt nostrum unde harum tempora, corrupti, dignissimos delectus repellendus alias, officia voluptates deleniti molestias temporibus.</p>
        </div>

        <div className='self-end flex flex-col justify-between h-full ml-6 w-1/4'>
          <div className="badge badge-outline self-end p-3 border-gray-500"><span className='w-[10px] h-[10px] rounded-full bg-red-200 mr-3'></span>default</div>
          <a className='flex items-center self-end cursor-pointer' style={{color: 'rgba(0,0,0,0.7)'}} onClick={()=>document.getElementById('CommentModal').showModal()}><FaRegComment className='mr-3 text-3xl'/> 20 Commentaire</a>
        </div>


      </div>
    </motion.div>
  )
}

export default ForumCard