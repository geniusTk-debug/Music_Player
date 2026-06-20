import { useEffect }  from "react";
import { useState } from "react";



function useFetch(url) {

    const playSongF = (prevState) => {

     set_play_song(true);
     set_selected_song(prevState);

    }


    const [tracks, updateTracks] = useState([]);
    const [loading, setloading] = useState(false);
    const [play_song, set_play_song] = useState(false);
    const [selected_song, set_selected_song] = useState([])

    useEffect(()=> {
     setloading(true)
        fetch(url)
        .then(res => res.json())
        .then(data => {
          updateTracks(data)
          setloading(false);
        });
    
    }, [url])

    return { tracks, updateTracks, loading, playSongF, play_song, selected_song}

}

export default useFetch;