import Link from "next/link";
import styles from "./header-drawer.module.scss";
import CustomButton from "@/ui/custom-button/custom_button";
const { Offcanvas, Image } = require("react-bootstrap");

const HeaderDrawer = (props) => {
  const { show, setShow, navItems, setCurrentPage, currentPage } = props;

  const handleClose = () => setShow(false);

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      {...props}
      className={styles.header_drawer}
      placement="end"
      
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
      <Offcanvas.Body className={styles.drawer_body}>
        <nav>
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`${styles.nav_item} ${
                currentPage === item.id && styles.active
              }`}
              onClick={() => {
                setCurrentPage(item.id);
              }}
            >
              {item.text}
            </Link>
          ))}
        </nav>
        <div className={styles.btns}>
          <CustomButton varient="white">Login</CustomButton>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default HeaderDrawer;
