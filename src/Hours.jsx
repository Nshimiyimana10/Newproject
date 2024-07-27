function Hours(props){
    if(props.arriving)
   return(
    <p>Congratulations! You arrived on time like  
      {props.name}</p>
      )
      else{
        <p>If you do it again you will be
           {props.punishment}</p>
      }
      
      }
    ;
      
  
  export default Hours