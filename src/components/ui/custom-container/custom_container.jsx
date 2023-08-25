import PropTypes from "prop-types";
const { Container } = require("react-bootstrap");
import styles from "./custom_container.module.scss";

const CustomContainer = (props) => {
  const { children, className } = props;

  return (
    <Container
      className={`${styles.custom_container} ${className && className}`}
    >
      {children}
    </Container>
  );
};

export default CustomContainer;

CustomContainer.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
