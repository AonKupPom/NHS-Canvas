import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./delete-product-modal.component.scss";
import Button from "react-bootstrap/Button";
import * as productService from "./../../../../../../services/product.service";

const DeleteProductModalComponent = ({
  deleteProductModalShow,
  setDeleteProductModalShow,
  productId,
  table,
}) => {
  const deleteProduct = () => {
    productService.deleteProduct(productId).then(() => {
      table.draw();
      setDeleteProductModalShow(false);
    });
  };

  return (
    <>
      <Modal
        id="delete-product-modal"
        show={deleteProductModalShow}
        onHide={() => setDeleteProductModalShow(false)}
        aria-labelledby="contained-modal-title-center"
        scrollable={true}
        centered
      >
        <Modal.Header className="pb-0" closeButton></Modal.Header>
        <Modal.Body className="delete-modal-body p-3">
          <Row className="align-items-center">
            <Col className="d-flex justify-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                fill="#FF6666"
                className="x-phosphor-x-circle-thin"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </Col>
          </Row>
          <Row className="align-items-center pt-4 pb-2">
            <Col className="d-flex justify-content-center">
              <h4 className="text-center delete-modal-title">
                คุณต้องการลบข้อมูลนี้หรือไม่
              </h4>
            </Col>
          </Row>
          <Row className="align-items-center pb-4">
            <Col className="d-flex justify-content-center">
              <div className="text-center delete-modal-content px-3">
                หากคุณทำการยืนยัน
                ข้อมูลนี้จะถูกลบออกทันทีและจะไม่สามารถนำข้อมูลกลับมาได้
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col className="d-flex justify-content-center">
              <Button
                className="mx-1 delete-modal-button"
                variant="primary"
                onClick={() => {
                  deleteProduct();
                }}
              >
                ยืนยัน
              </Button>
              <Button
                className="mx-1 delete-modal-button"
                variant="danger"
                onClick={() => {
                  setDeleteProductModalShow(false);
                }}
              >
                ยกเลิก
              </Button>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-end"></Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteProductModalComponent;
