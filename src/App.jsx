import React, { useState } from 'react'
import data from "./data"
import "./main.css"
import Buttons from './components/Buttons'
import Cards from './components/Cards'

const AllCategories = ['All' , ...new Set(data.map(item => item.category))]

function App() {

  const [newData , setNewData] = useState(data)

  function handleClick(param){
    if(param === "All"){
      setNewData(data)
    }else{
      const filteredData = data.filter((item)=> {
        return item.category === param
      })
      setNewData(filteredData)
    }
  }
 
  return (
    <main className='App'>
        <h1 className='title'>Our Menu</h1>
        <Buttons categories={AllCategories} handleClick={handleClick}/>
        <Cards data={newData}/>
    </main>
  )
}

export default App