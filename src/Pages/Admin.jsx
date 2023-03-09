
import React, { useEffect, useState } from 'react'
import { handleInput5, addToDatabase } from '../MyCodes/ed5'

function Admin() {
    const addEvent = (data) => {
        setColor(true)
        addToDatabase('DATASTORE', 'Events', 'events', { [data.title]: data })
    }

    const [color, setColor] = useState(false)
    const [password, setPassword] = useState({})
    const passwordCorrect = (password.pass == '5isthegoat!')
    const [event, setEvent] = useState()
    if (color) setTimeout(() => { setColor(!color) }, 1000)

    function timeConvert(time) {
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) { // If time format correct
            time = time.slice(1);  // Remove full string match value
            time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join(''); // return adjusted time or original string
    }



    return (
        <div className='bg-white h-fit w-full relative overflow-y-scroll flex flex-col justify-center border-black border items-center'>
            {!passwordCorrect && <div className='absolute z-20 bg-rose-700 h-full w-full flex'>
                <div className="h-[50%] w-[90%] lg:w-[40%] m-auto bg-slate-900">
                    <h1 className='text-4xl text-white text-center font-bold'>PASSWORD?</h1>
                    <input onChange={({ target }) => { handleInput5(target.name, target.value, setPassword) }} className='w-full h-24 m-auto text-2xl p-2 text-center' type="password" name="pass" id="" />
                </div>
            </div>}
            <div className='py-4 w-full'>
                <h1 className='font-bold text-3xl text-center mt-12'>Admin</h1>
                <div className="flex lg:flex-row flex-col items-center justify-center relative p-12">
                    <div className={`${color ? 'bg-blue-900' : 'hover:bg-slate-900 hover:text-white bg-slate-200'} flex-col flex  w-96 lg:w-96 m-2 p-8 rounded-xl transition-all ease-in-out duration-1000`}>
                        <h1 className='font-bold text-2xl text-center text-slate-400'>Video Links</h1>
                        <input className='focus:scale-110 duration-500 ease-in-out transition-all p-2 m-auto my-2 w-[90%] shadow-sm shadow-black h-12 font-bold text-black' type="text" placeholder='Video ID1' onChange={({ target }) => { addToDatabase('DATASTORE', 'Videos', 'vid1', target.value) }} />
                        <input className='focus:scale-110 duration-500 ease-in-out transition-all p-2 m-auto my-2 w-[90%] shadow-sm shadow-black h-12 font-bold text-black' type="text" placeholder='Video ID2' onChange={({ target }) => { addToDatabase('DATASTORE', 'Videos', 'vid2', target.value) }} />

                        <h1 className='font-bold text-2xl text-center text-slate-400 mt-8'>Social Links</h1>
                        <input className='p-2 m-auto mb-8 w-[90%] shadow-sm shadow-black h-12 font-bold text-black focus:scale-110 duration-500 ease-in-out transition-all' type="text" placeholder='Facebook Link' onChange={({ target }) => { addToDatabase('DATASTORE', 'Links', 'facebook', target.value) }} />

                        <h1 className='font-bold text-3xl text-center my-2 text-slate-400'>Add Event</h1>
                        <div className={`${color ? 'bg-blue-700' : ''} hover:bottom-5 bottom-0 hover:scale-105 transition-all duration-1000 ease-in-out relative  shadow p-4 shadow-black flex flex-col justify-center items-center h-[75%]`}>
                            <input name='title' onChange={({ target }) => { handleInput5(target.name, target.value, setEvent) }} className='w-[90%] m-1 font-bold text-black focus:scale-110 duration-500 ease-in-out transition-all' placeholder='Event Title' type="text" />
                            <div className={`flex p-4 m-auto`}>
                                <input name='date' onChange={({ target }) => { handleInput5(target.name, target.value, setEvent) }} className='focus:scale-110 duration-500 ease-in-out transition-all w-[50%] m-1 font-bold text-black' placeholder='Event date' type="date" />
                                <input name='time' onChange={({ target }) => { handleInput5(target.name, timeConvert(target.value), setEvent) }} className='focus:scale-110 duration-500 ease-in-out transition-all w-[50%] m-1 font-bold text-black' placeholder='Event date' type="time" />
                            </div>

                            <textarea name='desc' onChange={({ target }) => { handleInput5(target.name, target.value, setEvent) }} className='focus:scale-110 duration-500 ease-in-out transition-all w-[90%] m-1 h-20 font-bold text-black' placeholder='Event description' type="text" />
                        </div>

                        <div className={`${color ? 'bg-blue-500' : ''} hover:top-5 top-0 hover:scale-105 transition-all duration-[1000ms] ease-in-out relative shadow p-4 shadow-black flex flex-col justify-center items-center h-[75%]`}>
                            <h1 className='font-bold text-2xl text-center text-slate-400'>Service Times</h1>
                            <label htmlFor="">Sunday time</label>
                            <input className='p-2 m-auto my-2 w-[90%] shadow-sm shadow-black h-12 font-bold text-black focus:scale-110 duration-500 ease-in-out transition-all' type="time" placeholder='' onChange={({ target }) => { addToDatabase('DATASTORE', 'ServiceTime', 'sundayTime', timeConvert(target.value)) }} />
                            <label htmlFor="">Thursday time</label>
                            <input className='p-2 m-auto my-2 w-[90%] shadow-sm shadow-black h-12 font-bold text-black focus:scale-110 duration-500 ease-in-out transition-all' type="time" placeholder='Video ID2' onChange={({ target }) => { addToDatabase('DATASTORE', 'ServiceTime', 'thursdayTime', timeConvert(target.value)) }} />
                        </div>

                        <button onClick={() => { addEvent(event) }} className='m-auto mt-8 font-bold hover:scale-110 transition-all duration-500 ease-in-out hover:text-white text-black hover:bg-emerald-600 bg-rose-700 rounded-full p-4'>Add Event</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin