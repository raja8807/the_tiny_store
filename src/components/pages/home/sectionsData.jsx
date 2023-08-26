
const { default: BannerSection } = require("./sections/banner/banner");
import WhatIsTTS from "./sections/what_is_tts/what_is_tts";

const SECTIONS_DATA = [
  {
    id: "banner",
    component: <BannerSection />,
  },
  {
    id: "banner2",
    component: <WhatIsTTS/>,
  },
];

export default SECTIONS_DATA;
