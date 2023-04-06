// stylesheet
import "./App.css";
import AllContextPlug from "./components/AllContext";

// components
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <AllContextPlug>
        <Card />
      </AllContextPlug>
    </div>
  );
}

export default App;
