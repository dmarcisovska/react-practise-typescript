import { useState } from 'react'

import './App.css'
import ListGroup from './components/ListGroup';
import MyButton from './components/MyButton';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <ListGroup/>
      <MyButton count={count} onClick={()=> setCount(count + 1)}/>
         <MyButton count={count} onClick={()=> setCount(count + 1)}/>
      </div>
    </>
  )
}

export default App
