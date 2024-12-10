// component   
import Data  from "../api/Data.json"
import { InfoCard } from "./InfoCard"
    // const NetFlixCart=()=>
    // {
       
    //      return(
    //         <ul>
    //         {Data .map((curntElment)=>
    //             {
                   
    //               return(  
    //               <li key={curntElment.id}>
    //               <div>
    //                            <img src={curntElment.img_url} alt=""  width="40%" height="40%" />
    //               </div>
    //                         <h1> Name :{curntElment.name}</h1>          
    //                           <h3>Rating:{curntElment.rating}</h3>        
    //                            <p> Summary : {curntElment.description};</p>
    //                            <p> Story:{curntElment.genre}</p> 
        
    //                            <a href={curntElment.watch_url} target="_blank">
        
    //                             <button> Watch now</button>
    //                            </a>
    //                   </li>
    //               );    
                  
    //             })}
    //              </ul>
        
    //      );
    // };

     const NetFlixCart=()=>
     {
        return(
            <ul>
                {
                    Data.map((curntElment)=>
                    {
                         return(
                         <InfoCard key={curntElment.id} curntElment={curntElment} />
                         
                         );
                         console.log(curntElment);
                    })
                }
            </ul>
        )
     }
  
  
export default   NetFlixCart;    


