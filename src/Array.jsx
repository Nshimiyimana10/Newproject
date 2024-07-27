import {useState} from 'react'

function Array(){
    const[hobbies, setHobbies] = useState(
                               ["playing", "reading", 
                               "navigating","coding"])
        
      function addHobby(){
        const newHobby = document.getElementById
        ("hobbyList").value;
        document.getElementById.value= "";

        setHobbies(hobbies =>[...hobbies, newHobby])
        
      }

      function removeHobby(index){
        setHobbies(hobbies.filter((element,i) => i!==index))
      }
    
    return(
    <>
        <h2>This is my hobbies list</h2>
        <ul>
         {
         hobbies.map((hobby,index) =><li
          key ={index}onClick = {()=>removeHobby(index)}>
            {hobby}</li>)
         }
        </ul>
        <input type = "text" id="hobbyList" 
        placeholder ="Add your Hobby"/>
        <button onClick ={addHobby}>Add</button>
    </>
    )
    
}

export default Array
