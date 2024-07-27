import React,{useState} from 'react'

export default function MyProducts() {
    const [item, setItem] = useState({
        industry:"Apple",
        model:"iPhone 15 Max Pro",
        year: 2024,
        quality:"high quality"

    })
    const industryHandleChange=(event)=>{
     setItem((item)=>({...item, industry:event.target.value}))
    };
    const modelHandleChange=(e)=>{
        setItem((item)=>({...item, model:e.target.value}))
       }
       const yearHandleChange=(e)=>{
        setItem((item)=>({...item, year:e.target.value}))
       }
       const qualityHandleChange=(e)=>{
        setItem((item)=>({...item, quality:e.target.value}))
       }
  return (
    <div>
        <h3>This is my phone types</h3>
        <input type ="text" placeholder ="Industry" 
        onChange ={industryHandleChange}/><br/>
        <input type ="text" placeholder ="Model"
        onChange={modelHandleChange}/><br/>
        <input type ="number" placeholder ="Year" 
        onChange={yearHandleChange}/><br/>
        <input type ="text" placeholder= "Quality"
        onChange={qualityHandleChange}/><br/>
        <p>This is a {item.model} from &nbsp;{item.industry} &nbsp;
            fabricated in {item.year} &nbsp;
            with {item.quality}</p>
    </div>
  )
}
