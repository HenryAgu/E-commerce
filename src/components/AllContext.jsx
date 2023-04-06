import { createContext,useState } from 'react';

import image1 from "../assets/image-product-1.jpg";

// contexts
export const AllContext = createContext()

import React from 'react'

const AllContextPlug = ({children}) => {
    const [counter, setCounter] = useState(1);
    const [bonusAmount, setBonusAmount] = useState(125);
    const [amount, setAmount] = useState(250);
  
    const [mainImage, setmainImage] = useState(image1);

    const value ={
        counter,
        setCounter,
        bonusAmount,
        setBonusAmount,
        amount,
        setAmount,
        mainImage,
        setmainImage
    }
  return (
    <AllContext.Provider value={value}>
        {children}
    </AllContext.Provider>
  )
}

export default AllContextPlug