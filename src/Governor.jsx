import React, {useState, createContext} from 'react';
import Mayor from './Mayor.jsx';
export const patriotismContext = createContext();

function Governor(){
    const[patriotism, setPatriotism] = useState("Love country")
    return(
        <div className ="leader">
            <h2 className ="head">Governor</h2>
        <h5>Governor needs to pass the message to the executive secretary of the cell</h5>
        <patriotismContext.Provider value ={patriotism}>
           <Mayor />
        </patriotismContext.Provider>
       
        </div>
    )
}

export default Governor