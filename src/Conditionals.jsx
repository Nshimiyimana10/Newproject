function Conditionals(){
    const isGray = false
    return(
    <>
    <h3>{isGray ?<h4 style={{color:"white", 
         backgroundColor:"gray",
        fontFamily:"cursive"}}
        > Congratulations!you made it</h4>:<h4 
        style={{color:"black", backgroundColor:"green",
    fontFamily:"sans-serif"}}>
        The color is changed!</h4>}
    </h3>
    </>
    )
}

export default Conditionals