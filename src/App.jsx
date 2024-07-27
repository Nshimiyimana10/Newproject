
import Header from './Header.jsx'
import Button from './Button.jsx'
import Favorite from './Favorite.jsx'
import Hours from './Hours.jsx'
import Fruits from './Fruits.jsx'
import Programme from './Programme.jsx'
import Tasks from './Tasks.jsx'
import Click from './Click.jsx'
import Components from './Components.jsx'
import Counter from './Counter.jsx'
import Car from './Car.jsx'
import Array from './Array.jsx'
import MyJob from './MyJob.jsx'
import Conditionals from './Conditionals.jsx'
import Users from './Users.jsx'
import Planets from './Planets.jsx'
import ColorChange from './ColorChange.jsx'
import HandleChange from './HandleChange.jsx'
import ComponentA from './ComponentA.jsx'
import Governor from './Governor.jsx'
import CountEffect from './CountEffect.jsx'
import ResizeTitle from './ResizeTitle.jsx'
import DirectorGeneral from './DirectorGeneral.jsx'
import Destructuring from './Destructuring.jsx';
import MyPic from './MyPic.jsx';
import Performance from './Performance.jsx';
import MyProducts from './MyProducts.jsx';
import MyList from './MyList.jsx';
import NewBrand from './NewBrand.jsx';

function App() {
const civilTasks = [{id:1, name :"fond", day:"Tuesday"},
                    {id:2, name :"supretive", day:"Tuesday"},
                    {id:3, name :"paternity", day:"Thursday"},
                    {id:4, name :"pretrial", day:"Friday"},
                   ]

const penalTasks = [{id:5, name :"detention", day:"Monday"},
                    {id:6, name :"fond", day:"Wednesday"},
                    {id:7, name :"plea bargaining", day:"Monday"},
                    {id:8, name :"free", day:"Wednesday"},
]

  return(
     <>
       <Header />
       <Button />
       <Favorite fav1="rice" fav2="supergettes" 
       fav3 ="irish potatoes" fav4 = "fresh peas" 
       isPreferred = "rice"/>
       <Hours arriving = "Before noon"
        name = "Jackson" punishment = "fired"/>
       <Hours arriving ="Afternoon" name = ""
         punishment ="" />
       <Fruits />
       <Programme category = "Civil matters"
        activities = {civilTasks}/>
       <Tasks category = "Criminal matters"
        activities = {penalTasks}/>
        <Click />
        <Components />
        <Counter />
        <Car />
        <Array />
        <MyJob salary ={90000} position= "Junior FED" 
        company ="Canal-Box" />
        <MyJob salary ={100000} position= "Mid-Level FED" 
        company ="Amazon" />
        <MyJob salary ={120000} position= "Senior FED" 
        company ="Netflix" />
        <Conditionals />
        <Users />
        <Planets />
        <ColorChange />
        <HandleChange />
        <ComponentA />
        <Governor />
        <CountEffect />
        <ResizeTitle/>
        <DirectorGeneral />
        <Destructuring name ='Joanes' 
        text ='Is a front-end Dev!'/>
        <MyPic/>
        <Performance/>
        <MyProducts/>
        <MyList />
        <NewBrand />   

     </>
  )
}

export default App;



