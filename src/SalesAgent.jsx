import React,{useContext} from 'react';
import{winnerAwardContext} from './DirectorGeneral.jsx';

function SalesAgent(){
    const award = useContext(winnerAwardContext);
    return(
        <div className ="SalesAgent">
            <h3 className ="Canal">Sales Agent</h3>
         <p>{award}</p>
        </div>
    )
}

export default SalesAgent;