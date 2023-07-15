import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

export default function ProgressBarComp({progPercent}) {
  return (
    <div>
        <div className='progress-container'>
          <p>Progress: </p>
          <ProgressBar 
            completed={progPercent} 
            className='progress-bar'
          />
        </div>
    </div>
  )
}
