import {useState, useEffect} from 'react'

function HandleChange(){
    const [text, setText] = useState("love");

    useEffect(() =>{
    console.log('The component is mounting')},[])


    return(
        <>
        <button>Submit</button>
        <input onChange ={(event) =>
            setText(event.target.value)
        }/>
        <h3>{text}</h3>
        </>
    )
}

export default HandleChange