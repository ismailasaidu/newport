import styles from "./archieves.module.css"
import arrow from "../../img/arrow.png"
import down from "../../img/down.png"
import { useNavigate } from "react-router-dom"
import Last from "../../component/last/Last"
import leftphone from "../../img/leftphone.png"
import rightphone from "../../img/rightphone.png"
import bluephone from "../../img/bluephone.png"
import blue from "../../img/blue.png"
import black from "../../img/black.png"

const Archieves = () => {
    const navigate = useNavigate()
  return (
    <div className={styles.container}>
        <div className={styles.header}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={arrow}
            onClick={() => {
              navigate("/");
            }}
          />
          <p style={{ color: "white" }}>profile</p>
        </div>
        <div style={{ display: "flex", gap: "80px" }}>
          <button
            style={{
              width: "137.31px",
              height: "46.62px",
              border: "none",
              background: "white",
              borderRadius: "20px",
            }}

            onClick={()=>{
              navigate("/about")
            }}
          >
            ABOUT
          </button>
          <button
            style={{
              width: "137.31px",
              height: "46.62px",
              border: "none",
              background: "white",
              borderRadius: "20px",
            }}
            onClick={() => {
              navigate("/archieves");
            }}
          >
            ARCHIVES
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <p style={{ color: "white" }}>RESUME</p>
          <img src={down} />
        </div>
      </div>
      <div className={styles.mid}>
        <div>
          <h1>ARCHIVES</h1>
        </div>
        <div className={styles.mid_box}>
          <div className={styles.container_box1}  style={{backgroundImage:`url(${rightphone})`, backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"40%"}}>
            <button className={styles.btns}>SEE PROTOTYPE</button>
          </div>
          <div className={styles.container_box2} style={{backgroundImage:`url(${bluephone})`, backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"80%"}}><button  className={styles.btns}>SEE PROTOTYPE</button></div>
          <div className={styles.container_box3} style={{backgroundImage:`url(${black})`, backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover"}}><button className={styles.btns}>VISIT SITE</button></div>
          <div className={styles.container_box4} style={{backgroundImage:`url(${blue})`, backgroundRepeat:"no-repeat", backgroundPosition:"center"}}><button className={styles.btns}>VISIT SITE</button></div>
          <div className={styles.container_box5}  style={{backgroundImage:`url(${leftphone})`, backgroundRepeat:"no-repeat", backgroundPosition:"center"}}><button className={styles.btns}>SEE PROTOTYPE</button></div>
        </div>
      </div>
      <div className={styles.Last}>
      <Last/>
      </div>
    </div>
  )
}

export default Archieves