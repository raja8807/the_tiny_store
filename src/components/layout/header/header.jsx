const {
  default: CustomContainer,
} = require("@/ui/custom-container/custom_container");

import { useEffect, useState } from "react";
import styles from "./header.module.scss";
import { Image } from "react-bootstrap";
import Link from "next/link";
import { List, PersonCircle, Search } from "react-bootstrap-icons";
import HeaderDrawer from "./header-drawer/header-drawer";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    {
      id: "home",
      href: "/",
      text: "Home",
    },
    {
      id: "templates",
      href: "/",
      text: "Templates",
    },
    {
      id: "explore",
      href: "/",
      text: "Explore Stores",
    },
    {
      id: "pricing",
      href: "/",
      text: "Pricing",
    },
    {
      id: "about",
      href: "/",
      text: "About Us",
    },
  ];

  const [currentPage, setCurrentPage] = useState(navItems[0].id);

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
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`${styles.nav_item} ${
                currentPage === item.id && styles.active
              }`}
              onClick={() => {
                setCurrentPage(item.id);
              }}
            >
              {item.text}
            </Link>
          ))}
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
            <HeaderDrawer
              show={showDrawer}
              setShow={setShowDrawer}
              navItems={navItems}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </CustomContainer>
    </header>
  );
};

export default Header;
