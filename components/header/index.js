import Image from "next/image";
import Link from "next/link";

import styles from "./SiteHeader.module.scss";
import logo from "./logo.png";

function SiteHeader() {
  const fooValue = "test";
  const tooValue = "johnk";

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image
              src={logo}
              style={{ width: "100%", height: "auto" }}
              priority
              alt=""
            />
          </div>
          <Link href="/">Home</Link>
          <Link
            href={{
              pathname: "/catalog",
              query: { foo: fooValue, too: tooValue },
            }}
          >
            Catalog
          </Link>
        </div>

        <div className={styles.right}>
          {
            <a href="" className="cta">
              SignIn
            </a>
          }
        </div>
      </div>
    </>
  );
}

export default SiteHeader;
