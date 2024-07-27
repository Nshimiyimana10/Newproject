import {useState} from 'react'
function ColorChange(){
    const [myColor,setMyColor] = useState('blue');
    
    return(
    <>
      <h1>Color is changing</h1>
      <button onClick ={() =>{
        setMyColor("green")
        
      }}>changeColor</button>
      <p style ={{color: myColor}}>
        <pre>We only achieve our goal
         By being determined
         In whatever we do daily
         And by working in a team
     </pre>   
     </p>
     
    </>
    )
}

export default ColorChange