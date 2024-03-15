import { ChangeEvent, useState } from "react"
import React from "react"
export const Auth = () => {

    const [postInputs, setPostInputs] = useState({
        name : "",
        email : "",
        message : ""
    })
    
    function onClickHandler(){
        setTimeout(()=>{
            console.log(postInputs);
        }, 2*1000);
        
    }

    return <div className="h-screen bg-slate-600  flex justify-center flex-col ">
        <div className="flex justify-center">
            <div className="w-1/3">

                <div className="text-3xl font-extrabold text-black flex justify-center">Contact Me</div>
                <div className="pt-4">
                    <LabelledInputType label="Name" placeholder="Name......" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            name : e.target.value
                        })
                    }}/>
                    <LabelledInputType label="Email" placeholder="abcd@gmail.com" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            email : e.target.value
                        })
                    }}/>
                    <LabelledInputType label="Message" placeholder="1234" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            message : e.target.value
                        })
                    }}/>
                    <button onClick={onClickHandler} type="button" className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
                    focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700
                    dark:focus:ring-gray-700 dark:border-gray-700">Submit</button>
                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType{
    label : string,
    placeholder : string,
    onChange : (e : React.ChangeEvent<HTMLInputElement>) => void,

}
function LabelledInputType({label, placeholder, onChange}: LabelledInputType){
    return <div>
        <label className="block mb-2 pt-2 pl-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label>
        <input  onChange={onChange}  type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}

