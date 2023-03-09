import React, { useEffect } from 'react'


function Media({ videos }) {


    return (
        <div className='bg-white h-fit w-full relative overflow-y-scroll overflow-hidden'>

            <div className='w-[60%] m-auto'>
                <div className='py-14'>
                    <h1 className='text-center my-4 font-bold text-3xl'>Listen to our Bible Teaching Series</h1>
                    <div className='flex md:flex-row flex-col items-center justify-around text-center'>

                        <div className='w-96 m-6 lg:m-0'>
                            <h1 className='my-2 font-semibold'>Sunday Service</h1>
                            <h1>Every Sunday, Pastor Robert or
                                an invited minister brings an
                                edifying message to the
                                congregation.
                            </h1>
                        </div>

                        <div className='w-96 m-6 lg:m-0'>
                            <h1 className='my-2 font-semibold'>Thursday Night Bible Study</h1>
                            <h1>On Thursday nights there is
                                an interactive study through
                                a book of the Bible or on a topic
                                of importance to helping Believers
                                form a Biblical worldview.
                            </h1>
                        </div>

                    </div>
                </div>


            </div>

            <div className='rounded-t-3xl m-2 bg-black h-fit w-full relative flex flex-col items-center'>
                <h1 className='font-bold text-white text-center text-3xl m-2'>Videos</h1>
                <div className='flex lg:felx-row flex-col'>
                    <div className='h-content m-10 p-10'>
                        <iframe className='lg:w-[600px] border-4 lg:h-[400px] relative bottom-14'
                            src={`https://www.youtube.com/embed/${videos.vid1}`}>
                        </iframe>
                    </div>
                    <div className='p-10 m-10'>
                        <h1 className='font-bold text-white text-3xl'>Pastor Robert Jones, Jr.</h1>
                        <h1 className='font-semibold text-slate-200 text-lg'>"Guard Your Heart"(Proverbs 4:23)</h1>

                    </div>
                </div>
                <div className='flex lg:felx-row flex-col' >
                    <div className='p-10 m-10'>
                        <h1 className='font-bold text-white text-3xl'>Leon deVose, Jr. John 1:11-14</h1>
                    </div>
                    <div className='h-content m-10 p-10'>
                        <iframe className='lg:w-[600px] border-4 lg:h-[400px] relative bottom-14'
                            src={`https://www.youtube.com/embed/${videos.vid2}`}>

                        </iframe>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Media