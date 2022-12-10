import styles from "./archieves.module.css";
import arrow from "../../img/arrow.png";
import down from "../../img/down.png";
import { useNavigate } from "react-router-dom";
import Last from "../../component/last/Last";
import leftphone from "../../img/leftphone.png";
import rightphone from "../../img/rightphone.png";
import bluephone from "../../img/bluephone.png";
import blue from "../../img/blue.png";
import black from "../../img/black.png";

const Archieves = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={arrow}
            onClick={() => {
              navigate("/");
              
            }}
            alt=""
          />
          <p style={{ color: "white" }}>Profile</p>
        </div>
        <div style={{ display: "flex", gap: "40px" }}>
          <button
           
            onClick={() => {
              navigate("/about");
            }}
          >
            ABOUT
          </button>
          <button
           
            onClick={() => {
              navigate("/archieves");
            }}
          >
            ARCHIVES
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap:"10px"}}>
          <div>
          <a href="abdul.pdf"  style={{textDecoration:"none", color:'white'}}download>
          RESUME
          </a>
          </div>
          <div>
          <a href="abdul.pdf" download>
          <img src={down} />
          </a>
          </div>
        </div>
      </div>
      <div className={styles.mid}>
        <div>
          <h1>ARCHIVES</h1>
        </div>
        <div className={styles.mid_under} style={{height:"5px"}}></div>
        <div className={styles.mid_box}>
          <div
            className={styles.container_box1}
            style={{
              backgroundImage: `url(${rightphone})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "40%",
            }}
          >
            <button className={styles.btns} onClick={()=>{
              window.open("https://www.figma.com/file/58wMQqnP8zVOXazoUigBVC/Mentorship?node-id=0%3A1&t=RTR7tw0N51nHQvzk-0")
            }}>SEE PROTOTYPE</button>
          </div>
          <div
            className={styles.container_box2}
            style={{
              backgroundImage: `url(${bluephone})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "80%",
            }}
          >
            <button className={styles.btns} onClick={()=>{
              window.open("https://www.figma.com/file/TljlVjldEmzBro2VLlAONU/Alert-UI?t=wSktkKc5vuKn1JCp-1")
            }}>SEE PROTOTYPE</button>
          </div>
          <div
            className={styles.container_box3}
            
            style={{
              backgroundImage: `url(${black})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <button className={styles.btns} onClick={()=>{
              window.open("http://greysoft.ng")
            }} >VISIT SITE</button>
          </div>
          <div
            className={styles.container_box4}
            style={{
              backgroundImage: `url(${blue})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <button className={styles.btns}  onClick={()=>{
              window.open("http://kadinvest.live")
            }}>VISIT SITE</button>
          </div>
          <div
            className={styles.container_box5}
            style={{
              backgroundImage: `url(${leftphone})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <button className={styles.btns} onClick={()=>{
              window.open("https://www.figma.com/file/tSq9zMKTYy5mgj1V4mdZ7A/agrobays?node-id=0%3A1&t=wSKtKc5vuKn1JCp-1")
            }}>SEE PROTOTYPE</button>
          </div>
        </div>
      </div>
      <div className={styles.Last}>
        <Last />
      </div>
    </div>
  );
};

export default Archieves;
