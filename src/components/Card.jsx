import "./card.css";
import React,{useReducer} from "react";
import Item from "./items";
import {products} from "./products";
import {UseGlobalContext} from "./ContextCard";


const cart = () => {
  const {item,totalAmount,totalItem}=UseGlobalContext();
  return (
    <div className='Card'>
      <div className="CardWrapper">
        <div className="Topbar">
          <div className="Logo">
            <i class="fa-solid fa-arrow-left"></i>
          </div>
          <span className='Topbarheading'>Continue Shopping</span>
        </div>
        <div className="TopbarImg">
          <i class="fa-solid fa-cart-shopping"></i>
          <div className="topround">
            <span className='TopNo'>2</span>
          </div>
        </div>
      </div>
      <section className='cart'>
        <h1 className="cartInfo">Shopping Cart</h1>
        <div className="cartdes">You have {totalItem} items in shopping cart</div>
        <div className="cartsection">
          {item.map((it)=>{
            return(
              <Item key={it.id} {...it}/>
            )
          })}
          
        </div>
        <div className="carttotal"> Cart Total: <span className="cartr"> {totalAmount} </span>rs</div>
      </section>
    </div>
  )
}

export default cart;
