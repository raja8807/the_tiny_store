import styles from "./home.module.scss";
import SECTIONS_DATA from "./sectionsData";
const HomeScreen = () => {
  return (
    <div className={styles.home_screen}>
      {SECTIONS_DATA.map((section) => (
        <section key={section.id}>{section.component}</section>
      ))}
    </div>
  );
};

export default HomeScreen;
