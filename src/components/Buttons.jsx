import React from 'react'

function Buttons({categories , handleClick}) {

  return (
    <div className='btn-wrapper'>
      {categories.map((category , i)=>{
        return <button onClick={()=>handleClick(category)} key={i}>{category}</button>
      })}
    </div>
  )
}

export default Buttons