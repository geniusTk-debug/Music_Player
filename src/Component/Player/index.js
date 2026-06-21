import React from 'react';
import './index.css';
export default function Player() {

    
  return (
    <div className='player-conponent'>
        <div>Duration</div>
        <div>Progress</div>
        <div className='control-container'>
            <i className='control'>Play</i>
            <i className='control'>Pause</i>
            <i className='control'>Previous</i>
            <i className='control'>Next</i>
        </div>
    </div>
  )
}
