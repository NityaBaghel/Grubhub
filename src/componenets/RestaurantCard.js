import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
  const {restData}=props;
  const { cloudinaryImageId,name,avgRating,cuisines,costForTwo,sla,}=restData?.info;
return(
  <div className=" p-4 m-4 w-[250px] h-[500px] rounded-lg bg-gray-100 hover:bg-gray-200" >
    <img  alt ="" 
    className=" rounded-lg h-44 w-[220px]"
    src={ CDN_URL + cloudinaryImageId}/> 
     <h3 className="font-bold py-4 text-lg">{name}</h3>
    <h5>{cuisines.join(" , ")}</h5>
    <h5>{avgRating} stars</h5>
    <h5>{costForTwo} </h5>  
    <h5>{sla?.slaString}  </h5>  
  </div>
);
};

// higher order component
export default RestaurantCard;