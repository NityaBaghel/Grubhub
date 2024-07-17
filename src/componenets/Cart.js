 import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart=()=>{

//  how do will i add my card items ? yes by subscribing again using useSelector

  const cartItems=useSelector((store)=>store.cart.items);

  const dispatch=useDispatch();
  const handleClearCart=()=>{
    dispatch(clearCart());
  }

  return <div className="text-center m-4 p-4">
  <h1 className="text-2xl font-bold">Cart</h1>
   {/* showing my cart items  */}
  <div className="w-6/12 m-auto">

   <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>

   {cartItems.length==0 && <h1>Cart is empty . Add items to the card</h1>}

   <ItemList items={cartItems} />
  </div>
  </div>
};
export default Cart;