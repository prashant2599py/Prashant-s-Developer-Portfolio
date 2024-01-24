import React from 'react'
import Buttons from './Buttons'
import image1 from "./store/images/bg_img.png"


function BodyRow() {
    const name = "Prashant Lodhi"

  return (

    <div className="parent-div h-screen bg-black text-white ">
      <section className='flex'>
            <div className='w-1/5 text-4xl py-12 px-12'>Hi, my name is <br /> <span className='text-4xl
                text-pink-700'>{name}</span> 
    
                <div className='text-4xl'>And I am a passionate</div>

                <div className='py-12 px-0'>
                  <Buttons />
                </div>
            </div>

            <div className='w-4/5 mx-0 my-4' >
                <img src={image1} alt="developer image"  style={{height: 300, width: 300, position: 'absolute' }}/>
            </div>
      </section>
    </div>  
  )
}

export default BodyRow