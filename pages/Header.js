import Image from "next/image";
import styles from "./HomePage.module.scss";
import heroBanner from "../public/images/hero-banner.png";

function Header() {
  return (
    <div className={styles.heroImage}>
      {/* <Image src={heroBanner} layout="fill" objectFit="cover" priority alt="" /> */}
      <Image
        src={heroBanner}
        style={{ objectFit: "contain" }}
        fill={true}
        priority
        alt=""
      />
    </div>
  );
}

export default Header;
