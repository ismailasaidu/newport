import arrow from "../../img/arrow.png";
import down from "../../img/down.png";
import styles from "./about.module.css";
import linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import twitter from "../../img/twitter.png";
import email from "../../img/email.png";
import behance from "../../img/behance.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={arrow}
            onClick={() => {
              navigate("/");
            }}
          />
          <p
            style={{ color: "white" }}
            onClick={() => {
              navigate("/");
            }}
          >
            profile
          </p>
        </div>
        <div style={{ display: "flex", gap: "80px" }} className={styles.nxt}>
          <button
            style={{
              width: "137.31px",
              height: "46.62px",

              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            ABOUT
          </button>
          <button
            style={{
              width: "137.31px",
              height: "46.62px",

              borderRadius: "20px",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/archieves");
            }}
          >
            ARCHIEVES
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {" "}
          <p style={{ color: "white" }}>RESUME</p>
          <a href="abdul.png " download>
            <img src={down} />
          </a>
        </div>
      </div>
      <div className={styles.mid}>
        <div>
          <h1>ABOUT</h1>
        </div>
        <div>
          <p>
            Abdull loves creativity and is passionate about design, art and
            colors. He loves to<br></br> create delightful and intuitive
            designs. <br></br>
            <br></br>I believe in creating a fully interactive and engaging
            experience in the digital<br></br> world. I am highly flexible and
            adaptable when it comes to different projects<br></br>
            and freelance work.<br></br>
            <br></br>
            Why i love designing? Design has been part of me since my
            child-hood. I’m so <br></br>passionate about creativity and I love
            solving creative problems. I love my work <br></br>and I love
            design.
          </p>
        </div>
      </div>
      <div className={styles.last}>
        <p>let's Connect:</p>
        <img
          src={instagram}
          alt="pic"
          style={{ width: "25px", height: "25px" }}
          onClick={() => {
            window.open("https://www.instagram.com/lo.ne.r");
          }}
        />
        <img
          src={twitter}
          alt="pic"
          style={{ width: "25px", height: "25px" }}
          onClick={() => {
            window.open("https://twitter.com/teddiesux");
          }}
        />
        <img
          src={behance}
          alt="pic"
          style={{ width: "25px", height: "25px" }}
          onClick={() => {
            window.open("https://behance.net/abdullsaidu");
          }}
        />
        <img
          src={linkedin}
          alt="pic"
          style={{ width: "25px", height: "25px" }}
        />
        <img
          src={email}
          alt="pic"
          style={{ width: "25px", height: "25px" }}
          onClick={() => {
            window.open("https://abdulsaidu0@gmail.com");
          }}
        />
      </div>
    </div>
  );
};

export default About;
