import { Button } from "react-bootstrap";
import "./payment-order-summary.component.css";
import * as bi from "react-bootstrap-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";

const PaymentOrderSummaryComponent = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <div className="payment-order">
        <Row>
          <div className="d-flex">
            <bi.FileText size={25} className="mx-2" />
            สรุปการสั่งซื้อ
          </div>
        </Row>
        <Row className="mt-4">
          <Col xs="9" className="d-flex">
            <Col className="d-flex">
              ยอดรวมสินค้า
              <div className="payment-description">
                &nbsp;(
                {cart.reduce((accumulator, object) => {
                  return accumulator + object.quantity;
                }, 0)}{" "}
                ชิ้น)
              </div>
            </Col>
          </Col>
          <Col xs="3" className="d-flex justify-content-end">
            <div className="payment-description">
              ฿
              {cart.reduce((accumulator, object) => {
                return accumulator + object.quantity * object.price;
              }, 0)}
            </div>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col>
            <div>ส่วนลด</div>
          </Col>
          <Col className="d-flex justify-content-end">
            <div className="payment-description">฿0</div>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col>
            <div>ค่าจัดส่ง</div>
          </Col>
          <Col className="d-flex justify-content-end">
            <div className="payment-description">ฟรี</div>
          </Col>
        </Row>
        <Row className="my-4 py-2 align-items-center net-balance">
          <Col xs="7">
            <Row>
              <div>ยอดสุทธิ</div>
            </Row>
            <Row>
              <div className="payment-description">(รวมภาษีมูลค่าเพิ่ม)</div>
            </Row>
          </Col>
          <Col xs="5" className="d-flex justify-content-end">
            <div className="net-balance-price">
              ฿
              {cart.reduce((accumulator, object) => {
                return accumulator + object.quantity * object.price;
              }, 0)}
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Button
              className="btn-checkbill"
              variant="primary"
            >
              ชำระเงิน
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PaymentOrderSummaryComponent;
