import PropTypes from "prop-types";
import styles from "./custom_button.module.scss";

const CustomButton = (props) => {
  const { children, varient = "1", clickHandler = () => {} } = props;

  return (
    <button
      onClick={clickHandler}
      className={`${styles.custom_button} 
    ${styles[`varient_${varient}`]}
    `}
    >
      {children}
    </button>
  );
};

export default CustomButton;

CustomButton.propTypes = {
  varient: PropTypes.number,
  clickHandler: PropTypes.func,
};
