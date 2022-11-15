import React from 'react';
import {UseGlobalContext} from "./ContextCard";

const items = ({id,title,description,price,img,quantity}) => {
    const {removeItem,increase,decrease}=UseGlobalContext();  
  return (<>
        <div className="cartf">
            <div className="cartImg">
              <img src={img} alt="" className="cartIm" />
            </div>
            <div className="cartname">
              <h1 className="cartdevice">{title}</h1>
              <div className="cartcolor">{description}</div>
            </div>
            <div className="cartnumber">
              <i class="fa-solid fa-minus" onClick={()=>decrease(id)}></i>
              <div className="cartno" >{quantity}</div>
              <i class="fa-solid fa-plus" onClick={()=>increase(id)}></i>
            </div>
            <div className="cartvalue">
              <span className="cartv">${price}</span>
            </div>
            <div className="cartL">
              <i class="fa-solid fa-xmark" onClick={()=>removeItem(id)}></i>
            </div>
        </div>
        <hr/>
        </>
  )
}

export default items;
