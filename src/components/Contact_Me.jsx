import React from 'react';
import PhoneCallRedirect from './PhoneCallRedirect';



export const Contact_Me = () => {
    return <div className="h-80 bg-zinc-800 text-white">
        <div>
            <div className="flex justify-center text-3xl pt-6">
                Contact Me
                
            </div><br />

            <div className='flex justify-center'>
            
                <div className='h-14 w-72 bg-zinc-800 border-solid border-2 border-zinc-700 rounded-md cursor-pointer flex justify-center items-center'>
                    <div className='mr-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="30px" width="30px"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                    </div>
                        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"><button >prashantlodhi2599@gmail.com</button></a>
                </div>
                <div className='mr-8'/>
                <div className='h-14 w-72 bg-zinc-800 border-solid border-2 border-zinc-700 rounded-md cursor-pointer flex justify-center items-center'>
                    <div className='mr-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="30px" width="30px"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z"/></svg>
                    </div>
                        <PhoneCallRedirect phoneNumber="(+91) 8273441901" />
                </div>
            </div>
        </div>
    </div>
}