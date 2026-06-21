import { useState } from 'react';
import useFetch from './Hook/useFetch';
import './App.css';
import Logo from './Component/Logo';
import NavBar from './Component/NavBar';
import PlayList from './Component/PlayList';
import PlaySong from './Component/PlaySong';


function App() {

  const[url, seturl] = useState ('http://localhost:3002/tracks');

  let {tracks, updateTracks, loading, playSongF, play_song, selected_song} = useFetch(url)
  
console.log(url)

  return (
    <>
    <Logo/>
    <NavBar url={url} seturl={seturl}/>
    <PlayList tracks={tracks} updateTracks={updateTracks} loading={loading} playSongF={playSongF} play_song={play_song}/>
    <PlaySong selected_song={selected_song}/>
    



    </>
   
  );
}

export default App;
