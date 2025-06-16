import Image from "next/image";
import styles from "./HomePage.module.scss";
import soundwaves from "../public/images/soundwaves.jpg";

function Footer() {
  return (
    <div className={styles.soundwavesImage}>
      {/* <Image src={soundwaves} layout="responsive" priority alt="" /> */}
      <Image
        src={soundwaves}
        style={{ width: "100%", height: "auto" }}
        priority
        alt=""
      />
    </div>
  );
}

export default Footer;
