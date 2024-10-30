// 1) import the react and reactDOM libraries
import React from 'react'; // Library that defines what a component is and how to multiple component work together

import ReactDOM from 'react-dom/client';// Library that knows how to get a component and show up in the browser 
import App from './App';
//2) get reference to the div with ID root 
const el = document.getElementById('root');

//3) tell react to take control of that element 
const root = ReactDOM.createRoot(el);

//4)create A component 
// function App() {
//     let massage = 'Bye there'
//     if (Math.random() > .05) {
//         massage = ' Hello There';
//     }
//     return <h1>{massage}</h1>;// the curly breaces here is important that part tell react to find that variable and displayed 
//     //!any time we want to print out string or number if you try to sign a bolaan of try or object or array react will take what inside and displayed
// }

//5) show the component on the screen 
root.render(<App/>);