import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as bi from "react-bootstrap-icons";
import "./coupon-modal.component.css";

const CouponModalComponent = ({ couponModalShow, setCouponModalShow }) => {
  return (
    <>
      <Modal
        id="coupon-modal"
        show={couponModalShow}
        onHide={() => setCouponModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        scrollable={true}
        centered
      >
        <Modal.Header className="pb-0" closeButton></Modal.Header>
        <Modal.Body>
          <Row className="d-flex align-items-center">
            <Col md="5" className="d-flex justify-content-end">
              <bi.TicketPerforated size={40} />
            </Col>
            <Col md="7" className="d-flex justify-content-start p-0">
              <h4 className="m-0">ใช้คูปองส่วนลด</h4>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-end"></Modal.Footer>
      </Modal>
    </>
  );
};

export default CouponModalComponent;
