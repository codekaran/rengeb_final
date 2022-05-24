import { useRef } from "react";
import styles from "./Carousel.module.scss";
import Image from "next/image";
let serviceImages = [
  {
    src: "/service1.jpg",
    heading: "RENNOVATION",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reprehenderit iure quis quisquam hic ea laudantium.",
  },
  {
    src: "/service2.jpg",
    heading: "ROOFING",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reprehenderit iure quis quisquam hic ea laudantium.",
  },
  {
    src: "/service3.jpg",
    heading: "FLOORING",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reprehenderit iure quis quisquam hic ea laudantium.",
  },
  {
    src: "/service4.jpg",
    heading: "FLOORING",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reprehenderit iure quis quisquam hic ea laudantium. ",
  },
  {
    src: "/service5.jpg",
    heading: "FLOORING",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reprehenderit iure quis quisquam hic ea laudantium. ",
  },
];

const Carousel = (props) => {
  return (
    <div ref={props.setRef} className={styles.imageSection}>
      {serviceImages.map((image, index) => (
        <div key={index} className={styles.image}>
          <Image src={image.src} layout={"fill"} />
          <div className={styles.overlay}>
            <div className={styles.content}>
              <h1>
                <span>0{index + 1}</span>
                {image.heading}
              </h1>
              <p>{image.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
