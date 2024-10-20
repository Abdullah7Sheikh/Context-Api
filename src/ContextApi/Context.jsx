import React, { createContext } from 'react'

export const ContextData = createContext()
const Context = ({children}) => {
 
    const username = {
        Name:"abdullah",
        Age:23,
        Class:"9c"
    };

  return (
    <div>
        <ContextData.Provider value={username}>
            {children}
        </ContextData.Provider>


    </div>
  )
}

export default Context