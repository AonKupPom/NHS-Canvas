import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import {
  reduceFromCart,
  addToCart,
  removeFromCart,
} from "./../../../redux/actions/cart.action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faSol from "@fortawesome/free-solid-svg-icons";
import * as faReg from "@fortawesome/free-regular-svg-icons";
import "./cart-modal.component.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const CartModalComponent = ({ cart, cartModalShow, setCartModalShow }) => {
  const dispath = useDispatch();
  return (
    <>
      <Modal
        id="cart-modal"
        show={cartModalShow}
        onHide={() => setCartModalShow(false)}
        aria-labelledby="contained-modal-title-center"
        scrollable={true}
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
                  <div className="my-3 d-flex justify-content-center">
                    ยังไม่มีสินค้าในตะกร้า
                  </div>
                </Row>
              </div>
            </>
          ) : (
              <Table>
                <thead>
                  <tr>
                    <th width="50%">สินค้า</th>
                    <th className="text-center">ราคา</th>
                    <th className="text-center">จำนวน</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => {
                    return (
                      <tr key={item._id}>
                        <td>
                          <Row className="align-items-center">
                            <Col
                              sm="4"
                              className="d-flex justify-content-center p-0"
                            >
                              <img
                                src={require("../../../assets/img/48.png")}
                                draggable="false"
                                alt=""
                              ></img>
                            </Col>
                            <Col>{item.product?.name}</Col>
                          </Row>
                        </td>
                        <td className="text-center p-0">{item.price}</td>
                        <td className="text-center p-0">
                          <Row className="align-items-center">
                            <Col className="d-flex justify-content-center">
                              <FontAwesomeIcon
                                icon={faSol.faPlus}
                                className="icons plus-minus"
                                onClick={() => {
                                  dispath(addToCart({ ...item, quantity: 1 }));
                                }}
                              />
                            </Col>
                            <Col sm="3" className="p-0">
                              {item.quantity}
                            </Col>
                            <Col className="d-flex justify-content-center">
                              <FontAwesomeIcon
                                icon={faSol.faMinus}
                                className="icons plus-minus"
                                onClick={() => {
                                  item.quantity !== 1
                                    ? dispath(
                                        reduceFromCart({ ...item, quantity: 1 })
                                      )
                                    : dispath(removeFromCart(item._id));
                                }}
                              />
                            </Col>
                          </Row>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
          )}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-end">
          {cart.length !== 0 && (
            <Row className="align-items-center">
              <Col className="d-flex justify-content-end">
                <Link to="/payment">
                  <Button
                    variant="outline-danger"
                    className="btn-pay mr-4"
                    onClick={() => {
                      setCartModalShow(false);
                    }}
                  >
                    ซื้อสินค้า
                  </Button>
                </Link>
              </Col>
            </Row>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartModalComponent;
