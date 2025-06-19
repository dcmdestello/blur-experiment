import img0001 from "./assets/images/0001.png";
import img0002 from "./assets/images/0002.png";
import img0003 from "./assets/images/0003.png";
import img0004 from "./assets/images/0004.png";
import img0005 from "./assets/images/0005.png";
import img0006 from "./assets/images/0006.png";
import img0007 from "./assets/images/0007.png";
import img0008 from "./assets/images/0008.png";
import img0009 from "./assets/images/0009.png";
import img0010 from "./assets/images/0010.png";

import { qaAssets } from "./qaAssets";

const createPicsumSlides = (dimensions) => {
  return dimensions.map((dimension, index) => ({
    title: `Slide ${index + 1}`,
    src: `https://picsum.photos/seed/picsum${index + 1}/${dimension[0]}/${
      dimension[1]
    }`,
  }));
};

const generateRandomDimensions = (length) => {
  const possibleDimensions = [400, 600, 800, 1000, 1200, 1400, 1600];

  const dimensions = [];
  for (let i = 0; i < length; i++) {
    const width =
      possibleDimensions[Math.floor(Math.random() * possibleDimensions.length)];
    const height =
      possibleDimensions[Math.floor(Math.random() * possibleDimensions.length)];
    dimensions.push([width, height]);
  }

  return dimensions;
};

const localImages = [
  img0001,
  img0002,
  img0003,
  img0004,
  img0005,
  img0006,
  img0007,
  img0008,
  img0009,
  img0010,
];

const createImageSlides = (images) => {
  return images.map((image, index) => ({
    title: `Image ${index + 1}`,
    src: image,
  }));
};

export const picsumImages = createPicsumSlides(generateRandomDimensions(5));
export const imageFiles = createImageSlides(localImages);
export const qaImages = qaAssets.slice(0, 10).map((asset, index) => ({
  title: `Image ${index + 1}`,
  src: asset.src,
}));
