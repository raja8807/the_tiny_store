import CustomContainer from "@/ui/custom-container/custom_container";
import styles from "./banner.module.scss";
import CustomButton from "@/ui/custom-button/custom_button";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Shop } from "react-bootstrap-icons";

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
      <div className={styles.blob}>
        <svg
        //   xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 310 350"
        >
          <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
        </svg>
      </div>

      <CustomContainer className={styles.container}>
        <div className={styles.left}>
          <h1>
            Open And
            <span style={{ ...style }}>
              Decorate
              <br />
            </span>
            {/* <br/> */}
            Your Own Tiny Online Store <Shop className={style.icon} /> !
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
