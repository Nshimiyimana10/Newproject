import {useState} from 'react';
import React from 'react'

export default function NewBrand() {

    const [shoes, setShoes] =useState([]);
    const[year, setYear] =useState(new Date().getFullYear())
    const[model, setModel] = useState("");
    const [owner, setOwner] = useState("");

    const MyShoes =()=>{
        
    }

    function yearChange(event){
      setYear(event.target.value)
    }
    function modelChange(event){
       setModel(event.target.value)
    }
    function ownerChange(event){
      setOwner(event.target.value)
    }
  return (
    <div>
        <h2>This is our brand</h2>
      <input type = "number" placeholder ={year}/><br/>
      <input type = "text" placeholder ="Enter a model"/><br/>
      <input type = "text" placeholder ="Enter an owner"/><br/>
      <button>Add</button><br/>
    </div>
  )
}
