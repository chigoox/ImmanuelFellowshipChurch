import React, { useState } from 'react'

function Services({ events, service }) {

    const array = events ? Object.values(events).sort((a, b) => {
        console.log(a, b)
        return (a - b)
    }) : []


    const eventsMap = Object.values(array[0] ? array[0] : []).map((event) => {
        return (
            <Event title={event.title}
                key={event.title}
                date={event.date}
                time={event.time}
                desc={event.desc} />
        )
    })

    function Event({ time, date, title, desc }) {
        const [hovered, setHovered] = useState(false)

        const toggleHovered = () => { setHovered(!hovered) }
        return (
            <div className='w-[90%] h-40 rounded bg-white shadow shadow-black m-2' onMouseLeave={toggleHovered} onMouseEnter={toggleHovered}>
                <h1 className={`${hovered ? 'text-xm' : 'text-3xl font-bold'}   my-2 text-center   transition-all duration-700 ease-in-out`}>{title}</h1>
                <h1 className={`${hovered ? 'text-xm' : 'text-lg font-semibold'}   text-center  transition-all duration-700 ease-in-out`}>
                    {date}  {time}
                </h1>
                <h1 className={`${hovered ? 'text-xl font-bold' : ''}    text-center my-4 transition-all duration-700 ease-in-out`}>{desc}</h1>
            </div>
        )
    }

    return (
        <div className='h-fit w-full lg:p-8'>
            <div className='overflow-hidden'>
                <h1 className='bg-white overflow-hidden mb-9 text-center font-bold text-4xl fontxxx'>Services and Events</h1>
            </div>
            <div className='h-[48rem] w-full overflow-y-scroll flex flex-col lg:flex-row p-2 lg:p-8 relative justify-center items-center'>
                <div className='rounded mt-40 lg:mt-0 w-[95%] lg:w-[50rem] h-[30rem] m-2'>
                    <div className="flex flex-col p-4">
                        <h1 className='text-4xl  font-bold text-center w-full'>Regular Service Schedule</h1>
                        <h1 className='font-bold text-xl my-4 text-center w-full'> Sunday Worship - {service?.sundayTime} Contemporary service</h1>
                        <h1 className='font-bold text-lg my-2 text-center w-full'>
                            Thursday Bible Study - {service?.thursdayTime} Interactive discussion - style Bible study
                        </h1>
                    </div>
                </div>
                <div className='bg-white w-full  lg:w-[50rem] h-[30rem] m-2 shadow-sm shadow-black rounded-lg p-4'>
                    <h1 className='text-2xl font-bold text-center w-full rounded'>Events</h1>
                    <div className='overflow-y-scroll justify-center  gap-2 flex flex-wrap h-96 border-y-4 border-slate-500 rounded-xl'>
                        {eventsMap}

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