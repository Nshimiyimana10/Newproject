import React,{useContext} from 'react'
import {userContext} from './ComponentA.jsx'
function ComponentD(){

const user = useContext(userContext)
    return(
       <div className ="boxDiv">
        <h1>ComponentD</h1>
        <h3>{`It is good to meet you Mr.${user}`}</h3>

       </div>
    )
}

export default ComponentD