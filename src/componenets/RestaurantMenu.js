 import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
 import {MENU_API} from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";


   const RestaurantMenu=() =>{
    const [resInfo,setResInfo]=useState(null);
   const {resId}=useParams();

   const [showIndex,setshowIndex]=useState(0);

   const dummy="dummy  data";


   useEffect(()=>{
     fetchMenu();
   },[]);

   const fetchMenu=async()=>{
    const data =await fetch(MENU_API+resId);
    const json=await data.json();
     setResInfo(json.data);
   };

  // const resInfo = useRestaurantMenu(resId);
   
  // const RestaurantMenu=() =>{
     
  //    const {resId}=useParams();
  //    const resInfo=useRestaurantMenu(resId);


   if (resInfo===null) return <Shimmer/>;
  const {name, cuisines, costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
   
    const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

   

   const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>c.card?.["card"]?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
   );

  //  console.log(categories);


  return (
    <div className=" text-center">
     <h1 className=" font-bold my-6 text-2xl">{name }</h1> 
     <p className=" font-bold text-lg">
      {cuisines.join(", ")}- {costForTwoMessage}
     </p>

     { /*Categories accordian */}
     {categories.map((category,index)=>(
      // Controlled Component
      <RestaurantCategory key={ category?.card?.card.title} data={category?.card?.card}
        showItems={index==showIndex ? true:false}
      setshowIndex={()=>setshowIndex(index)}
      dummy={dummy}

      />
     )
     )

     }
     
    </div>
  );
};
export default RestaurantMenu;