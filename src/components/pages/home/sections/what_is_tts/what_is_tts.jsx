import CustomContainer from "@/ui/custom-container/custom_container";
import styles from "./what_is_tts.module.scss";
import SectionHeading from "@/ui/section-heading/section_heading";
import Info from "./info/info";

const WhatIsTTS = () => {
  return (
    <div className={styles.what_is_tts}>
      <CustomContainer>
        <div className={styles.head}>
          <SectionHeading>What Is TheTiny.Store?</SectionHeading>
          <p>
            {/* Linkin.bio is a mini web page built into your Instagram and TikTok
            profiles — making your content clickable and shoppable. Create your
            page, drop the link in your bio, and help followers discover more
            about you, your products, and your brand. */}
            TheTiny.Store allows you to create your own online store and
            showcase your products. The store owners gets a unique tiny store
            URL which can be shared to their customer or can be added to Bio of
            Instagram and TikTok profiles - making your content clickable and
            shoppable. Create your own Tiny Store, drop the link in your bio,
            and help followers discover more about you, your products, and your
            brand.
          </p>
        </div>
        <Info />
      </CustomContainer>
    </div>
  );
};

export default WhatIsTTS;
