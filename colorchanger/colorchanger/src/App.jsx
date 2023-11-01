import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('white');

  function changeColor(){
    setColor(color)
  }
  return (
    <div className='bg-black w-full h-screen duration-200'
    style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12
      insert-x-0 px-2 border'>
        <button onClick={()=>setColor("red")} className='flex flex-wrap justify-center gap-3 shadow-lg bg-white'>Red</button>
        <button onClick={()=>setColor("olive")} className='flex flex-wrap justify-center gap-3 shadow-lg bg-white'>Olive</button>
        <button onClick={()=>setColor("blue")} className='flex flex-wrap justify-center gap-3 shadow-lg bg-white'>Blue</button>
        <button onClick={()=>setColor("green")} className='flex flex-wrap justify-center gap-3 shadow-lg bg-white'>Green</button>
      </div>
    </div>
  )
}

export default App
