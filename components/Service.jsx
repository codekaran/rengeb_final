import styles from "./Service.module.scss";
// import ReactPlayer from "react-player";
import Image from "next/image";
import parser from "react-html-parser";

const Service = (props) => {
  let { sections } = props.text;
  const images = [
    "/renovation.jpg",
    "/roofing.jpg",
    "/flooring.jpg",
    "/masonry.jpg",
    "/plastering.jpg",
  ];
  const serviceArr = [];
  let text = sections[1];
  for (let index = 1; index <= 5; index++) {
    serviceArr.push({
      src: images[index - 1],
      heading: text["CardHeading" + index],
      intro: text["CardIntro" + index],
    });
  }
  return (
    <div className={styles.ourservices}>
      <div className={styles.service}>
        <h1>{parser(sections[0].Heading)}</h1>
        <div className={styles.subHeading}>
          <div className={styles.hammer}></div>
          <h5 id={styles.abt}> {parser(sections[0].SubHeading1)} </h5>
        </div>

        <div id={styles.abt2}>
          <h3>{parser(sections[0].SubHeading2)}</h3>
          <p style={{ marginTop: `50px` }}>{parser(sections[0].Intro1)}</p>
          <p>{parser(sections[0].Intro2)}</p>
        </div>
      </div>
      <div className={styles.videoContainer}>
        <iframe
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          width="100%"
          height={"100%"}
        ></iframe>
        {/* <ReactPlayer
          className={styles.videoplayer}
          url="https://www.youtube.com/embed?v=GwXjdZNkCR0"
          width="100%"
          height="100%"
        /> */}
      </div>
      <div className={styles.contactus}>
        <div className={styles.sheer1}></div>
        <div className={styles.sheer2}></div>
        <h3>
          Do you want to renovate <br /> your house or offices ?
        </h3>
        <div className={styles.cbutton}>
          <button>Contact Us</button>
        </div>
      </div>
      {/* Services Section */}

      <div className={styles.services}>
        {serviceArr.map((item, index) => (
          <div key={index} className={styles.serviceType}>
            <Image src={item.src} objectFit="cover" layout="fill"></Image>
            <div className={styles.content}>
              <h1>0{index + 1}</h1>
              <h1 style={{ fontWeight: `700` }}>{item.heading}</h1>
              <h2>{item.intro}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
