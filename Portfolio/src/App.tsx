import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Portfolio from "./scenes/Portfolio"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path = "/" element = {<Portfolio/>}/>
    </Routes>
  )
}

export default App
