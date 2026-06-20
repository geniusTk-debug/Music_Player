

import './index.css';
export default function PlayList({tracks, loading}) {

  return (
    <>
    {loading && <div>loading</div>}
    {!loading && <div className='playlistComponent'>

        <ul className='playlist-container'>

          {(tracks.map(prevState => (
            
            <div className='songsList' key={prevState.id}>

                 <img className='album-cover' alt='album cover' src={prevState.img}/>
                 
                  {prevState.title}
                
                <li className='info'>{prevState.singer}</li>
                <li className='info'>{prevState.availiableLyrics}</li>           
                {prevState.availableLyrics && <li className='info'>Lyric : Available</li>}

              </div>

          )))}
          

        </ul>
    </div>}
    </>
  )}