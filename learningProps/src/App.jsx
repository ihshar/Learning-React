import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'

function App() {
  const mainObj=[{
    name: "Himanshu",
    age:21,
    location:"Delhi",
    Occupation:"Software Engineer"
  }, 
  {
    name: "YooMan",
    age:18,
    location:"Hyderabad",
    Occupation:"Studing in College"
  }]
  let name;
  for(let i=0;i<mainObj.length;i++){
    name = mainObj[i].name;
  }

  return (
    <>
      <Cards username = {name} 
      />
      <Cards username = {name}/>
    </>
  )
}

export default App
