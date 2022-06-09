import styles from "./About.module.scss";
import pic from "../public/aboutImage.png";
import pic2 from "../public/planning.jpg";
import Link from "next/link";
import parser from "react-html-parser";
import Image from "next/image";
const About = (props) => {
  let { sections } = props.text;
  return (
    <div className={styles.aboutcontainer}>
      <div className={styles.aboutus}>
        <h1>{parser(sections[0].Heading)}</h1>
        <h5 id={styles.abt3}> {parser(sections[0].SubHeading1)} </h5>
        <div className={styles.abouttxt}>
          <h3>{parser(sections[0].SubHeading2)}</h3>
          <h5>{parser(sections[0].Intro1)}</h5>
          <h5>{parser(sections[0].Intro2)}</h5>

          <button className={styles.button}>
            <Link href="/services">
              <a>{parser(sections[0].Button)}</a>
            </Link>
          </button>
        </div>
      </div>
      {/* Experience Section */}
      <div className={styles.column2}>
        <div className={styles.aboutImage}>
          <Image src={pic} objectFit="cover" layout="fill" />
        </div>
        <div className={styles.row}>
          <div>
            <h1>{parser(sections[1].TrustedClients)}</h1>
            <h4>Trusted Clients</h4>
          </div>
          <div>
            <h1>{parser(sections[1].FinishedProject)}</h1>
            <h4>Finished Project</h4>
          </div>
          <div>
            <h1>{parser(sections[1].YearsOfExperience)}</h1>
            <h4>Years Of Experience</h4>
          </div>
        </div>
      </div>

      {/* Social Section */}

      <div className={styles.social}>
        <div className={styles.thought}>
          <p>{parser(sections[2].Quote)}</p>
          <p className={styles.author}>
            &quot;{parser(sections[2].Author)}&quot;
          </p>
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
            <p>{parser(sections[3].Heading)}</p>
            <h3>{parser(sections[3].SubHeading)}</h3>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.icons}>
              <Image src={"/icon_phone.png"} layout={"fill"} />
            </div>
            <div className={styles.info}>
              <h3>{parser(sections[3].CallHeading)}</h3>
              <p>{parser(sections[3].Number)}</p>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.icons}>
              <Image src={"/icon_mail.png"} layout={"fill"} />
            </div>
            <div className={styles.info}>
              <h3>{parser(sections[3].MailHeading)}</h3>
              <p>{parser(sections[3].Mail)}</p>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.icons}>
              <Image src={"/icon_location.png"} layout={"fill"} />
            </div>
            <div className={styles.info}>
              <h3>{parser(sections[3].AddressHeading)}</h3>
              <p>{parser(sections[3].Address)}</p>
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
