function Fruits(){
    const lists = [
    
    {id:1,name:"orange", level:"fair"},
    {id:2,name:"banana",level:"good"},
    {id:3,name:"pineaple",level:"best"},
    {id:4,name:"mango",level:"excellent"}
    ]
    lists.sort((a,b)=>a.name.localeCompare(b.name))
    const newList = lists.map(list =><li 
        key={list.id}>{list.name}:&nbsp;<strong>{list.level}</strong>
        </li>)
    return(
    <>
        <h1>This is my fruit list</h1>
        <ul>{newList}</ul>
    </>
        )
}
export default Fruits