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
import img0011 from "./assets/images/0011.png";
import img0012 from "./assets/images/0012.png";
import img0013 from "./assets/images/0013.png";
import img0014 from "./assets/images/0014.png";
import img0015 from "./assets/images/0015.png";
import img0016 from "./assets/images/0016.png";
import img0017 from "./assets/images/0017.png";
import img0018 from "./assets/images/0018.png";
import img0019 from "./assets/images/0019.png";
import img0020 from "./assets/images/0020.png";
import img0021 from "./assets/images/0021.png";
import img0022 from "./assets/images/0022.png";
import img0023 from "./assets/images/0023.png";
import img0024 from "./assets/images/0024.png";
import img0025 from "./assets/images/0025.png";
import img0026 from "./assets/images/0026.png";
import img0027 from "./assets/images/0027.png";
import img0028 from "./assets/images/0028.png";
import img0029 from "./assets/images/0029.png";
import img0030 from "./assets/images/0030.png";
import img0031 from "./assets/images/0031.png";
import img0032 from "./assets/images/0032.png";
import img0033 from "./assets/images/0033.png";
import img0034 from "./assets/images/0034.png";
import img0035 from "./assets/images/0035.png";
import img0036 from "./assets/images/0036.png";
import img0037 from "./assets/images/0037.png";
import img0038 from "./assets/images/0038.png";
import img0039 from "./assets/images/0039.png";
import img0040 from "./assets/images/0040.png";
import img0041 from "./assets/images/0041.png";
import img0042 from "./assets/images/0042.png";
import img0043 from "./assets/images/0043.png";
import img0044 from "./assets/images/0044.png";
import img0045 from "./assets/images/0045.png";
import img0046 from "./assets/images/0046.png";
import img0047 from "./assets/images/0047.png";
import img0048 from "./assets/images/0048.png";
import img0049 from "./assets/images/0049.png";
import img0050 from "./assets/images/0050.png";

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
  img0011,
  img0012,
  img0013,
  img0014,
  img0015,
  img0016,
  img0017,
  img0018,
  img0019,
  img0020,
  img0021,
  img0022,
  img0023,
  img0024,
  img0025,
  img0026,
  img0027,
  img0028,
  img0029,
  img0030,
  img0031,
  img0032,
  img0033,
  img0034,
  img0035,
  img0036,
  img0037,
  img0038,
  img0039,
  img0040,
  img0041,
  img0042,
  img0043,
  img0044,
  img0045,
  img0046,
  img0047,
  img0048,
  img0049,
  img0050,
];

const createImageSlides = (images) => {
  return images.map((image, index) => ({
    title: `Image ${index + 1}`,
    src: image,
  }));
};

export const picsumImages = createPicsumSlides(generateRandomDimensions(50));
export const imageFiles = createImageSlides(localImages);
export const qaImages = qaAssets.slice(0, 50).map((asset, index) => ({
  title: `Image ${index + 1}`,
  src: asset.src,
}));
