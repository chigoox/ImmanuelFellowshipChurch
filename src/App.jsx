import { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiFillFacebook } from "react-icons/ai";
import './App.css'
import About from './Pages/About';
import Admin from './Pages/Admin';
import Home from './Pages/Home';
import Media from './Pages/Media';
import Services from './Pages/Services';
import { fetchDocument } from './MyCodes/ed5';

function App() {
  const [showMenu, setShowMenu] = useState()
  const [events, setEvents] = useState()
  const [videos, setVideos] = useState()
  const [links, setLinks] = useState()
  const [service, setService] = useState()
  const [selectedMenu, setSeletctedMenu] = useState({ Home: true })
  const toggleMenu = () => { setShowMenu(!showMenu) }


  const menuItems = ['Home', 'Media', 'Services', 'Motivation', 'Admin']
  const menuMap = menuItems.map((item) => {
    return (item != "Admin") ? (
      <button key={item} onClick={() => { setSeletctedMenu({ [item]: true }) }}
        className={`${selectedMenu[item] ? 'bg-blue-400' : 'bg-white'} w-[90%] h-12 my-8 rounded hover:font-bold hover:text-white hover:bg-slate-600`}
      >
        <h1>{showMenu ? item : ''}</h1>
      </button>
    ) : (
      <button key={item} onClick={() => { setSeletctedMenu({ [item]: true }); toggleMenu() }}
        className={`${selectedMenu[item] ? 'bg-blue-400' : 'bg-black'} w-[10%] transition-all ease-in duration-[9000ms] h-12 my-8 rounded hover:font-bold hover:text-white hover:bg-slate-600`}
      >
        <h1>{showMenu ? item : ''}</h1>
      </button>
    )
  })



  useEffect(() => {
    const collection = 'DATASTORE'
    fetchDocument(collection, 'Events', setEvents)
    fetchDocument(collection, 'Videos', setVideos)
    fetchDocument(collection, 'Links', setLinks)
    fetchDocument(collection, 'ServiceTime', setService)
  }, [])

  return (
    <div className="App h-full bg-slate-200">
      {/* SideMenu */}
      <div className={`${showMenu ? 'w-[60%] lg:w-[20%]' : 'w-0 lg:w-0'} z-20 h-full flex fixed transition-all duration-500 ease-in-out`} >
        <div className={`w-full items-center flex flex-col justify-center  bg-black h-full transition-all duration-500 ease-in-out`}>
          {menuMap}
        </div>
        <button onClick={toggleMenu} className={`relative ${showMenu ? ' right-14 text-rose-600' : 'text-white hover:text-black bg-black hover:bg-slate-100 p-1'}  w-12 h-12 text-4xl rounded-xl transition-all duration-500 ease-in-out hover:scale-110 mt-14`}>
          {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
      {/* end SideMenu */}

      {/* PAGES */}
      {selectedMenu.Home && <Home />}
      {selectedMenu.Services && <Services events={events} service={service} />}
      {selectedMenu.Motivation && <About />}
      {selectedMenu.Media && <Media videos={videos} />}
      {selectedMenu.Admin && <Admin />}



      {/* Footer */}
      <div className='bg-black bottom-0 w-full p-10 '>
        <div className='flex justify-center h-12 text-center  w-full lg:mb-10  text-white text-5xl'>
          <a href={links?.facebook}>
            <button className=''><AiFillFacebook /></button>
          </a>
        </div>
        <div className='w-full lg:h-32 mb-10 flex flex-col justify-center items-center h-72'>

          <div className='w-full mr-0 m-4 text-white scale-75'>
            <h1 className='text-center mt4  lg:mt-14'>Questions? Need Prayer?</h1>

            <div className='flex justify-center text-black font-semibold'>
              <input type="text" className='m-2 h-10 p-2' placeholder='Name' />
              <input type="text" className='m-2 h-10 p-2' placeholder='Email' />
            </div>

            <div className='flex text-black font-semibold'>
              <textarea className='m-auto h-32 lg:h-10 w-full lg:w-3/4 p-2' placeholder='Tell use about it'></textarea>
            </div>
            <div className='flex justify-center'>
              <button className='hover:bg-blue-500 hover:border-0 hover:scale-105 transition-all duration-75 ease-in-out border-2 border-white h-10 w-20 m-4 mb-8'>Send</button>
            </div>

          </div>
        </div>

        <h1 className='text-center text-white lg:mt-16'>Copyright © 2020 Immanuel Fellowship Church - All Rights Reserved.</h1>
      </div>


    </div >
  )
}

export default App
