import { useState } from 'react';
import useFetch from './Hook/useFetch';
import './App.css';
import Logo from './Component/Logo';
import NavBar from './Component/NavBar';
import PlayList from './MusicPlayer/PlayList';

function App() {

  const[url, seturl] = useState ('http://localhost:3002/tracks');

  let {tracks, updateTracks, loading } = useFetch(url)
  
console.log(url)

  return (
    <>
    <Logo/>
    <NavBar url={url} seturl={seturl}/>
   <PlayList tracks={tracks} updateTracks={updateTracks} loading={loading}/>



    </>
   
  );
}

export default App;
