import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
//import user to pass down data from  user object (props) 
//import user from "../data/user";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
//console.log(user);


//app pass down prop of bio (info from user.js)to About component
function App() {
  return (
    <div>
      <NavBar />
      <Home name={ user.name } city={ user.city } color={ user.color }/>
      <About bio={ user.bio } links={ user.links }/>
    </div>
  );
}

export default App;


//In App, pass down data from user object as props to the Home component 
// (starter code in home component to give props clue)
// App should pass the github and linkedin links to the About, so About can pass those 
// props to the link component created
