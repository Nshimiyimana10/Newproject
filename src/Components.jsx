import React,{useState} from 'react'

function Components(){
    const[name, setName] =useState("Joanes")
    const[age, setAge] =useState(5)
    const[isDevelopper, setIsDevelopper] = useState(false)
    const dateName = () => {
        setName("Quintus")}
    const newAge = () =>{
        setAge(age*2)}
    const workStatus = () =>{
        setIsDevelopper(!isDevelopper)
    }
    
    
    return(
        <>
        <p>My name is:{name}</p>
        <button onClick ={dateName}>Name</button>
        <p>His age is:{age}</p>
        <button onClick ={newAge}>AgeBtn</button>
        <p>Are you a Dev?:{isDevelopper ? "Congz!" : "Don't worry"}</p>
        <button onClick ={workStatus}>workBtn</button>
        </>
    )
}
export default Components