import React from 'react'

function About() {
    return (
        <div className='bg-white h-fit w-full relative overflow-y-scroll '>
            <div className='py-14'>
                <h1 className='font-bold text-3xl text-center mt-12'>What Drives Us (mission & vision)</h1>
                <div className="flex lg:flex-row flex-col items-center justify-center relative p-12">
                    <div className="hover:bg-slate-900 hover:text-white bg-slate-200 w-96 lg:w-96 m-2 h-96 p-8 rounded-xl transition-all ease-in-out duration-1000">
                        <h1 className='font-bold text-2xl'>Our Mission</h1>
                        <h1 className='text-justify mt-2'>
                            We are a church called to follow Jesus Christ,
                            the living Word of God, obeying the revealed
                            Word of God, the Bible.  Our mission is to present
                            the Gospel, the Good News of what Jesus Christ has
                            done, so that people become wholehearted followers
                            of Jesus Christ. We are committed to proclaiming the
                            Sovereignty  of God, the need for salvation and the joys
                            of Christian fellowship found within the local church.
                        </h1>
                    </div>
                    <div className="hover:bg-slate-900 hover:text-white bg-slate-200 w-96 lg:w-96 m-2 p-8 h-96 rounded-xl transition-all ease-in-out duration-1000">
                        <h1 className='font-bold text-2xl'>Our Vision</h1>
                        <h1 className='text-justify mt-2'>To see the Holy Spirit move men and women from spiritual blindness,
                            religion, and hatred towards God to a loving and eternal relationship
                            with the Father through faith in our Lord and Saviour Jesus Christ.
                        </h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About