import React, { useState } from 'react'

function Services() {

    function Event({ time, date, title, desc }) {
        const [hovered, setHovered] = useState(false)
        const toggleHovered = () => { setHovered(!hovered) }
        return (
            <div className='w-[90%] h-fit bg-white shadow shadow-black m-2' onMouseLeave={toggleHovered} onMouseEnter={toggleHovered}>
                <h1 className={`${hovered ? 'text-xm' : 'text-3xl font-bold'}   my-2 text-center   transition-all duration-700 ease-in-out`}>{title}</h1>
                <h1 className={`${hovered ? 'text-xm' : 'text-lg font-semibold'}   text-center  transition-all duration-700 ease-in-out`}>
                    {date}  {time}
                </h1>
                <h1 className={`${hovered ? 'text-xl font-bold' : ''}    text-center my-4 transition-all duration-700 ease-in-out`}>{desc}</h1>
            </div>
        )
    }

    return (
        <div className='h-fit w-full bg-slate-200'>
            <div className=''>
                <h1 className=' text-center font-bold text-4xl'>Services and Events</h1>
            </div>
            <div className='h-[48rem] flex flex-col lg:flex-row p-8 relative justify-center items-center'>
                <div className='bg-slate-100 w-[95%] lg:w-[50rem] h-[30rem] m-2 shadow-sm shadow-black'>
                    <div className="flex flex-col p-4">
                        <h1 className='text-2xl font-bold text-center w-full'>Regular Service Schedule</h1>
                        <h1 className='font-bold my-4 text-center w-full'> Sunday Worship - 10:30 a.m.
                            Contemporary service</h1>
                        <h1 className='font-bold my-2 text-center w-full'>
                            Thursday Bible Study - 7: 00 p.m.
                            Interactive discussion - style Bible study
                        </h1>
                    </div>
                </div>
                <div className='bg-slate-100 w-full  lg:w-[50rem] h-[30rem] m-2 shadow-sm shadow-black rounded-lg p-4'>
                    <h1 className='text-2xl font-bold text-center w-full rounded'>Events</h1>
                    <div className='overflow-y-scroll justify-center gap-2 flex flex-wrap h-96 border-y-4 border-slate-500 rounded-xl'>
                        <Event />

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Services
/* 
Regular Service Schedule
            Sunday Worship - 1: 00 p.m.
            Contemporary service

            Thursday Bible Study - 7: 00 p.m.
            Interactive discussion - style Bible study */