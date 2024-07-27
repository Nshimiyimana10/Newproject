import React,{useState, useEffect} from 'react'

function ResizeTitle(){
const [width, setWidth] = useState(window.innerWidth);
const [height, setHeight] = useState(window.innerHeight);
const [color, setColor] = useState("orange")

function handleSize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setColor(color === "orange" ? "blue": "green")
}
useEffect(() =>{
   window.addEventListener("resize",handleSize )
})

useEffect(() =>{
    document.title = `window size is 
    (${width +5}*${height + 5})px with ${color} color`
},[width, height,color])
    return(
        <div>
          <p style ={{color: color}}>The width is: {width}</p>
          <p style ={{color: color}}>The height is: {height}</p>
        </div>
    )
}

export default ResizeTitle