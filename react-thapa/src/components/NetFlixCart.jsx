// component   
    const NetFlixCart=()=>
    {
       let age =20;
     const name="Got";
     const Rating=5.2;
     const content="Game  new  of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, a series of fantasy novels by George R. R. Martin, the first of which is A Game of Thrones. The show premiered on HBO in the United States on April 17, 2011, and concluded on May 19, 2019, with 73 episodes broadcast over eight seasons."
  
    //   function 
    const returnfunction=()=>
      {
         const story=" Thriler";
     return story;
      }
      
    // function for  condtional statement 
    const canWatch=()=>
     {
           if(age>=18) return " wantch now"
            return " not watch";
     }
  
         return(
          <div>
          <div>
                       <img src="GOT1.jpg" alt=""  width="40%" height="40%" />
          </div>
                    <h1> Name :{name}</h1>          {/*  // dynamic value i can pass variables  */}
                      <h3>Rating:{6+3.2}</h3>         {/*  // dynamic value i can pass Expression   */}
                       <p> Summary : {content};</p>
                       <p> Story:{returnfunction()}</p> {/*  // dynamic value i can pass function  */}
                        <button>{canWatch()}</button>
          </div>
         );
    };
  
  
// export default   NetFlixCart; ...0    // this  default export 


export const Footer=()=>
{
    return  <h2> CopyWrite @shreyash pawar </h2>
    
}

// now in this component i use 2 componenet and  one is here default export and one is nameing export so its an combine export 