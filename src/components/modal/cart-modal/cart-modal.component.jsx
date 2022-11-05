import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { removeFromCart } from "./../../../redux/actions/cart.action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faSol from "@fortawesome/free-solid-svg-icons";
import * as faReg from "@fortawesome/free-regular-svg-icons"
import "./cart-modal.component.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CartModalComponent = ({ cart, cartModalShow, setCartModalShow }) => {
  const dispath = useDispatch();
  return (
    <>
      <Modal
        id="cart-modal"
        show={cartModalShow}
        onHide={() => setCartModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="pb-0" closeButton></Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center mb-4 modal-title">
            <h4>
              <FontAwesomeIcon
                icon={faReg.faCreditCard}
                size="lg"
                className="mr-3"
              />
              &nbsp;ชำระสินค้า
            </h4>
          </div>
          {cart.length === 0 ? (
            <>
              <div className="empty-basket-shopping">
                <Row className="align-items-center">
                  <Col className="d-flex justify-content-center">
                    <FontAwesomeIcon
                      icon={faSol.faBasketShopping}
                      size="5x"
                      className="icons"
                    />
                  </Col>
                  <div className="my-3 d-flex justify-content-center">ยังไม่มีสินค้าในตะกร้า</div>
                </Row>
              </div>
            </>
          ) : (
            cart.map((item) => {
              return (
                <div key={item._id}>
                  <div>รายการ:{item.name}</div>
                  <div>จำนวน:{item.quantity}</div>
                  <div onClick={() => dispath(removeFromCart(item._id))}>
                    ลบ
                  </div>
                </div>
              );
            })
          )}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center"></Modal.Footer>
      </Modal>
    </>
  );
};

export default CartModalComponent;
