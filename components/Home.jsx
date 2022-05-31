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

const Home = () => {
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
            <h1>
              Hello, I&apos;m <span>Rengeb</span>
            </h1>
            <h3>Professional Renovator</h3>
            <p>
              Hey guys, have a look at my work and designs on my website.
              <br></br>
              Don&apos;t forget to look into my previous project
            </p>
            <div>
              <button className={styles.button}>
                <Link href="/contact">Contact Us</Link>
              </button>
              <button className={styles.button2}>Portfolio</button>
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
        <h1 className={styles.heading}>ABOUT US</h1>

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
            <h3>WHO WE ARE</h3>
            <h2>
              Hey guys, have a look at my work and designs on my website.
              <br />
              Don&apos;t forget to look into my previous project.
            </h2>
            <p>
              We basically provide five types of services i.e., Renovation,
              Plastering, Masonry, Flooring and Roofing. We are proud to deliver
              projects which meets the present day needs for housing and
              infrastructure without compromising the ability of future
              generations.
              <br />
              <br />
              <br />
              We believe each commercial building renovation project must be
              planned and executed carefully.
            </p>
            <button className={styles.button}>
              <Link href="/about">READ MORE</Link>
            </button>
          </div>
        </div>
      </div>
      {/* Our Service Section */}
      <div className={styles.services}>
        <h1 className={styles.heading}>our services</h1>
        <h5 style={{ textAlign: "center" }}>WHAT WE CAN DO FOR YOU</h5>
        <div
          onClick={handleScroll({ scrollDirection: -1, element: carousel })}
          className={styles.leftArrow}
        ></div>
        <div
          onClick={handleScroll({ scrollDirection: 1, element: carousel })}
          className={styles.rightArrow}
        ></div>
        <Carousel setRef={setRef}></Carousel>
      </div>
      <div className={styles.portfolio}>
        <h1>PORTFOLIO</h1>
        <h5>FINISHED PROJECTS</h5>
        <Gallery></Gallery>
      </div>
    </div>
  );
};

export default Home;
