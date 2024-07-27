import React, {useContext} from 'react'
import {patriotismContext} from './Governor.jsx'


function ExecutiveCell(){
    const patriotism = useContext(patriotismContext)
    return(
        <div className = "Cell">
            <h3 className ="head">Executive Cell</h3>
             <h4>It is our duty to {patriotism}</h4>
        </div>
    )
}

export default ExecutiveCell