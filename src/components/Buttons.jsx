import React from 'react'

function Buttons() {

  return (
    <div>
        <div >
            <button className='text-lg rounded-lg  cursor-pointer px-3 py-3  border-solid border 2 border-white'>Resume</button>
            <button className='text-lg rounded-lg  cursor-pointer px-3 py-3  border-solid border 2 border-white' onClick={()=>{window.open('https://github.com/prashant2599py', '_blank')}}>Visit Github</button>
        </div>
    </div>
  )
}
 
export default Buttons