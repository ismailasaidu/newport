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
            Profile
          </p>
        </div>
        <div style={{ display: "flex", gap: "40px" }} className={styles.nxt}>
          <button
            style={{
              width: "137.31px",
              height: "46.62px",

              borderRadius: "30px",
              cursor: "pointer",
            }}
          >
            ABOUT
          </button>
          <button
            style={{
              width: "137.31px",
              height: "46.62px",

              borderRadius: "30px",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/archieves");
            }}
          >
            ARCHIVES
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div>
          <a href="abdul.pdf " download style={{ color: "white" , textDecoration:"none" }}>RESUME</a>
          </div>
          <div>
          <a href="abdul.pdf " download>
            <img src={down} />
          </a>
          </div>
        </div>
      </div>
      <div className={styles.mid}>
        <div>
          <h1>ABOUT</h1>
        </div>
        <div className={styles.mid_under} style={{height:"5px"}}>
         
        </div>
        <div>
          <p>
          I am an astute and self-motivated designer with a record for delivering valuable results,I possess strong UI and UX skills which I have acquired for over 2 years by delivering pixel-perfect design solutions that cover user requirements <br></br> through conducting research and collaborating with teams to define and solve users frustrations/pain points.<br></br> <br></br>

I possess a keen eye for quality design solutions, that help companies and organizations increase user retention as well as engagement.<br></br>

My Expertise Include Enterprise Design Thinking, User flow, Information Architecture Design systems, Wireframing, and Prototyping.<br></br><br></br>

Tools I use: Figma, Adobe XD, Adobe Illustrator, Photoshop, Protopie, Low-code Technologies (Webflow)

Other tools I am familiar with: Html5, CSS, Jira, Slack<br></br><br></br>
          </p>
        </div>
      </div>
      <div className={styles.last}>
        <p>Let's Connect:</p>
        <img
          src={instagram}
          alt="pic"
          style={{ width: "25px", height: "25px" }}
          onClick={() => {
            // window.open("https://www.instagram.com/lo.ne.r");
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
          onClick={() => {
            window.open("https://linkedin.com/in/abdullahi-saidu-2a5749224");
          }}
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
