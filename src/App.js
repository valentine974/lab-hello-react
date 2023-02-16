// src/App.js
import "./App.css";
import iconOne from './images/icon1.png'
import iconTwo from './images/icon2.png'
import iconThree from './images/icon3.png'
import iconFour from './images/icon4.png'

import logo from './images/ironhack-logo-xs.png'
import menu from './images/menu-top-xs.png'

function App() {
  return (
    <div className="App">
      <div className="header">
        <nav> 
        <img className="image1" src={logo} alt="example" />  
        <img className="image2" src={menu} alt="example" /> 
        </nav>
        <div>
        <h1>Say Hello to React JS</h1>
        <p>You will how to use the most popular frontend library, and become a super Ninja developer</p>
        <button>Awesome!</button>

        </div>
      </div>
      <div className="body">
        <div>
        <img src={iconOne} alt="example" /> 
          <h3>Declarative</h3>
          <p>Reacts makes it painlessto create interactive UIs.</p>
        </div>

        <div>
        <img src={iconTwo} alt="example" /> 
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
        <img src={iconThree} alt="example" /> 
          <h3>Single-way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div>
        <img src={iconFour} alt="example" /> 
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
       
      </div>
    </div>
  );
}
export default App;
