import {
  Sedgwick_Ave_Display,
  Abel,
  Alkalami,
  Anek_Odia,
  Bebas_Neue

} from "next/font/google";

const font_bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});
const font_sedgwick_ave_display = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: ["400"],
});
const font_abel = Abel({
  subsets: ["latin"],
  weight: ["400"],
});
const font_alkalami = Alkalami({
  subsets: ["latin"],
  weight: ["400"],
});

const font_anek_Odia = Anek_Odia({
  subsets: ["latin"],
  weight: ["400"],
});

 const FONTS = {
  font_sedgwick_ave_display: font_sedgwick_ave_display.className,
  font_abel: font_abel.className,
  font_alkalami: font_alkalami.className,
  font_anek_Odia: font_anek_Odia.className,
  font_bebas_neue:font_bebas_neue.className
};
export default FONTS;
