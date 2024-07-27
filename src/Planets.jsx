function Planets(){
   const myPlanets =[
    {name :"Earth", isGasPlanet: false},
    {name :"Mars", isGasPlanet: false},
    {name :"Jupiter", isGasPlanet: true},
    {name :"Venus", isGasPlanet: false},
    {name :"Neptune", isGasPlanet: true},
    {name :"Uranus", isGasPlanet: true}
   ]
 return(
    <>
    <h2>These are gas planets</h2>
    {myPlanets.map((planet => {if(planet.isGasPlanet) 
    return <h3>{planet.name}</h3>}))}

    </>
 )
}

export default Planets