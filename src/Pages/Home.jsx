import React, { useContext } from 'react'
import { ContextData } from '../ContextApi/Context'

const Home = () => {
    const Data = useContext(ContextData)
  return (
    <div>Home  {Data.Name }</div>
  )
}

export default Home