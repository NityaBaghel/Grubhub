import { useState } from "react";
import ItemList from "./itemList";

const RestaurantCategory=({data,showItems,setshowIndex,dummy})=>{
  const handleClick=()=>{
    setshowIndex();
  };

//  const [showItems,setShowItems]=useState(false);

//  const handleClick=()=>{
//    setShowItems(!showItems);
// };
 

  return (<div>
  {/* Header*/}
  <div className="w-6/12 my-4 mx-auto bg-gray-50 shadow-lg p-4">
  <div className="flex justify-between cursor-pointer" onClick={handleClick}>
    <span className=" font-bold text-lg">{data.   title} ({data.itemCards.length})</span>
    <span>⬇️</span>
    </div>
   {showItems && <ItemList items={data.itemCards}  dummy={dummy}/>}
  </div>
  </div>
  );
};
export default RestaurantCategory;