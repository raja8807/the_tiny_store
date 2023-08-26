import styles from "./section_heading.module.scss";

import FONTS from "@/ui/fonts/fonts";

// console.log(FONTS.font_abel);

const SectionHeading = (props) => {
  const { children } = props;

  return (
    <>
      <h1 className={`${styles.section_heading} ${FONTS.font_anek_Odia}`}>
        {children}
        <hr />
      </h1>
    </>
  );
};

export default SectionHeading;
