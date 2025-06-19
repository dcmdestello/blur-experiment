import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./Carousel4.css";

const Carousel4 = ({ onSlideChange, slides, lazyLoading }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
      const handleSelect = () => {
        if (!emblaApi.slidesInView().length) return;
        const selectedSlideIndex = emblaApi.selectedScrollSnap();
        onSlideChange(slides[selectedSlideIndex].src);
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

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide) => (
          <div className="embla__slide" key={slide.title}>
            <img
              className="embla4__slide__background-blur"
              src={slide.src}
              alt=""
              {...(lazyLoading && { loading: "lazy" })}
            />
            <img
              className="embla__slide__img"
              src={slide.src}
              alt={slide.title}
              {...(lazyLoading && { loading: "lazy" })}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel4;
