import Image from "next/image";
import {
  divinity,
  synchronicity,
  theUndertaking,
  asTheSunSpeaks,
} from "../public/images/albums";

import soundwaves from "../public/images/soundwaves.jpg";
import soundwavesSmall from "../public/images/soundwaves-small.jpg";
import styles from "./HomePage.module.scss";
import Header from "./Header";
import Footer from "./Footer";
import Layout from "@/components/layout";

function HomePage() {
  return (
    <>
      <Header />
      <div className={styles.cta}>
        <span className={styles.image}>
          <Image
            width="200"
            height="200"
            src={divinity}
            priority
            alt="Divinity Album Image"
          />
        </span>
        <span className={styles.image}>
          <Image
            width="200"
            height="200"
            src={synchronicity}
            priority
            alt="Synchronicity Album Image"
          />
        </span>
        <div className={styles.ctaText}>
          <div className={styles.ctaMainText}>
            Your <em>Album</em> and <em>Artist</em> Name
          </div>
          <div className={`${styles.ctaSubText}`}>
            <div>
              on <em>Custom</em> Album Designs
            </div>
          </div>
          <button className={"button cta"}>Shop Now</button>
        </div>
        <span className={styles.image}>
          <Image
            width="200"
            height="200"
            src={theUndertaking}
            priority
            alt="The Undertaking Album Image"
          />
        </span>
        <span className={styles.image}>
          <Image
            width="200"
            height="200"
            src={asTheSunSpeaks}
            priority
            alt="As The Sun Speaks Album Image"
          />
        </span>
      </div>
      <Footer />
    </>
  );
}

// HomePage.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>;
// };

export default HomePage;
