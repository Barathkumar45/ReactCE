// import logo from './pic.jpg';
// import './App.css';


// function App() {
  //   return (
    //     <div className="App">
    //     <img src={logo} alt="logo" />
    //       {/*<header className="App-header">
    //         <p>
    //           Edit <code>src/App.js</code> and save to reload.
    //         </p>
    //         <a
    //           className="App-link"
    //           href="https://reactjs.org"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Learn React
    //         </a>
  //   </header>*/}
//   <h1>I am Barathkumar</h1>
//     </div> 
//   );
// }

// export default App;

// import React from 'react'

// export default function App() {
  //   return (
    //     <div>
    //       <form>
    //       <center>
    //       <h2>REGISTRATION FORM</h2>
    //       <br></br>
    //       <label>FIRST NAME </label>
    //       <input type="text"></input>
    //       <br></br>
    //       <br></br>
    //       <label>LAST NAME </label>
    //       <input type="password"></input>
    //       <br></br>
    //       <br></br>
    //       <label>DATE OF BIRTH  </label>
    //       <input type="text"></input>
    //       <br></br>
    //       <br></br>
    //       <label>ADDRESS  </label>
    //       <input type="text"></input>
    //       <br></br>
    //       <br></br>
    //       <label>EMAIL ID </label>
    //       <input type="text"></input>
    //       <br></br>
    //       <br></br>
    //       <label>GENDER</label>
    //       <input type="radio" name='a'/>MALE
    //       <input type="radio" name='a'/>FEMALE
    //       <br></br>
    //       <br></br>
    //       <input type="submit"></input>
    //       </center>
    //       </form>
    //     </div>
    //   )
    // }
    
    
// import ClassComponent from "./Component/ClassComponent.js";
// import FunctionalCom from "./Component/FunctionalCom.js";
// export default function App() {
//   return (
//     <div>
//         <FunctionalCom/>
//         <ClassComponent/>
//     </div>
//   )
// }

// import React from 'react'
// import PropsFunctional from './Day4/PropsFunctional'
// import PropsFunctionalEx1 from './Day4/PropsFunctionalEX1'
// import StateClassCom from './Day4/StateClassCom'
// import StateFunction from './Day4/StateFunction'
// import StateHoldobject from './Day4/StateHoldObject'
// import Parent from './Day4/ParentChildCommunication'
// import DynamicRendering from './Day4/DynamicRendering'
// import TwoWayBinding from './Day4/TwoWayBinding'
// import DefaultProps from './Day4/DefaultProps'
// import ArrowProps from './Day4/ArrowProps'


// export default function App() {
//   return (
//     <div>
//       <PropsFunctional name="barathkumar" college="SKCT" age="18" />
//       <PropsFunctionalEx1 college="SKCT" location="CBE"/>
//       <StateClassCom/>
//       <StateFunction/>
//       <StateHoldobject/>
//       <Parent/>
//       <DynamicRendering/>
//       <TwoWayBinding/>
//       <DefaultProps/>
//       <ArrowProps place="Madurai"/>
//     </div>
//   )
// }
import React from 'react'
// import ErrorBoundary from './Day 8/ErrorBoundary'
// import Car from './Day 8/Car'
//import TryCatch from './Day 8/TryCatch'
import LifeCycle from './Day 8/ComponentLifeCycle'


export default function App() {
  return (
    <div>
      {/* <ErrorBoundary>
        <Car carName="JCB"></Car>
      </ErrorBoundary> */}
      {/* <TryCatch fruit="alagesh"></TryCatch> */}
      <LifeCycle/>
      
    </div>
  )
}
