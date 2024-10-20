import React from 'react'

import Home from "./Pages/Home"
import Contex from './Pages/Contex'
import Context from './ContextApi/Context'
import About from './Pages/About'

const App = () => {
  return (
    <>
    <Context>
      
    <Home />
    <About />
    <Contex />
    </Context>

    </>
  )
}

export default App