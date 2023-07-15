import React from 'react'
import './HeaderComponent.css'

export default function HeaderComponent({backgroundImg, timePeriod,date}) {
  return (
    <>
        <div className='header-box'style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className='date-container'>
          <p>{timePeriod}</p>
          <p>{date}</p>
        </div>
      </div>
    </>
  )
}
