import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faSol from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./empty-payment-shopping.component.css"

const EmptyPaymentShoppingComponent = () => {
  return (
    <>
      <div className="empty-payment-shopping">
        <Row className="align-items-center">
          <Col className="d-flex justify-content-center">
            <FontAwesomeIcon
              icon={faSol.faBasketShopping}
              size="5x"
              className="icons"
            />
          </Col>
          <div className="my-3 d-flex justify-content-center">
            ยังไม่มีสินค้าในตะกร้า
          </div>
        </Row>
      </div>
    </>
  );
};

export default EmptyPaymentShoppingComponent;
