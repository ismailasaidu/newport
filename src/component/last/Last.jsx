import styles from "./last.module.css"
import linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import twitter from "../../img/twitter.png";
import email from "../../img/email.png";
import behance from "../../img/behance.png";
import { useNavigate } from "react-router-dom";

const Last = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className={styles.last}>
        <p>Let's Connect:</p>
        <img
          src={instagram}
          alt="pic"
          style={{ width: "25px", height: "25px" }}

          onClick={()=>{
            // window.open("http://instagram.com/lo.ne.r_")
            
          }}
        />
        <img
          src={twitter}
          alt="pic"
          style={{ width: "25px", height: "25px" }}

          onClick={()=>{
            window.open("https://twitter.com/teddiesux")
          }}
        />
        <img
          src={behance}
          alt="pic"
          style={{ width: "25px", height: "25px" }}

          onClick={()=>{
            window.open("https://behance.net/abdullsaidu")
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
        <img src={email} alt="pic" style={{ width: "25px", height: "25px" }} 

        onClick={()=>{
          window.open("https://abdulsaidu0@gmail.com")
        }}
        />
      </div>
    </div>
  );
};

export default Last;
