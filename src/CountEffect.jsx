import {useState,useEffect} from 'react'

function CountEffect(){
    const [count, setCount] = useState(0)
    const [phrase, setPhrase] = useState("")

    function addCount(){
        setCount(count => count + 1)
    }

    function substractCount(){
         setCount(count => count -1
         )
    }

    function PhraseChange(){
        setPhrase("I LIKE FRONT END WEB DEV")
        
    }
    useEffect(() =>{

        console.log(count)
        document.title = `My count is: ${count} ${phrase}`
        setPhrase("I like it")
        setPhrase(`${count} is my count & I LIKE FRONT END WEB DEV`)

    },[count])
    return(
        <div>
            <button onClick ={addCount}>Add</button>
            <button onClick ={substractCount}>Substract</button>
            <button onClick={PhraseChange}>phraseChange</button>
            <p>My count is: {count}</p>
            <h3>{phrase}</h3>
        </div>
    )
}

export default CountEffect