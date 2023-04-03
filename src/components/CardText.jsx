import React,{useState} from "react";

// stylesheet
import "../scss/CardText.css";

// react icons
import {IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { BsCart2 } from "react-icons/bs";

const CardText = () => {
  const [counter,setCounter] = useState(0)

  // for increase
  const handleIncrease = () =>{
    setCounter(counter + 1)
  }

  // For Decrease
  const handleDecrease = () =>{
    if(counter > 0){
      setCounter(counter - 1)
    }
  }
  return (
    <div className="card_text">
      <div className="text_header">
        <p>Sneaker Company</p>
        <h1> Fall Limited Edition Sneakers</h1>
      </div>
      <div className="text_content">
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="price_tag">
        <h3>$125.00</h3>
        <p className="discount">50%</p>
      </div>
      <span>$250.00</span>
      <div className="cart">
        <div className="cart_counter">
          <IoIosAdd className="counter_icon" onClick={handleIncrease}/>
          <p>{counter}</p>
          <GrFormSubtract className="counter_icon" onClick={handleDecrease}/>
        </div>
        <button><BsCart2/> Add to cart</button>
      </div>
    </div>
  );
};

export default CardText;
