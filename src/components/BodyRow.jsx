import React from 'react'
import Buttons from './Buttons'
import image1 from "../images/bg_img.png"
// import { About } from './Body'


function BodyRow() {
    const name = "Prashant Lodhi"

  return (

    <div className="parent-div h-screen bg-zinc-900 text-white ">
      <section className='flex'>
            <div className=' text-4xl py-12 px-12'>Hi, my name is <br /> <span className='text-4xl
                text-pink-700'>{name}</span> 
    
                <div className='text-4xl'>And I am a passionate</div>

                <div className='py-12 px-0'>
                  <Buttons />
                </div>
            </div>

            <div className=' mx-0 my-4' >
                <img src={image1} alt="developer image"  style={{height: 300, width: 300, position: 'absolute' }}/>
            </div>            
      </section>

      
      <div className=' flex justify-start text-white text-4xl mx-12'>
        <About label={"About"}/>
      </div>

      <div className='text-2xl my-5 p-2 mx-8'>
        <AboutInfo/>
      </div>
    </div>  
  )
}

export function About({label}){
  return <div className='ml-4'>
    {label}
  </div>
}

export function AboutInfo(){
  return <div className='mx-3.5'>
    <div className='w-1/3 bg-orange-400 h-1 rounded' /><br />
    
    <p>I'm an enthusiast, passionate and hardworking with a strong interest in Backend/Frontend Development,
        With a sound knowledge in Java, JavaScript, HTML, CSS. 
        I am a dynamic and dedicated software engineer with a
        burning passion for technology and a relentless drive
        for problem-solving. I am fueled by a genuine enthusiasm for
        staying at the cutting edge of emerging technologies. In an
        industry that moves at lightning speed. What sets me apart is
        my unwavering commitment to excellence and my insatiable
        thirst for knowledge.
          
    </p>
  </div>
}

export default BodyRow