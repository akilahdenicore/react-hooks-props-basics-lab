import React from "react";
import Links from "./Links";

//conditional rendering for bio

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* If a prop of bio is not passed down,
       or if bio is an empty string, don't display the <p> tag
      */}

{props.bio && props.bio.length > 1? <p>{props.bio}</p> : null }

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
  {/* added link component below */}
      <Links github ={props.links.github} linkedin={props.bio.linkedin} />
    </div>
  );
}

export default About;


//update About:
      // -prop of bio is passed , displayed inside a <p>
      // -if prop pf bio is passed down, or bio = empty String, don't display p tag 
      // by conditional rendering (ternary expression)?
      