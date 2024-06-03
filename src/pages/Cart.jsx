import { useEffect, useState } from "react";
import CartItem from "../components/CartItem"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Cart = () => {

const {cart}=useSelector((state)=>state);
const[totalAmount,setTotalAmount]=useState(0);
useEffect( ()=>{
  setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0))
},[cart])

  return(
    <div className="flex flex-row  h-full w-full justify-end">
      {
        cart.length> 0?
        (<div  className="flex  h-full w-full">
          <div>
          {
          cart.map((item,index)=>{
          return  <CartItem key={item.id} item={item} itemindex={index}/>
          }
          )}
   </div>
          <div className="">

        
            <div className=" mt-[80px]  text-xl ml-[200px] ">
              <div className="text-green-600 p-2 font-semibold">Your Cart</div>
              <div className="text-green-600 p-2 font-semibold">Summary</div>
              <p className="text-green-600 p-2 font-semibold">
                <span>Total items{cart.length}</span>
              </p>
              </div>
              <div>
              <p className="text-green-600  p-3 text-xl font-semibold ml-[200px]">
                <span>Total Amount:{totalAmount} </span>
              </p>
              <button className="bg-green-500 rounded-md p-4 ml-[200px] text-white" >
                Check it Now
              </button>
            </div>
            </div>
          </div>):
          (
            <div>
              <h1 className="text-green-600 font-semibold">Cart empty</h1>
              <NavLink to={"/"}>
                <button>
                      Shop Now
                </button>
              </NavLink>

              </div>
          )
}
</div>
)
}
          
          
export default Cart;
