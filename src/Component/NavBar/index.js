import React from 'react'
import './index.css'
import { useState } from 'react';
export default function NavBar({url, seturl}) {

    const [option, set_option] = useState('local')

    const handleDropdown = (e) => {

       set_option(e.target.value)

       if(option === 'local') {

        seturl('http://localhost:3002/tracks?availableLyrics=true')

       } else if(option === 'lyrics') {

        seturl('http://localhost:3002/tracks')

       }
    }

    let [tabs, tabsMenu] = useState ([
        {
            id: 1,
            text: 'Home',
            icon: "",

        },
        {
            id: 2,
            text: 'Music Player',
            icon: '',
            playList: true

        },
        {
            id: 3,
            text: 'About',
            icon: ''
        },
        {
            id: 4,
            text: 'Extra',
            icon: ''
        }
    ]);
    
    let [sliderPosition, setSliderPosition] = useState(
        {
            width : 0,
            left : 0
        }
    );


  const tabsHandler = (e) => {
    
   const target = e.currentTarget;
   setSliderPosition(
    {
        width : target.offsetWidth,
        left : target.offsetLeft
    }
   )

  }
  

  return(
    <>
    <nav className='navBar-Component'>
        <div className='navBar-container'>
           <ul>
            {tabs.map((tab => (
                <div className='single-tab' key={tab.id} >
                 
                <li onClick={tabsHandler}>
                    {tab.text}
                    
                    </li>
                </div>

            )))}
            
           </ul>
           <div className='slider' style={
            {
                width : `${sliderPosition.width}px`,
                transform : `translateX(${sliderPosition.left}px)`
            }
           }></div>
        </div>

        
    </nav>

        <div className='playlist-menu'>
            <i className="fa-solid fa-music">Play List</i>
            <select value={option} onChange={handleDropdown}>
                
                <option className='option' value='local'>Local</option>
                <option className='option' value='lyrics'>Lyrics</option>

            </select>
        </div>
   </>



 
  )



  
}
