import { useState, useCallback } from "react";
import Carousel from "./components/Carousel";
import Carousel2 from "./components/Carousel2";
import Carousel3 from "./components/Carousel3";
import { picsumImages, imageFiles, qaImages } from "./data";
import "./App.css";

function App() {
  const [_activeBackgroundImage, setActiveBackgroundImage] = useState("");
  const [selectedSlideType, setSelectedSlideType] = useState("qaImages");
  const [lazyLoading, setLazyLoading] = useState(true);

  const handleSlideChange = useCallback((imageUrl) => {
    setActiveBackgroundImage(imageUrl);
  }, []);

  const getSlides = () => {
    switch (selectedSlideType) {
      case "picsumImages":
        return picsumImages;
      case "imageFiles":
        return imageFiles;
      case "qaImages":
        return qaImages;
      default:
        return qaImages;
    }
  };

  const slides = getSlides();

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

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="slideType">Select Images Source: </label>
          <select
            id="slideType"
            value={selectedSlideType}
            onChange={(e) => setSelectedSlideType(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px" }}
          >
            <option value="picsumImages">Picsum Images</option>
            <option value="imageFiles">Project assets</option>
            <option value="qaImages">Fanbase QA Images</option>
          </select>

          <div style={{ marginTop: "10px" }}>
            <label>
              <input
                type="checkbox"
                checked={lazyLoading}
                onChange={(e) => setLazyLoading(e.target.checked)}
                style={{ marginRight: "5px" }}
              />
              Lazy Loading
            </label>
          </div>
        </div>

        <div>
          <p>Black background</p>
          <Carousel
            onSlideChange={handleSlideChange}
            slides={slides}
            lazyLoading={lazyLoading}
          />
        </div>
        <div>
          <p>Fixed carousel blur bg</p>
          <Carousel2
            onSlideChange={handleSlideChange}
            slides={slides}
            lazyLoading={lazyLoading}
          />
        </div>

        <div>
          <p>Simple slide blur bg</p>
          <Carousel3
            onSlideChange={handleSlideChange}
            slides={slides}
            lazyLoading={lazyLoading}
          />
        </div>
      </div>
    </>
  );
}

export default App;
