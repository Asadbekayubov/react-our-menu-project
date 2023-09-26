import React from 'react'
import data from '../data'

function Cards({data}) {
  return (
    <ul className='menu-list'>
        {data.map((item)=>{
            return <li key={item.id} className='menu-item'>
                <img className='menu-img' src={item.img} alt="" />
                <div>
                    <h2 className='menu-title'>{item.title}</h2>
                    <p>${item.price}</p>
                </div>
                <p className="menu-text">{item.desc}</p>
            </li>
        })}
    </ul>
  )
}

export default Cards