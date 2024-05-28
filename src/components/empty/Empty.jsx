import React from 'react'
import emptyImg from "../../assets/emptyImg.png"
import './Empty.scss'

const Empty = () => {
  return (
    <section className='empty'>
        <div className="container empty__img">
            <img src={emptyImg} alt="empty" />
        </div>
    </section>
  )
}

export default Empty
