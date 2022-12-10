import { useState } from "react";
import styles from "./main.module.css";

import Marquee from "react-fast-marquee";
import linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import twitter from "../../img/twitter.png";
import email from "../../img/email.png";
import behance from "../../img/behance.png";
import { useNavigate } from "react-router-dom";
import down from "../../img/down.png";
import ReactCurvedText from "react-curved-text";

const Main = () => {
  const [show, setshow] = useState(true);
  const navigate = useNavigate();

  return (
    <div>
      <section style={{ height: "fit-content" }}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div></div>
          </div>
          <div className={styles.right}>
              <h1>ABDULLAHI SAIDU</h1>
          </div>
        </div>

        <div className={styles.under}>
          <div>
            <p>Based in Kaduna, Nigeria</p>
          </div>
          <div>
            <p>+234-909-546-142-7</p>
            <p>+234-802-061-561-3</p>
          </div>
        </div>
        <div className={styles.nxt}>
          <div>
            <button
              onClick={() => {
                navigate("/about");
              }}
            >
              ABOUT
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                navigate("/archieves");
              }}
            >
              ARCHIVES
            </button>
          </div>
          <div>
            <a href="abdul.pdf" download>
              RESUME
            </a>
            <a href="abdul.pdf" download>
              <img src={down} />
            </a>
          </div>
        </div>
        <div className={styles.slider}>
          <Marquee speed={200} gradient={false}>
            <div style={{ marginLeft: "350px" }}>
              <h1>UX/UI DESIGNER</h1>
            </div>
            <div style={{ marginLeft: "350px" }}>
              <h1>NO CODE DEVELOPER</h1>
            </div>
          </Marquee>{" "}
        </div>
        <div style={{ position: "relative" }}>
          <div className={styles.last}>
            <div>
              <p>let's Connect:</p>
              <img
                src={instagram}
                alt="pic"
                style={{ width: "25px", height: "25px" }}
                onClick={() => {
                  // window.open("https://instagram.com/lo.ne.r_");
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
            <div>
              <span className={styles.spin}>
                <ReactCurvedText
                  text="-Let's create magic-  connect -"
                  width={142}
                  height={142}
                  cx="70"
                  cy="70"
                  rx={50}
                  ry={50}
                  // startOffset={20}
                  textPathProps={{ fill: "#fff" }}
                  reversed={true}
                  textProps={{ style: { fontSize: "26", color: "white" } }}
                  // tspanProps={{ dy: "-20" }}
                />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
