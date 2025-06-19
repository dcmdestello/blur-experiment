import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./Carousel2.css";

const Carousel2 = ({ onSlideChange, slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
  });
  const [activeSlideImage, setActiveSlideImage] = useState(
    slides[0]?.src || ""
  );

  useEffect(() => {
    if (emblaApi) {
      const handleSelect = () => {
        if (!emblaApi.slidesInView().length) return;
        const selectedSlideIndex = emblaApi.selectedScrollSnap();
        if (selectedSlideIndex < 0 || selectedSlideIndex >= slides.length)
          return;

        console.log(
          "VVV slides[selectedSlideIndex]",
          selectedSlideIndex,
          slides,
          slides[selectedSlideIndex]
        );

        const activeImage = slides[selectedSlideIndex].src;
        setActiveSlideImage(activeImage);
        onSlideChange(activeImage);
      };

      // Initial call to set the background for the first slide
      handleSelect();

      // Listen for slide changes
      emblaApi.on("select", handleSelect);
      emblaApi.on("settle", handleSelect); // Also update on settle for smoother UX

      // Clean up event listeners on component unmount
      return () => {
        emblaApi.off("select", handleSelect);
        emblaApi.off("settle", handleSelect);
      };
    }
  }, [emblaApi, onSlideChange, slides]);

  console.log("VVV activeSlideImage", activeSlideImage);

  return (
    <>
      {/* Carousel-level blurred background */}
      <div className="embla embla2" ref={emblaRef}>
        <div className="embla2__container">
          {slides.map((slide) => (
            <div className="embla2__slide" key={slide.title}>
              <img
                loading="lazy"
                className="embla2__slide__img"
                src={slide.src}
                alt={slide.title}
              />
            </div>
          ))}
        </div>
        <div
          className="carousel2-background"
          style={{ backgroundImage: `url(${activeSlideImage})` }}
        ></div>
      </div>
    </>
  );
};

export default Carousel2;
