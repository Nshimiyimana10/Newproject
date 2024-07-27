function MyJob(props){
    return(
        <>
    <ul>{
      <li>
        <h3>{props.salary}</h3>
        <h3>{props.position}</h3>
        <h3>{props.company}</h3>
      </li>}
    </ul>
        
        </>
    )
}

export default MyJob