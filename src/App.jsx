import React, { useState } from "react";
import MultiRangeSlider from "./pages/RangeSlider";

function App() {
  const [rangeValues, setRangeValues] = useState({ min: 0, max: 100 });

  const handleRangeChange = (values) => {
    setRangeValues(values);
  };

  return (
    <>
      <div className="w-full h-screen bg-neutral-950 text-neutral-400 space-y-16 py-16 flex items-center justify-center flex-col">
        {/* <h1 className="text-3xl text-neutral-300 font-medium">Custom Price Range Slider</h1> */}
        <MultiRangeSlider
          min={200}
          max={1000}
          onChange={handleRangeChange}
        />
      </div>
    </>
  );
};


export default App
