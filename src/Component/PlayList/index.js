


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
                 
                <li className='info'>
                  <i className="fa-brands fa-itunes-note i-color"></i>
                  
                  { 'Title : ' + prevState.title}

                </li>
                <li className='info'><i className="fa-solid fa-microphone i-color"></i>

                  {'Singer : ' +  prevState.singer}

                </li> 
                <li className='info'><i className="fa-solid fa-l i-color"></i>

                  Lyric : {prevState.availableLyrics ? 'Available' : 'Comming Soon...'}

                </li>

                <button onClick={() => playSongF(prevState)}><i className="fa-solid fa-circle-play i-hover" style={
                  {
                    padding:'2px 40px',
                    fontSize:'18px',                                     
                  }
                }></i></button>       
                    

              </div>

          )))}
          

        </ul>
    </div>}
    </>)
  )}