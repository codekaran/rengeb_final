import styles from "./About.module.scss";
import pic from "../public/aboutImage.png";
import pic2 from "../public/planning.jpg";

import Image from "next/image";
const About = () => {
  return (
    <div className={styles.aboutcontainer}>
      <div className={styles.aboutus}>
        <h1>ABOUT US </h1>
        <h5 id={styles.abt3}> WHO WE ARE </h5>
        <div className={styles.abouttxt}>
          <h3>
            Hey guys, have a look at my work and designs on my website.
            <br />
            Don&apos;t forget to look into my previous project.
          </h3>
          <h5>
            We basically provide five types of services i.e., Renovation,
            Plastering ,Masonry ,Flooring and Roofing. We are proud to deliver
            projects which meets the present day needs for housing and
            infrastructurewithout compromising the ability of future
            generations.
            <br />
            We believe each commercial building renovation project must be
            planned and executed carefully.
          </h5>
          <h5>
            We basically provide five types of services i.e., Renovation,
            Plastering ,Masonry ,Flooring and Roofing. We are proud to deliver
            projects which meets the present day needs for housing and
            infrastructurewithout compromising the ability of future
            generations.
            <br />
            We believe each commercial building renovation project must be
            planned and executed carefully.
          </h5>

          <button className={styles.button}>View Our Services</button>
        </div>
      </div>
      {/* Experience Section */}
      <div className={styles.column2}>
        <div className={styles.aboutImage}>
          <Image src={pic} objectFit="cover" layout="fill" />
        </div>
        <div className={styles.row}>
          <div>
            <h1>350+</h1>
            <h4>Trusted Clients</h4>
          </div>
          <div>
            <h1>215+</h1>
            <h4>Finished Project</h4>
          </div>
          <div>
            <h1>15+</h1>
            <h4>Years Of Experience</h4>
          </div>
        </div>
      </div>

      {/* Social Section */}

      <div className={styles.social}>
        <div className={styles.thought}>
          <p>
            With Destruction <br />
            Comes <a>RENOVATION</a>
          </p>
          <p className={styles.author}>&quot;Willy Lamb&quot;</p>
        </div>
      </div>
      {/* Contact Us Section */}
      <div className={styles.followus}>
        <div className={styles.sheer1}></div>
        <div className={styles.sheer2}></div>
        <h3>Follow us on</h3>

        <div className={styles.Sicons}>
          <div className={styles.icons}>
            <Image src={"/facebook_i.png"} layout="fill" />
          </div>
          <div className={styles.icons}>
            <Image src={"/insta_i.png"} layout="fill" />
          </div>
          <div className={styles.icons}>
            <Image src={"/linkedin_i.png"} layout="fill" />
          </div>
          <div className={styles.icons}>
            <Image src={"/twitter_i.png"} layout="fill" />
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.connect}>
          <div className={styles.heading}>
            <p>KEEP IN TOUCH</p>
            <h3>
              LET&apos;S START A FRUITFUL <br /> CONVERSATION.
            </h3>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.icons}>
              <Image src={"/icon_phone.png"} layout={"fill"} />
            </div>
            <div className={styles.info}>
              <h3>Call Us 24/7</h3>
              <p>(+1)800-600-2323</p>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.icons}>
              <Image src={"/icon_mail.png"} layout={"fill"} />
            </div>
            <div className={styles.info}>
              <h3>Mail Us 24/7 </h3>
              <p>Info@rengebxweb.co.in</p>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.icons}>
              <Image src={"/icon_location.png"} layout={"fill"} />
            </div>
            <div className={styles.info}>
              <h3>Visit Us 24/7</h3>
              <p>
                {" "}
                1508 North Street, <br />
                AustinTexas,US
              </p>
            </div>
          </div>
        </div>

        <div className={styles.cimage}>
          <Image
            src={pic2}
            width={450}
            height={630}
            style={{
              marginTop: "8%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
