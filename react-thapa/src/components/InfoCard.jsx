export  const InfoCard=(prop)=>
{
    // console.log(prop);
    return(
     <li>
         
                  <div>
                               <img src={prop.curntElment.img_url} alt=""  width="40%" height="40%" />
                  </div>
                            <h1> Name :{prop.curntElment.name}</h1>          
                              <h3>Rating:{prop.curntElment.rating}</h3>        
                               <p> Summary : {prop.curntElment.description};</p>
                               <p> Story:{prop.curntElment.genre}</p> 
        
                               <a href={prop.curntElment.watch_url} target="_blank">
        
                                <button> Watch now</button>
                               </a>
                    
     </li>

    );
}