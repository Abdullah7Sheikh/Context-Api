import React, { useContext } from 'react'
import { ContextData } from '../ContextApi/Context'




const Contex = () => {
    const Data = useContext(ContextData)
  return (
    <div>Contact = {Data.Class}</div>
  )
}

export default Contex