const {
  default: CustomContainer,
} = require("@/ui/custom-container/custom_container");

import { useEffect, useState } from "react";
import styles from "./header.module.scss";
import { Image } from "react-bootstrap";
import Link from "next/link";
import { List, PersonCircle, Search } from "react-bootstrap-icons";
import { Offcanvas } from "react-bootstrap";
import HeaderDrawer from "./header-drawer/header-drawer";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window) {
        setScrolled(window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <header className={`${styles.header} ${scrolled && styles.scrolled}`}>
      <CustomContainer className={styles.wrapper}>
        {/* <div> */}
        <Image
          src="/images/logo/logo_with_text.png"
          fluid
          alt="logo"
          width={200}
        />
        {/* </div> */}

        <nav>
          <Link href="#" className={styles.active}>
            Home
          </Link>
          <Link href="#">Templates</Link>
          <Link href="#">Explore</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">About Us</Link>
        </nav>

        <div className={styles.controls}>
          <Search />
          <PersonCircle />
          <div className={styles.toogle_menu}>
            <List
              onClick={() => {
                setShowDrawer(true);
              }}
            />
            <HeaderDrawer show={showDrawer} setShow={setShowDrawer} />
          </div>
        </div>
      </CustomContainer>
    </header>
  );
};

export default Header;
