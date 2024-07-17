import { useState } from "react";
const User =({name})=>{
  const[count]=useState(0);
  const[count2]=useState(2);
   
  

  return(
    <div className="user-card">
    <h2> Count={count}</h2>
    <h2> Count={count2}</h2>
    <h2>Name : {name}</h2>
    <h2>Location : Bhopal</h2>
    <h2>Contact : prashantkumarsingh07pks@gmail.com</h2>

    </div>
  );
};
export default User;