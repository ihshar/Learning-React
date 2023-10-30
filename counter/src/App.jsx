import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(true)

  const AddValue = () => {
    if(counter<20){
      setCounter(counter+1);
      console.log(counter);
    }

  }
  
  const removeValue = () => {
    if(counter>0){
      setCounter(counter-1);
      console.log(counter);
    }
  }

  return (
    <>
      <div>
      {counter}
      </div>
      <button onClick={AddValue}>
        Add Value
      </button>
      <button onClick={removeValue}>
        Remove Value
      </button>
    </>
  )
}

export default App
