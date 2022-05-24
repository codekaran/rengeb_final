import styles from "./Contact.module.scss";
import pic2 from "../public/planning.jpg";

import Image from "next/image";
const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.section1}>
        <h1>Contact Us</h1>
        <h3>LET&apos;S CONNECT</h3>
        <h2>
          Drop us your message and we will back to you as soon as possible
        </h2>
        <div className={styles.form}>
          <div className={styles.row1}>
            <label>First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="First Name"
              required
            />
            <label>Email Address</label>
            <input
              type="text"
              id="email"
              name="lastname"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className={styles.row2}>
            <label>Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Last Name"
              required
            />

            <label>Phone Number</label>
            <input
              type="digit"
              id="phone"
              name="phonenumber"
              placeholder="Your Phone Number"
              required
            />
          </div>
        </div>
        <div className={styles.row3}>
          <label>Message</label>
          <textarea
            id={styles.message}
            name="Write here"
            placeholder="Write here..."
            required
          ></textarea>
          <button type="submit" value="Send Message">
            Send Message
          </button>
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
    </div>
  );
};

export default Contact;
