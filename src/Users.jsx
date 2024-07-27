function Users(){
    const userIds =
       [
        {name :'Joanes', age:27},
        {name: 'Peter', age :28},
        {name: 'Quintus', age : 30},
        {name: 'Ben', age:18} 
       ]
    return(
        <>
        <h1>This is user Infos</h1>
        <h2>{userIds.map((userId, index) =>{
            return(
        <h3 key ={index}>{userId.name} is &nbsp; 
        {userId.age} years old</h3>
        )})}
        </h2>
        
        </>
    )
}

export default Users