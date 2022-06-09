import styles from "./Home.module.scss";
import Image from "next/image";
import heroImage from "../public/Subtract.png";
import handleScroll from "../sub-components/SoothScroll";
import gallery from "../sub-components/gallery";
import Gallery from "../sub-components/gallery";
import Carousel from "../sub-components/Carousel";
import { useRef } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import parser from "react-html-parser";

const Home = (props) => {
  let { sections } = props.text;
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  const [carousel, setCarousel] = useState("");
  const setRef = (ref) => {
    setCarousel(ref);
    console.log(carousel);
  };
  const [objectFit, setObjectFit] = useState("contain");

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setObjectFit("contain");
    } else {
      setObjectFit("cover");
    }
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroSection}>
        <div className={styles.heroText}></div>
        {/* image part */}
        <div className={styles.imageSection}>
          {/* text part */}
          <div className={styles.text}>
            <h1 className={styles.heading}>{parser(sections[0].Heading)}</h1>
            <h3 className={styles.sub_heading}>
              {parser(sections[0].SubHeading)}
            </h3>
            <p>{parser(sections[0].Intro)}</p>
            <div>
              <button className={styles.button}>
                <Link href="/contact">
                  <a>{parser(sections[0].Button1)}</a>
                </Link>
              </button>
              <button className={styles.button2}>
                {parser(sections[0].Button2)}
              </button>
            </div>
          </div>
          <div
            // style={{ backgroundImage: `url(../public/Subtract.png)` }}
            className={styles.image}
          >
            <Image
              src={heroImage}
              placeholder="blur"
              objectFit={objectFit}
              layout="fill"
            ></Image>
          </div>
        </div>
      </div>

      {/* About us Section */}
      <div className={styles.aboutSection}>
        <h1 className={styles.heading}>{parser(sections[1].Heading)}</h1>

        <div className={styles.maincolumn}>
          <div className={styles.cardcolumn}>
            <p>
              <span>350+</span> Trusted Clients
            </p>
            <p>
              <span>215+</span>Finished Project
            </p>
            <p>
              <span>15+</span> Years Of Experience
            </p>
          </div>
          <div className={styles.aboutcolumn}>
            <h3>{parser(sections[1].SubHeading1)}</h3>
            <h2>{parser(sections[1].SubHeading2)}</h2>
            <p>
              {parser(sections[1].Intro1)}
              <br />
              <br />
              <br />
              {parser(sections[1].Intro2)}
            </p>
            <button className={styles.button}>
              <Link href="/about">
                <a>{parser(sections[1].button)}</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* Our Service Section */}
      <div className={styles.services}>
        <h1 className={styles.heading}>{parser(sections[2].Heading)}</h1>
        <h5 style={{ textAlign: "center" }}>
          {parser(sections[2].SubHeading)}
        </h5>
        <div
          onClick={handleScroll({ scrollDirection: -1, element: carousel })}
          className={styles.leftArrow}
        ></div>
        <div
          onClick={handleScroll({ scrollDirection: 1, element: carousel })}
          className={styles.rightArrow}
        ></div>
        <Carousel text={sections[2]} setRef={setRef}></Carousel>
      </div>
      <div className={styles.portfolio}>
        <h1>{parser(sections[3].Heading)}</h1>
        <h5>{parser(sections[3].SubHeading)}</h5>
        <Gallery></Gallery>
      </div>
    </div>
  );
};

export default Home;
