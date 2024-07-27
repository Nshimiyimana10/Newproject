import React,{useState, createContext} from 'react';
import ComponentB from './ComponentB.jsx';
export const userContext = createContext();

function ComponentA(){
const [user, setUser] = useState("Joanes")
    return(
        <div className ="boxDiv">
          <h1>ComponentA</h1>
          <h3>Say Hi to {user}</h3>
          <userContext.Provider value ={user}>
          <ComponentB user ={user} />
          </userContext.Provider>
         
        </div>
    )
}

export default ComponentA