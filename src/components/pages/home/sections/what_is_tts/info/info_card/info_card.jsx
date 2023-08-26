import { Col } from "react-bootstrap";
import styles from "./info_card.module.scss";

const { UsbDrive } = require("react-bootstrap-icons");

const InfoCard = (props) => {
  const { cardData } = props;
  return (
    <Col xs={12} md={4} className={styles.info_card}>
      <div className={styles.icon}>{cardData.icon}</div>

      <div className={styles.details}>
        <h5>{cardData.head}</h5>
        <p>{cardData.caption}</p>
      </div>
    </Col>
  );
};

export default InfoCard;
