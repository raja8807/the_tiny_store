import { useEffect, useState } from "react";
import styles from "./decorate_text.module.scss";

// import { Sedgwick_Ave_Display,Abel,Alkalami,Anek_Odia } from "next/font/google";
import {
  Sedgwick_Ave_Display,
  Abel,
  Alkalami,
  Anek_Odia,
} from "next/font/google";

const decorate_font_1 = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: ["400"],
});
const decorate_font_2 = Abel({
  subsets: ["latin"],
  weight: ["400"],
});
const decorate_font_3 = Alkalami({
  subsets: ["latin"],
  weight: ["400"],
});
const decorate_font_4 = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: ["400"],
});
const decorate_font_5 = Anek_Odia({
  subsets: ["latin"],
  weight: ["400"],
});


console.log(decorate_font_1);

const fonts = [
  decorate_font_1,
  decorate_font_2,
  decorate_font_3,
  decorate_font_4,
  decorate_font_5,
];

const DecorateText = () => {
  const [style, setStyle] = useState({});
  const [currentFont, setCurrentFont] = useState(decorate_font_1);

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
        padding: "0 10px",
        textShadow: `1px 1px 2px ${getNewColor(true)}`,
      });
      setCurrentFont(fonts[Math.floor(Math.random() * fonts.length)]);
      if (currentType === 0) {
        currentType = 1;
      } else {
        currentType = 0;
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.decorate_text_container}>
      <span
        style={{ ...style }}
        className={`${styles.decorate_text} ${currentFont.className}`}
      >
        Decorate
      </span>
    </div>
  );
};

export default DecorateText;
