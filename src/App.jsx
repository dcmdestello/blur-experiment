import { useState, useCallback } from "react";
import Carousel from "./components/Carousel";
import Carousel2 from "./components/Carousel2";
import Carousel3 from "./components/Carousel3";
import { picsumImages, imageFiles, qaImages } from "./data";
import "./App.css";

function App() {
  const [activeBackgroundImage, setActiveBackgroundImage] = useState("");

  const handleSlideChange = useCallback((imageUrl) => {
    setActiveBackgroundImage(imageUrl);
  }, []);

  // const slides = picsumImages;
  const slides = qaImages;

  return (
    <>
      {/* {activeBackgroundImage && (
        <div
          className="blurred-background"
          style={{ backgroundImage: `url(${activeBackgroundImage})` }}
        ></div>
      )} */}
      <div className="app-container">
        <h1>Blur Experiment</h1>
        <div>
          <p>Black background</p>
          <Carousel onSlideChange={handleSlideChange} slides={slides} />
        </div>
        <div>
          <p>Fixed carousel blur bg</p>
          <Carousel2 onSlideChange={handleSlideChange} slides={slides} />
        </div>

        <div>
          <p>Simple slide blur bg</p>
          <Carousel3 onSlideChange={handleSlideChange} slides={slides} />
        </div>
      </div>
    </>
  );
}

export default App;
