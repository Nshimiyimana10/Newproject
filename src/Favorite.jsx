import PropTypes from 'prop-types'

function Favorite(props){
  
    return(
    <>
      <p>My first favorite food is {props.fav1}</p>
      <p>My second favorite food is {props.fav2}</p>
      <p>My third favorite food is {props.fav3}</p>
      <p>My fourth favorite food is {props.fav4}</p>
      <p>Let me say that {props.isPreferred ?
        "The meal of today was so delicious!":
     "No problem, i can try this also"}
      </p>
    </>
    );

}
Favorite.propTypes= {
fav1:PropTypes.string, 
fav2:PropTypes.string,
fav3:PropTypes.string,
fav4:PropTypes.string,
isPreferred:PropTypes.bool,
}

Favorite.defaultProps = {
  name:"Joanes",
  punishment: "Beaten"
}

export default Favorite