function Tasks(props){
    const category= props.category
    const activity = props.activities
    const dailyAct = activity.map(task =><li 
        key ={task.id}>{task.name}:&nbsp;<strong>{task.day}</strong>
        </li>)
        return(
            <>
            <h3>{category}</h3>
            <ul>{dailyAct}</ul>
            </>
        )
}
export default Tasks