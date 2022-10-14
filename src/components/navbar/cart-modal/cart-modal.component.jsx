import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/actions/cart.action";

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
          {cart.map((item) => {
            return (
              <div key={item._id}>
                <div>รายการ:{item.name}</div>
                <div>จำนวน:{item.quantity}</div>
                <div onClick={() => dispath(removeFromCart(item._id))}>ลบ</div>
              </div>
            );
          })}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center"></Modal.Footer>
      </Modal>
    </>
  );
};

export default CartModalComponent;
