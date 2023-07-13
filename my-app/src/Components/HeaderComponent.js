import React from 'react'
import './HeaderComponent.css'

export default function HeaderComponent({morningPic, timePeriod,date}) {
  return (
    <>
        <div className='header-box'style={{ backgroundImage: `url(${morningPic})` }}>
        <div className='date-container'>
          <p>{timePeriod}</p>
          <p>{date}</p>
        </div>
      </div>
    </>
  )
}
