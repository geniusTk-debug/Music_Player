


import './index.css';
export default function PlayList({tracks, loading, playSongF, play_song}) {


  return (
    (!play_song && <>
    {loading && <div>loading</div>}
    {!loading && <div className='playlistComponent'>

        <ul className='playlist-container'>

          {(tracks.map(prevState => (
            
            <div className='songsList' key={prevState.id}>

                 <img className='album-cover' alt='album cover' src={prevState.img}/>
                 
                  {prevState.title}
                
                <li className='info'>{prevState.singer}</li>
                <li className='info'>{prevState.availiableLyrics}</li>    
                <button onClick={() => playSongF(prevState)}>Play</button>       
                {prevState.availableLyrics && <li className='info'>Lyric : Available</li>}

              </div>

          )))}
          

        </ul>
    </div>}
    </>)
  )}