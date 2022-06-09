import { useRef } from "react";
import styles from "./Carousel.module.scss";
import Image from "next/image";

const Carousel = (props) => {
  let text = props.text;
  let serviceImages = [];
  console.log(text);
  for (let index = 1; index <= 5; index++) {
    serviceImages.push({
      src: "/service" + index + ".jpg",
      heading: text["CardHeading" + index],
      text: text["CardIntro" + index],
    });
  }
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
