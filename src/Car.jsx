import {useState} from 'react'

function Car(){
 const [car,setCar] = useState({year:2024, 
                                color:"White" , 
                                type:"Toyota"})
    function changeYear(event){
       setCar(car =>({...car, year: event.target.value}))
    }
    function changeColor(event){
       setCar(car=>({...car, color: event.target.value}))
    } 
    function changeType(event){
       setCar(car=>({...car, type:event.target.value}))
    }
        return(
        <>
            <p>My car is {car.year} {car.color} 
            {car.type}</p>
            <input type="number" value={car.year} 
            onChange ={changeYear}/><br/>
            <input type ="text" value ={car.color}
            onChange ={changeColor}/><br/>
            <input type = "text" value ={car.type} 
            onChange={changeType}/>
        </>
            
        )
}

export default Car