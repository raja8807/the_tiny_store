import CustomContainer from "@/ui/custom-container/custom_container";
import styles from "./banner.module.scss";
import CustomButton from "@/ui/custom-button/custom_button";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

const BannerSection = () => {
  const [color, setColor] = useState("black");

  const getNewColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 128);
    const b = Math.floor(Math.random() * 100);

    return `rgb(${r},${g},${b})`;
  };

  // let interval

  useEffect(() => {
    const interval = setInterval(() => {
        console.log(color);
      setColor(getNewColor());
    }, 400);

    return () => clearInterval(interval);
  }, []);

  // const

  return (
    <div className={styles.banner_section}>
      <CustomContainer className={styles.container}>
        <div className={styles.left}>
          <h1>
            Open Your Own <span style={{ color }}>Personalised</span> Tiny Store
            Online.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eum
            excepturi ipsam rem aliquid aut nostrum sint accusamus corrupti
            sint accusamus corrupti
            quam!
          </p>
          <CustomButton>Open Your Store Now</CustomButton>
        </div>
        <div className={styles.right}>
        <Image src="images/banner/1.jpg" alt="banner" fluid/>
        </div>
      </CustomContainer>
    </div>
  );
};

export default BannerSection;
