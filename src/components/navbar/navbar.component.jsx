import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./navbar.component.css";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faSol from "@fortawesome/free-solid-svg-icons";
import * as faReg from "@fortawesome/free-regular-svg-icons";
import * as bi from "react-bootstrap-icons";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginModalComponent from "./../modal/login-modal/login-modal.component";
import loginModalContext from "./../modal/login-modal/login-modal-context/loginModal.context";
import CartModalComponent from "./../modal/cart-modal/cart-modal.component";
import { Logout, setCurrentUser } from "../../redux/actions/auth.action";
import { removeAllProduct } from "../../redux/actions/cart.action";
import jwt_decode from "jwt-decode";
import { getUserById } from "../../services/user.service";
import Card from "react-bootstrap/Card";

const NavbarComponent = () => {
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [cartModalShow, setCartModalShow] = useState(false);
  const [loginButtonTab, setLoginButtonTab] = useState("login-button-tab");
  const [loginFormTab, setLoginFormTab] = useState("login-form-tab");
  const [profileDropdownShow, setProfileDropdownShow] = useState(false);
  const [profileDropdownClass, setProfileDropdownClass] =
    useState("hidden-card");

  const cart = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const ADMIN = "610064006d0069006e00";

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const refOne = useRef(null);

  const handleClickOutside = (e) => {
    if (refOne?.current?.contains(e.target)) {
      setProfileDropdownClass("show-card");
      setProfileDropdownShow(true);
    } else {
      setProfileDropdownClass("hidden-card");
    }
  };

  useEffect(() => {
    const userID = localStorage.getItem("Y3VycmVudFVzZXI=")
      ? jwt_decode(localStorage.getItem("Y3VycmVudFVzZXI="))._X2lk
      : null;
    getUserById(userID).then((res) => {
      dispatch(setCurrentUser(res));
    });
  }, [dispatch]);

  const logout = () => {
    dispatch(Logout());
    dispatch(removeAllProduct());
    setProfileDropdownClass("hidden-card");
  };

  const startLoginModal = () => {
    setLoginModalShow(true);
    setLoginButtonTab("login-button-tab");
    setLoginFormTab("login-form-tab");
  };

  return (
    <>
      <Container>
        <Row className="justify-content-md-center px-4">
          <Navbar expand="xl">
            <Navbar.Brand className="mt-4">
              <NavLink to="/">
                <img
                  src={require("../../assets/img/NHS LOGO HAND.png")}
                  width="80px"
                  className="mx-auto"
                  draggable="false"
                  alt=""
                ></img>
              </NavLink>
              <p>NHS Canvas.</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="mt-3">
              <Form className="nav-search">
                <div className="d-flex nav-search search-border p-1 mb-2 mx-1">
                  <Form.Control
                    type="search"
                    placeholder="ค้นหาสินค้า"
                    className="me-auto search-box shadow-none"
                    aria-label="Search"
                  />
                  <Button
                    variant="outline-secondary"
                    className="mr-4 btn-search"
                    onClick={(e) => {
                      e.currentTarget.blur();
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faSol.faMagnifyingGlass}
                    ></FontAwesomeIcon>
                  </Button>
                </div>
              </Form>
              {!user ? (
                <div className="mb-2 mx-1">
                  <Button
                    variant="outline-secondary"
                    className="btn-user mr-4"
                    onClick={(e) => {
                      e.currentTarget.blur();
                      startLoginModal();
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faSol.faUnlock}
                      size="xl"
                    ></FontAwesomeIcon>
                    &emsp;เข้าสู่ระบบ
                  </Button>
                </div>
              ) : (
                <div className="mb-2 mx-1 btn-profile" ref={refOne}>
                  <Row>
                    <Col className="p-0 mx-3">
                      <Button
                        variant="outline-secondary"
                        className="btn-user mr-4"
                        onClick={(e) => {
                          e.currentTarget.blur();
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faReg.faUser}
                          size="xl"
                        ></FontAwesomeIcon>
                        &emsp;
                        {`${user.firstName} ${user.lastName
                          ?.toString()
                          .substring(0, 1)}.`}
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {profileDropdownShow && (
                        <Card className={`p-0 ${profileDropdownClass}`}>
                          <Card.Body className="p-0">
                            <Row
                              className="align-items-center px-1 py-2 mt-3 profile-dropdown-menu"
                              onClick={() => {
                                setProfileDropdownClass("hidden-card");
                              }}
                            >
                              <Col
                                className="d-flex justify-content-start"
                                xs="2"
                              >
                                <div className="d-flex justify-content-start">
                                  <bi.Person size={28} />
                                </div>
                              </Col>
                              <Col>บัญชีของฉัน</Col>
                            </Row>
                            <Row
                              className="align-items-center px-1 py-2 profile-dropdown-menu"
                              onClick={() => {
                                setProfileDropdownClass("hidden-card");
                              }}
                            >
                              <Col
                                className="d-flex justify-content-start"
                                xs="2"
                              >
                                <div className="d-flex justify-content-start">
                                  <bi.FileText size={25} />
                                </div>
                              </Col>
                              <Col>รายการคำสั่งซื้อ</Col>
                            </Row>
                            <Row
                              className="align-items-center px-1 py-2 profile-dropdown-menu"
                              onClick={() => {
                                setProfileDropdownClass("hidden-card");
                              }}
                            >
                              <Col
                                className="d-flex justify-content-start"
                                xs="2"
                              >
                                <div className="d-flex justify-content-start">
                                  <bi.TicketPerforated size={25} />
                                </div>
                              </Col>
                              <Col>คูปองของฉัน</Col>
                            </Row>
                            <Row
                              className="align-items-center px-1 py-2 mb-3 profile-dropdown-menu"
                              onClick={() => {
                                logout();
                              }}
                            >
                              <Col
                                className="d-flex justify-content-start"
                                xs="2"
                              >
                                <div className="d-flex justify-content-start">
                                  <bi.BoxArrowLeft size={25} />
                                </div>
                              </Col>
                              <Col>ออกจากระบบ</Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      )}
                    </Col>
                  </Row>
                </div>
              )}

              <div className="mb-2 mx-1">
                <Button
                  variant="outline-secondary"
                  className="btn-cart mr-4"
                  onClick={(e) => {
                    e.currentTarget.blur();
                    !user ? startLoginModal() : setCartModalShow(true);
                  }}
                >
                  <span className="btn-cart-text">ชำระสินค้า </span>
                  <FontAwesomeIcon
                    icon={faSol.faShoppingCart}
                    className="fa-cart"
                    size="xl"
                  ></FontAwesomeIcon>
                  {cart.reduce((sum, item) => sum + item.quantity, 0) > 0 ? (
                    <div className="cart-notification">
                      <Row className="align-items-center">
                        <Col className="d-flex justify-content-center">
                          <span>
                            {cart.reduce((sum, item) => sum + item.quantity, 0)}
                          </span>
                        </Col>
                      </Row>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </Button>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </Row>
        <Row className="px-4 mt-4">
          <Navbar expand="xl" className="justify-content-center mb-5">
            <Navbar.Collapse className="justify-content-md-center">
              <Nav
                className="my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <div className="px-5 nav-items">
                  <NavLink
                    to="/selling-tents"
                    className={({ isActive }) =>
                      isActive ? "active" : "inactive"
                    }
                  >
                    <Row>
                      <bi.Diagram3Fill size={50} />
                    </Row>
                    <Row className="justify-content-center mt-2">
                      ซื้อเต็นท์
                    </Row>
                  </NavLink>
                </div>
                <div className="px-5 nav-items">
                  <NavLink to="/rent-tents">
                    <Row>
                      <bi.Diagram3 size={50} />
                    </Row>
                    <Row className="justify-content-center mt-2">
                      เช่าเต็นท์
                    </Row>
                  </NavLink>
                </div>
                <div className="px-5 nav-items">
                  <div className="icon-hov">
                    <Row className="justify-content-center mt-2">
                      <bi.TextareaResize size={50} id="dropdown-icon" />
                    </Row>
                    <Row>
                      <NavDropdown
                        title="งานเบาะและผ้าใบ"
                        id="navbarScrollingDropdown"
                      >
                        <NavDropdown.Item>งานเบาะและโซฟา</NavDropdown.Item>
                        <NavDropdown.Item>ผ้าใบเฉพาะงาน</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>ชนิดวัสดุผลิตสินค้า</NavDropdown.Item>
                      </NavDropdown>
                    </Row>
                  </div>
                </div>
                <div className="px-5 nav-items">
                  <NavLink to="/action3">
                    <Row>
                      <bi.Truck size={50} />
                    </Row>
                    <Row className="justify-content-center mt-2">
                      บริการกางเต็นท์
                    </Row>
                  </NavLink>
                </div>
                <div className="px-5 nav-items">
                  <NavLink to="/action4">
                    <Row>
                      <bi.BoxSeam size={50} />
                    </Row>
                    <Row className="justify-content-center mt-2">
                      อุปกรณ์เสริม
                    </Row>
                  </NavLink>
                </div>
                <div className="px-5 nav-items">
                  <NavLink to="/action5">
                    <Row>
                      <bi.Gift size={50} />
                    </Row>
                    <Row className="justify-content-center mt-2">โปรโมชัน</Row>
                  </NavLink>
                </div>
                {user?.role === ADMIN && (
                  <div className="px-5 nav-items">
                    <div className="icon-hov">
                      <Row className="justify-content-center mt-2">
                        <bi.ListCheck size={50} id="dropdown-icon" />
                      </Row>
                      <Row>
                        <NavDropdown
                          title="จัดการระบบ"
                          id="navbarScrollingDropdown"
                        >
                          <NavDropdown.Item as={Link} to={"/manage-users"}>
                            ผู้ใช้งาน
                          </NavDropdown.Item>
                          <NavDropdown.Item as={Link} to={"/manage-products"}>
                            สินค้าทั้งหมด
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            ชนิดวัสดุผลิตสินค้า
                          </NavDropdown.Item>
                        </NavDropdown>
                      </Row>
                    </div>
                  </div>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>
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
      <CartModalComponent
        cart={cart}
        cartModalShow={cartModalShow}
        setCartModalShow={setCartModalShow}
      />
    </>
  );
};

// เมนู เต็นท์ผ้าใบ เต็นท์เช่า งานผ้าใบอื่นๆ บริการกางเต็นท์ กาวปะผ้าใบ สเตย์รัดผ้าใบ เชือกไนล่อน

export default NavbarComponent;
