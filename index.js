import React from 'react'
import ReactDOM from 'react-dom'

console.log("React", React);
console.log("ReactDOM", ReactDOM);

const heading1 = React.createElement("h1",{className :"heading1"},"Kolkatta Knight Riders");
const heading2 = React.createElement("h1",{className :"heading2"},"Mumbai Indians");

const container1 = React.createElement("div",{className :"container"},heading1, heading2);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container1);