import "./payment.component.css";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import EmptyPaymentShoppingComponent from "./empty-payment-shopping/empty-payment-shopping"
import PaymentShoppingProductComponent from "./payment-shopping-product/payment-shopping-product.component";

const PaymentComponent = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <Container className="px-4">
        {cart.length === 0 ? (
          <EmptyPaymentShoppingComponent />
        ) : (
          <PaymentShoppingProductComponent />
        )}
      </Container>
    </>
  );
};

export default PaymentComponent;
