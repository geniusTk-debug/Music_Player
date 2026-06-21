import React from 'react'
import './index.css';
import Player from '../Player/index'


export default function PlaySong({selected_song}) {
    console.log('inside PlaySong prevState OUtput',selected_song)

  

  
  return (
    <div className='selected-song' key={selected_song.id}>
        <img alt='album cover' src={selected_song.img}></img>
        <span>{selected_song.title}</span>
        <span>{selected_song.singer}</span>
        <button>Click to see lyric</button>
        <Player/>
    </div>
  )
}
