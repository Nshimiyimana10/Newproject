function Click(){
    const clickedButton = (name) =>
        console.log(`${name} clicked me`)
    return(
        <>
        <h1>This is clicked button</h1>
        <button onClick ={()=>clickedButton("Joanes")}>click me</button>
        </>
    )
}

export default Click 