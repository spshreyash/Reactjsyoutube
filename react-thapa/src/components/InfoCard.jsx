  // import style from "../components/"
  import styles from "../components/netflix.module.css"; 
export const InfoCard = (prop) => {
  // console.log(prop);
  const { id,img_url,name,rating,description,genre,watch_url }=prop.data;

  //  if i want insert inline css then we put inline css like js object 
  //  2ways 1st u dirct put style={{ ur proptirs}}
   // 2ns way intailize this object use this  variable 
     const btn={
      border: "none",
      outline: "none",
      width: "200px",
      padding: "8px",
       fontWeight: "bold",
       backgroundColor: `${rating>=8.4 ?  "#7dcea0" :" #d0d014"}`,
       color: "black",
      
       borderRadius: "12px",
       marginBottom: "12px",
       cursor: "pointer",
       
       
     }
     
     
  return (
    
    // <li className="flex2">
    <li className={styles.flex2}>
      <div className={  styles.img1}>
        <img src={img_url} alt=""  />
      </div>

      <h1> Name :{name}</h1>
      <h3 >Rating: 
        <span className={ ` ${styles.rating} ${rating>=8.4 ?  styles["super-hit"]:styles.avg}`}>
           
          {rating}</span></h3>

      <p> Summary : {description};</p>
      <p> Story:{genre}</p>

      <a href={watch_url} target="_blank">
        <button style={btn}> Watch now</button>
      </a>
    </li>
  );
};


// react  destructuring    {prop.curntElment.} this line repet multiple time ok so use destructuring 