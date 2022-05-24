import styles from "./Service.module.scss";
// import ReactPlayer from "react-player";
import Image from "next/image";

const serviceArr = [
  {
    src: "/renovation.jpg",
    heading: "RENOVATION",
    intro:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum magnam ratione ex",
  },
  {
    src: "/roofing.jpg",
    heading: "ROOFING",
    intro:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum magnam ratione ex",
  },
  {
    src: "/flooring.jpg",
    heading: "FLOORING",
    intro:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum magnam ratione ex",
  },
  {
    src: "/masonry.jpg",
    heading: "MASONARY",
    intro:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum magnam ratione ex",
  },
  {
    src: "/plastering.jpg",
    heading: "PLASTERING",
    intro:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum magnam ratione ex",
  },
];

const Service = () => {
  return (
    <div className={styles.ourservices}>
      <div className={styles.service}>
        <h1>OUR SERVICES</h1>
        <div className={styles.subHeading}>
          <div className={styles.hammer}></div>
          <h5 id={styles.abt}> WHAT WE CAN DO FOR YOU </h5>
        </div>

        <div id={styles.abt2}>
          <h3>
            Hey guys, have a look at my work and designs on my website.
            <br />
            Don&apos;t forget to look into my previous project.
          </h3>
          <p style={{ marginTop: `50px` }}>
            We basically provide five types of services i.e., Renovation,
            Plastering, Masonry, Flooring and Roofing. We are proud to deliver
            projects which meets the present day needs for housing and
            infrastructurewithout compromising the ability of future
            generations.
            <br />
            We believe each commercial building renovation project must be
            planned and executed carefully.
          </p>
          <p>
            We basically provide five types of services i.e., Renovation,
            Plastering, Masonry, Flooring and Roofing. We are proud to deliver
            projects which meets the present day needs for housing and
            infrastructurewithout compromising the ability of future
            generations.
            <br />
            We believe each commercial building renovation project must be
            planned and executed carefully.
          </p>
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
