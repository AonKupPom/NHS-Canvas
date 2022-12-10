import "./payment-shopping-product.component.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PaymentTableComponent from "./payment-table/payment-table.component";
import PaymentCouponComponent from "./payment-coupon/payment-coupon.component";

const PaymentShoppingProductComponent = () => {
  return (
    <Row>
      <Col md="9">
        <PaymentTableComponent />
      </Col>
      <Col md="3">
        <PaymentCouponComponent />
      </Col>
    </Row>
  );
};

export default PaymentShoppingProductComponent;
