import React, { useContext } from 'react'
    import { ContextData } from '../ContextApi/Context'



const About = () => {

    const Data = useContext(ContextData)
    console.log(Data)
  return (
    <div>About {Data.Age}</div>
  )
}

export default About