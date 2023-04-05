import { useState } from "react";

// stylesheet
import "./App.css";

// components
import Card from "./components/Card";

import image1 from "./assets/image-product-1.jpg";

// Context
import { AllContext } from "./components/AllContext";

function App() {
  const [counter, setCounter] = useState(1);
  const [bonusAmount, setBonusAmount] = useState(125);
  const [amount, setAmount] = useState(250);

  const [mainImage, setmainImage] = useState(image1);
  return (
    <div className="App">
      <AllContext.Provider
        value={{
          counter,
          setCounter,
          bonusAmount,
          setBonusAmount,
          amount,
          setAmount,
          mainImage,
          setmainImage
        }}
      >
        <Card />
      </AllContext.Provider>
    </div>
  );
}

export default App;
