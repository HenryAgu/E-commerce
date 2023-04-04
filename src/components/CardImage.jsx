import React, { useState } from "react";

// stylesheet
import "../scss/CardImage.css";

// assets
import image1 from "../assets/image-product-1.jpg";
import image2 from "../assets/image-product-2.jpg";
import image3 from "../assets/image-product-3.jpg";
import image4 from "../assets/image-product-4.jpg";

import thumb1 from "../assets/image-product-1-thumbnail.jpg";
import thumb2 from "../assets/image-product-2-thumbnail.jpg";
import thumb3 from "../assets/image-product-3-thumbnail.jpg";
import thumb4 from "../assets/image-product-4-thumbnail.jpg";

const CardImage = () => {
  const [mainImage, setmainImage] = useState(image1);

  const firstThumHandler = () => {
    setmainImage(image1);
  };

  const secondThumbHandler = () => {
    setmainImage(image2);
  };

  const thirdThumbHandler = () => {
    setmainImage(image3);
  };

  const fourthThumbHandler = () => {
    setmainImage(image4);
  };
  return (
    <>
      <div className="card_image" onClick={()=>setOpenModal(!openModal)}>
        <div className="main_image">
          <img src={mainImage} alt="" />
        </div>
        <div className="thumb_images">
          <img src={thumb1} alt="" onClick={firstThumHandler} />
          <img src={thumb2} alt="" onClick={secondThumbHandler} />
          <img src={thumb3} alt="" onClick={thirdThumbHandler} />
          <img src={thumb4} alt="" onClick={fourthThumbHandler} />
        </div>
      </div>
    </>
  );
};

export default CardImage;
