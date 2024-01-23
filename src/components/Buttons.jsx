import React from 'react'

function Buttons() {

    function handleClick(){
        
    }
  return (
    <div>
        <div >
            <button className='text-base rounded-lg  cursor-pointer px-3 py-3  border-solid border 2 border-white'>Resume</button>
            <button className='text-base rounded-lg  cursor-pointer px-3 py-3  border-solid border 2 border-white' onClick={()=>{window.open('https://github.com/prashant2599py', '_blank')}}>Visit Github</button>
        </div>
    </div>
  )
}
 
export default Buttons