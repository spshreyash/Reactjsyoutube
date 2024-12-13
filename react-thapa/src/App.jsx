// import  { Fragment } from "react";
// import NetFlixCart  from "./components/NetFlixCart"   // this si default import note: without curly braces 
  // import {NetFlixCart} from "./components/NetFlixCart"    // this is name ing import note curly braces is mandatory 
  // import NetFlixCart,{ Footer } from "./components/NetFlixCart";  // cobine impoet 

    
  //   import styles from './components/netflix.module.css' 
  // import NetFlixCart  from "./components/cart";
  // const App1=()=>{
  //   return(
     
  //        <section className="container"> 
  //         <NetFlixCart />
  //          </section> 
        
  //   );
  //  };

    import {Add,Mult,Sub } from "./components/Add" ;
    // import {Mult} from "./components/Add" ;
   
    const App1=()=>{
      return(
          <>
            <ul>
              <li>the sum is {Add(2,3)}</li>
              <li> the multi Multiplication is {Mult(3,4)}</li>
              <li> the subtraction is {Sub(10,4)}</li>
            </ul>
          </>
       );
     }
  export default App1;



 
