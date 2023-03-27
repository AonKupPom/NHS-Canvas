import React from "react";
import "./rent-tents-list.component.css";
import Button from "react-bootstrap/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faSol from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import * as productRentService from "./../../../../services/product-rent.service";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../redux/actions/cart.action";
import LoginModalComponent from "./../../../modal/login-modal/login-modal.component";
import loginModalContext from "./../../../modal/login-modal/login-modal-context/loginModal.context";
import InfiniteScroll from "react-infinite-scroll-component";

const RentTentsList = () => {
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [loginButtonTab, setLoginButtonTab] = useState("login-button-tab");
  const [loginFormTab, setLoginFormTab] = useState("login-form-tab");
  const [tents, setTents] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const SKIP = 0;
    productRentService
      .getLazyProductRent(SKIP)
      .then((res) => {
        console.log("res : ",res)
        setTents(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const dispath = useDispatch();
  const startLoginModal = () => {
    setLoginModalShow(true);
    setLoginButtonTab("login-button-tab");
    setLoginFormTab("login-form-tab");
  };

  const fetchMoreData = () => {
    setTimeout(() => {
      productRentService
        .getLazyProductRent(tents.length)
        .then((res) => {
          res ? setTents(tents.concat(res)) : setHasMore(false);
        })
        .catch((err) => {
          console.log(err);
          setHasMore(false);
        });
    }, 500);
  };

  return (
    <>
      <div className="page-title">รายการเต็นท์เช่า</div>
      <InfiniteScroll
        dataLength={tents.length}
        next={fetchMoreData}
        hasMore={hasMore}
        scrollThreshold={0.7}
      >
        <Row className="mt-5">
          {tents.map((items, index) => {
            return (
              <Col
                sm="6"
                md="6"
                lg="6"
                xl="4"
                className="d-flex justify-content-center my-2 fadeIn"
                key={index}
              >
                <Col className="rent-tents-list p-3 text-center">
                  <Row className="row justify-content-center align-items-center">
                    <img
                      src={require("../../../../assets/img/48.png")}
                      draggable="false"
                      alt=""
                    ></img>
                  </Row>
                  <p align="left" className="px-2">
                    {items.product?.name}
                  </p>
                  <p align="left" className="px-2">
                    ฿{items.price} บาท
                  </p>
                  <Button
                    variant="outline-dark"
                    align="center"
                    onClick={() => {
                      !user
                        ? startLoginModal()
                        : dispath(addToCart({ ...items, quantity: 1 }));
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faSol.faShoppingCart}
                      size="lg"
                    ></FontAwesomeIcon>
                    &emsp;ซื้อสินค้า
                  </Button>
                </Col>
              </Col>
            );
          })}
        </Row>
      </InfiniteScroll>

      <loginModalContext.Provider
        value={{
          loginModalShow,
          loginButtonTab,
          loginFormTab,
          setLoginModalShow,
          setLoginButtonTab,
          setLoginFormTab,
        }}
      >
        <LoginModalComponent />
      </loginModalContext.Provider>
    </>
  );
};

export default RentTentsList;
