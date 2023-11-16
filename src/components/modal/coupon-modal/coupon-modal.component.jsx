import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as bi from "react-bootstrap-icons";
import "./coupon-modal.component.scss";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CouponModalComponent = ({ couponModalShow, setCouponModalShow }) => {
  return (
    <>
      <Modal
        id="coupon-modal"
        show={couponModalShow}
        onHide={() => setCouponModalShow(false)}
        aria-labelledby="contained-modal-title-center"
        scrollable={true}
        centered
      >
        <Modal.Header className="pb-0" closeButton></Modal.Header>
        <Modal.Body id="coupon-modal-body" className="px-4">
          <Row className="align-items-center modal-title">
            <Col xs="5" className="d-flex justify-content-end">
              <bi.TicketPerforated size={40} />
            </Col>
            <Col xs="7" className="d-flex justify-content-start p-0">
              <h4 className="m-0">ใช้คูปองส่วนลด</h4>
            </Col>
          </Row>
          <Row className="align-items-center py-5">
            <Col xs="9">
              <Form>
                <Form.Group controlId="formDiscount">
                  <Form.Control type="input" placeholder="กรอกโค้ดส่วนลด" />
                </Form.Group>
              </Form>
            </Col>
            <Col xs="3" className="d-flex justify-content-center p-0">
              <Button variant="secondary" id="btnUseDiscount" onClick={() => setCouponModalShow(false)}>
                ใช้ส่วนลด
              </Button>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-end"></Modal.Footer>
      </Modal>
    </>
  );
};

export default CouponModalComponent;
