import React from 'react'
import Buttons from './Buttons'
// import './Body.css'

function BodyRow() {
    const name = "Prashant Lodhi"
  return (
    <div className=' w-screen h-screen bg-black text-white'>
        <section>
            <div className='text-4xl'>Hi, My name is <br /> <span className='text-4xl
            text-pink-700'>{name}</span></div>
            <div className='text-4xl'>And I am a passionate</div>
            <Buttons ></Buttons>
            
        </section>
    </div>
  )
}

export default BodyRow