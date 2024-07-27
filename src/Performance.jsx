import React from 'react'

export default function Performance() {

    const classA = [{id:1,Name: 'Joanes', Marks: 80, grade:'A'},
                    {id:2,Name: 'Jack', Marks: 75, grade:'B'},
                    {id:3,Name: 'Ben', Marks: 60, grade:'C'},
                    {id:4,Name: 'Willy', Marks: 48, grade:'E'}]
    
    const classB= [{id:5,Name: 'Roben', Marks: 90, grade:'A'},
                   {id:6,Name: 'Cheal', Marks: 55, grade:'C'},
                   {id:7,Name: 'Kenny', Marks: 40, grade:'E'},
                   {id:8,Name: 'Sarah', Marks: 78, grade:'B'}]
     const classes = classA.concat(classB); 
     const allClasses = classes.map(list =>
     <li key ={list.key}><b>Name:</b>
     {list.Name}&nbsp;,<b>Marks:</b>{list.Marks}:&nbsp;<b>Grade:</b>{list.grade}
     
     
    
     </li>)
        
  return (
    <div>
    <h2>This is students record</h2>
    {allClasses}
    </div>
  )
}
