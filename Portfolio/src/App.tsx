import { Routes, Route } from "react-router-dom";
import Portfolio from "./scenes/Portfolio";
import Music from "./scenes/Music"


function App() {

  return (
    <Routes>
      <Route path = "/" element = {<Portfolio/>}/>
      <Route path = "/music" element = {<Music/>}/>

    </Routes>
  )
}

export default App
