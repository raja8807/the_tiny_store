const { Row } = require("react-bootstrap");
const { default: InfoCard } = require("./info_card/info_card");
import styles from "./info.module.scss";
import { RocketTakeoff, BagHeartFill, AwardFill } from "react-bootstrap-icons";

const Info = () => {
  const cards = [
      {
        id: "info_card_2",
        icon: <RocketTakeoff />,
        head: "Take Your Small Business Online",
        caption:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero reiciendis ut earum soluta dolore porro cumque repellendus quae tempore dignissimos, blanditiis, aspernatur corrupti id, consequuntur excepturi quia asperiores voluptates deleniti?",
      },
    {
      id: "info_card_1",
      icon: <BagHeartFill />,
      head: "Turn followers into customers",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero reiciendis ut earum soluta dolore porro cumque repellendus quae tempore dignissimos, blanditiis, aspernatur corrupti id, consequuntur excepturi quia asperiores voluptates deleniti?",
    },
    {
      id: "info_card_3",
      icon: <AwardFill />,
      head: "Decorate And Personalise Your Store",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero reiciendis ut earum soluta dolore porro cumque repellendus quae tempore dignissimos, blanditiis, aspernatur corrupti id, consequuntur excepturi quia asperiores voluptates deleniti?",
    },
  ];

  return (
    <Row className={styles.info_section}>
      {cards.map((card) => (
        <InfoCard key={card.id} cardData={card} />
      ))}
    </Row>
  );
};

export default Info;
