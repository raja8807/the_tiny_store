import Link from "next/link";
import styles from "./header-drawer.module.scss";
const { Offcanvas, Image } = require("react-bootstrap");

const HeaderDrawer = (props) => {
  const { show, setShow } = props;

  const handleClose = () => setShow(false);

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      {...props}
      className={styles.header_drawer}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <Image
            src="/images/logo/logo_with_text.png"
            fluid
            alt="logo"
            width={200}
          />
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <nav>
          <Link href="#" className={styles.active}>
            Home
          </Link>
          <Link href="#">Templates</Link>
          <Link href="#">Explore</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">About Us</Link>
        </nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default HeaderDrawer;
