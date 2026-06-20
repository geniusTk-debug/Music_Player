import { useEffect }  from "react";
import { useState } from "react";



function useFetch(url) {

    const [tracks, updateTracks] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(()=> {
     setloading(true)
        fetch(url)
        .then(res => res.json())
        .then(data => {
          updateTracks(data)
          setloading(false);
        });
    
    }, [url])

    return { tracks, updateTracks, loading}

}

export default useFetch;