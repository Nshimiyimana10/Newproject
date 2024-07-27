import React,{useState} from 'react'

export default function MyList() {
    const [nations, setNations] = useState(["Rwanda", 
        "Burundi", "Uganda","Tanzania"]);

        function handleNationAdd(){
            const newNation =document.getElementById("my-nation").value;
                   document.getElementById("my-nation").value =""
            setNations(nations => [...nations,newNation])
        }
        function handleRemoveNation(index){
           setNations(nations.filter((element,i) =>i==!index))
          
        }

  return (
    <>
    <h3>Those are the nations</h3>
    <ul>
       {nations.map((nation, index)=>
        <li key = {index } onClick ={() =>handleRemoveNation(index)}>
            {nation}</li>
       )}
    </ul>
    <input type="text" id ="my-nation"placeholder="Enter a nation"/>
    <button onClick ={handleNationAdd}>Add nation</button>
    </>
  )
}
