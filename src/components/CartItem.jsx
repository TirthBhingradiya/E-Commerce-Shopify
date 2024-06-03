import React from "react";
import { useDispatch } from "react-redux";
import {remove }from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";
import {FcDeleteDatabase} from "react-icons/fc"





const CartItem = ({item,itemindex}) => {
const dispatch=useDispatch();

const removeFromCart=()=>{
  dispatch(remove(item.id));
  toast.success("Item removed from Cart");
}

  return (
  <div className="flex flex-col">
     <div className=" h-full w-full border-black  flex  mt-20 ml-14 flex-row  rounded-xl outline ">
  <div className="w-[500px] h-1/2">
    <div className="h-[190px] w-[200px] items-center ml-[170px]">
    <img src={item.image} className="h-full w-full flex-col flex items-center justify-center"></img>
    </div>
    <div className= "flex justify-between gap-5 items-center w-full mt-5  flex-col">
      <h1 className="text-black ml-10 text-1xl font-italic  text-xl ">{item.title}</h1>
      <h1 className="text-black  gap-10 ml-8 text-[15px] font-italic  opacity-60">{item.description}</h1>
    </div>
    <div>
      <p className="text-green-600 text-2xl ml-8 font-semibold">${item.price}</p>
      <div onClick={removeFromCart}>
      <FcDeleteDatabase/>
      </div>

      </div>
    </div>
  </div>
  </div>
  

  )
};

export default CartItem;
