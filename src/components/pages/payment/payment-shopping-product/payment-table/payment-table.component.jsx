import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faSol from "@fortawesome/free-solid-svg-icons";
import {
  reduceFromCart,
  addToCart,
  removeFromCart,
} from "./../../../../../redux/actions/cart.action";
import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./payment-table.component.css"

const PaymentTableComponent = () => {
  const cart = useSelector((state) => state.cart);
  const dispath = useDispatch();
  return (
    <Table className="mb-5">
      <thead>
        <tr>
          <th width="40%">สินค้า</th>
          <th className="text-center">ราคา</th>
          <th width="20%" className="text-center">
            จำนวน
          </th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => {
          return (
            <tr key={item._id}>
              <td>
                <Row className="align-items-center">
                  <Col sm="4" className="d-flex justify-content-center p-0">
                    <img
                      src={require("./../../../../../assets/img/48.png")}
                      draggable="false"
                      alt=""
                    ></img>
                  </Col>
                  <Col className="payment-product-detail">{item.name}</Col>
                </Row>
              </td>
              <td className="text-center p-0 payment-product-detail">
                ฿ {item.price}
              </td>
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
                  <Col sm="3" className="p-0 payment-product-detail">
                    {item.quantity}
                  </Col>
                  <Col className="d-flex justify-content-center">
                    <FontAwesomeIcon
                      icon={faSol.faMinus}
                      className="icons plus-minus"
                      onClick={() => {
                        item.quantity !== 1
                          ? dispath(reduceFromCart({ ...item, quantity: 1 }))
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
  );
};

export default PaymentTableComponent;
