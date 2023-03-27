import Modal from "react-bootstrap/Modal";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faSol from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import LoginButtonComponent from "./login-button/login-button.component";
import loginModalContext from "./login-modal-context/loginModal.context";
import LoginFormComponent from "./login-form/login-form.component";
import "./login-modal.component.css"

const LoginModalComponent = () => {
  const {
    loginModalShow,
    loginButtonTab,
    loginFormTab,
    setLoginModalShow,
    setLoginButtonTab,
    setLoginFormTab,
  } = useContext(loginModalContext);
  return (
    <>
      <Modal
        id="login-modal"
        show={loginModalShow}
        onHide={() => {
          setLoginModalShow(false);
        }}
        aria-labelledby="contained-modal-title-center"
        centered
      >
        <Modal.Header className="pb-0" closeButton>
          {loginButtonTab === "login-button-pass" && (
            <FontAwesomeIcon
              icon={faSol.faChevronLeft}
              className="modal-back-button"
              size="1x"
              onClick={() => {
                setLoginButtonTab("login-button-back");
                setLoginFormTab("login-form-back");
              }}
            ></FontAwesomeIcon>
          )}
        </Modal.Header>
        <Modal.Body>
          <div className={loginButtonTab}>
            <LoginButtonComponent />
          </div>
          <div className={loginFormTab}>
            <LoginFormComponent />
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <div className="text-center mb-5">
            <Link to="/" className="login-modal-link">
              ข้อตกลงและเงื่อนไข
            </Link>{" "}
            และ{" "}
            <Link to="/" className="login-modal-link">
              นโยบายความเป็นส่วนตัว
            </Link>{" "}
            ของบริษัท
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModalComponent;
