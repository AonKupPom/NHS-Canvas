import { Button } from "react-bootstrap";
import "./payment-coupon.component.css";
import * as bi from "react-bootstrap-icons";
import CouponModalComponent from "../../../../modal/coupon-modal/coupon-modal.component";
import { useState } from "react";

const PaymentCouponComponent = () => {
  const [couponModalShow, setCouponModalShow] = useState(false);
  return (
    <>
      <div className="payment-coupon">
        <div className="d-flex">
          <bi.TicketPerforated size={25} className="mx-2" />
          ใช้คูปองส่วนลด
        </div>
        <Button
          className="mt-3 btn-coupon"
          variant="outline-primary"
          onClick={(e) => {
            e.currentTarget.blur();
            setCouponModalShow(true);
          }}
        >
          ใช้คูปองส่วนลด
        </Button>
      </div>
      <CouponModalComponent
        couponModalShow={couponModalShow}
        setCouponModalShow={setCouponModalShow}
      />
    </>
  );
};

export default PaymentCouponComponent;
