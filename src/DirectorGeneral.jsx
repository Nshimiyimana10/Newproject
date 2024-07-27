import React, {useState, createContext} from 'react';
import SalesOperator from './SalesOperator.jsx';
export const winnerAwardContext = createContext()
function DirectorGeneral(){

const [winnerAward,setWinnerAward] = useState("Get 10k USD coz you're the best")
    return(
        <div className ="DirectorGen">
            <h2 className ="Canal-Box">Director General</h2>
            <h4>I would like to give an award 
            to the best performer in Canal Box Sales</h4>
            <winnerAwardContext.Provider value ={winnerAward}>
                <SalesOperator/>
            </winnerAwardContext.Provider>
            
        </div>
    )
}

export default DirectorGeneral;