import CustomContainer from "@/ui/custom-container/custom_container";
import styles from "./banner.module.scss";
import CustomButton from "@/ui/custom-button/custom_button";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Shop } from "react-bootstrap-icons";

import { Bebas_Neue as HeadFont } from "next/font/google";
import DecorateText from "./decorate_text/decorate_text";

const head_font = HeadFont({
  subsets: ["latin"],
  weight: ["400"],
});

const BannerSection = () => {
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
          <h1 className={head_font.className}>
            Open And
            {/* <br/> */}
            <DecorateText />
            {/* <br/> */}
            Your Own Tiny Store <Shop className={styles.icon} />
          </h1>
          <p>
            Are you a Small Business Owner with Big Dreams? Do you want to take
            your products to the Online Market and reach wider Audience? Look No
            Further!
          </p>

          <div className={styles.call_action}>
            <div className={styles.input_box}>
              <p>thetiny.store/</p>
              <input placeholder="Your Store Name..." />
            </div>
            <CustomButton>Open Your Store Now</CustomButton>
          </div>
        </div>
        <div className={styles.right}>
          <Image src="images/banner/1.jpg" alt="banner" fluid />
        </div>
      </CustomContainer>
    </div>
  );
};

export default BannerSection;
