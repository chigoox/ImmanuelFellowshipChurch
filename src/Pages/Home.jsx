import React from 'react'
import Church from '../assets/rs=w_1024.webp'

function Home() {
    return (
        <div className='h-fit w-full bg-white'>
            <div className='bg-slate-900 h-12 flex flex-col justify-center mb-4 items-center hover:bg-white transition-all duration-1000 ease-in-out'>
                <h1 className='text-center text-white hover:text-black w-full font-semibold'>~ Immanuel Fellowship Church ~ 1264 Victor Ave ~ Union, NJ 07083-3706</h1>
            </div>
            <div className=' w-full h-[35rem] lg:h-[90vh] p-4 lg:p-2  justify-center items-center relative flex flex-col'>
                <h1 className='font-bold'>(908)422-2310</h1>
                <img className='shadow shadow-black h-full rounded-3xl m-auto' src={Church} alt="church" />
            </div>
            <div className='flex justify-center m-4'>
                <h1 className='text-center font-bold text-3xl w-96'>
                    Continue in brotherly love.
                    Hebrews 13:1
                </h1>
            </div>
            <div className="flex m-8">
                <button className='bg-slate-400 rounded-xl m-auto w-32 h-12 hover:bg-blue-400 font-bold transition-all hover:scale-125 duration-700 ease-in-out text-white'>Join us</button>
            </div>
        </div>
    )
}

export default Home