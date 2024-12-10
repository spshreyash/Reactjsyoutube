import  { Fragment } from "react";
// import NetFlixCart  from "./components/NetFlixCart"   // this si default import note: without curly braces 
  // import {NetFlixCart} from "./components/NetFlixCart"    // this is name ing import note curly braces is mandatory 
  // import NetFlixCart,{ Footer } from "./components/NetFlixCart";  // cobine impoet 

  import NetFlixCart  from "./components/cart";
  const App1=()=>{
    return(
       <Fragment>
         {/* <> */}
          <NetFlixCart />
          
          
          {/* </> */}
          </Fragment>
    );
   };

 
  export default App1;



 
