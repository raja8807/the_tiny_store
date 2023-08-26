import CustomContainer from "@/ui/custom-container/custom_container";
import styles from "./banner.module.scss";
import CustomButton from "@/ui/custom-button/custom_button";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

const BannerSection = () => {
  const [style, setStyle] = useState({});

  const getNewColor = (dark) => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * dark ? 128 : 256);
    const b = Math.floor(Math.random() * dark ? 100 : 256);

    return `rgb(${r},${g},${b})`;
  };

  // let interval

  useEffect(() => {
    const types = ["dotted", "dashed"];
    let currentType = 0;
    const interval = setInterval(() => {
      setStyle({
        color: getNewColor(true),
        // border: `4px ${types[currentType]} ${getNewColor()}`,
        padding: "0 10px",
        textShadow: `1px 1px 2px ${getNewColor(true)}`,
      });
      if (currentType === 0) {
        currentType = 1;
      } else {
        currentType = 0;
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  // const

  return (
    <div className={styles.banner_section}>
      <CustomContainer className={styles.container}>
        <div className={styles.left}>
          <h1>
            Open And<span style={{ ...style }}>Decorated</span>Your Own Tiny
            Online Store.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eum
            excepturi ipsam rem aliquid aut nostrum sint accusamus corrupti sint
            accusamus corrupti quam!
          </p>

          <CustomButton>Open Your Store Now</CustomButton>
        </div>
        <div className={styles.right}>
          <Image src="images/banner/1.jpg" alt="banner" fluid />
        </div>
      </CustomContainer>
    </div>
  );
};

export default BannerSection;
