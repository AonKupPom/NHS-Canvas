import "./payment-shopping-product.component.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PaymentTableComponent from "./payment-table/payment-table.component";
import PaymentCouponComponent from "./payment-coupon/payment-coupon.component";
import PaymentOrderSummaryComponent from "./payment-order-summary/payment-order-summary.component";

const PaymentShoppingProductComponent = () => {
  return (
    <Row>
      <Col md="9">
        <PaymentTableComponent />
      </Col>
      <Col md="3">
        <Row>
          <PaymentCouponComponent />
        </Row>
        <Row className="mt-3">
          <PaymentOrderSummaryComponent />
        </Row>
      </Col>
    </Row>
  );
};

export default PaymentShoppingProductComponent;
