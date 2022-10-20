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
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginModalComponent from "./../modal/login-modal/login-modal.component";
import loginModalContext from "./../modal/login-modal/login-modal-context/loginModal.context";
import CartModalComponent from "./../modal/cart-modal/cart-modal.component";
import { Logout, setCurrentUser } from "../../redux/actions/auth.action";
import { removeAllProduct } from "../../redux/actions/cart.action";
import jwt_decode from "jwt-decode";
import { getUserById } from "../../services/user.service";

const NavbarComponent = () => {
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [cartModalShow, setCartModalShow] = useState(false);
  const [loginButtonTab, setLoginButtonTab] = useState("login-button-tab");
  const [loginFormTab, setLoginFormTab] = useState("login-form-tab");

  const cart = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const userID = localStorage.getItem("currentUser")
      ? jwt_decode(localStorage.getItem("currentUser"))._id
      : null;
    getUserById(userID).then((res) => {
      dispatch(setCurrentUser(res));
    });
  }, [dispatch]);

  const logout = () => {
    dispatch(Logout());
    dispatch(removeAllProduct());
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
                      icon={faReg.faUser}
                      size="xl"
                    ></FontAwesomeIcon>
                    &emsp;เข้าสู่ระบบ
                  </Button>
                </div>
              ) : (
                <div className="mb-2 mx-1">
                  <Button
                    variant="outline-secondary"
                    className="btn-user mr-4"
                    onClick={(e) => {
                      e.currentTarget.blur();
                      logout();
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faSol.faArrowRightFromBracket}
                      size="xl"
                    ></FontAwesomeIcon>
                    &emsp;ออกจากระบบ
                  </Button>
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
                {!user ? null : (
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
                          <NavDropdown.Item>ผ้าใบเฉพาะงาน</NavDropdown.Item>
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
