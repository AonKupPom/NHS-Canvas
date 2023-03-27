import { useContext } from "react";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faSol from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as bi from "react-bootstrap-icons";
import loginModalContext from "./../login-modal-context/loginModal.context";
import "./login-button.component.css";
import * as authService from "../../../../services/auth.service";
import { useDispatch } from "react-redux";
import { setAuth } from "../../../../redux/actions/auth.action";

const LoginButtonComponent = () => {
  const dispatch = useDispatch();
  const { setLoginButtonTab, setLoginFormTab, setLoginModalShow } =
    useContext(loginModalContext);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const googleAccount = await authService.googleAccountData(tokenResponse);
      const userData = {
        email: googleAccount.data.email,
        firstName: googleAccount.data.givenName,
        lastName: googleAccount.data.familyName,
      };
      const userGoogle = await authService.googleLogin(userData);
      if (userGoogle) {
        dispatch(setAuth(userGoogle));
      }
    },
    onError: (err) => {
      console.log("google login error : ", err);
    },
  });

  return (
    <>
      <div className="d-flex justify-content-center mb-4">
        <h4>
          <FontAwesomeIcon icon={faSol.faUnlock} size="lg" className="mr-3" />
          &nbsp;&nbsp;เข้าสู่ระบบ
        </h4>
      </div>
      <div className="text-center">
        <Button
          variant="warning"
          className="btn-login-menu  my-2"
          onClick={() => {
            setLoginButtonTab("login-button-pass");
            setLoginFormTab("login-form-pass");
          }}
        >
          <Row className="align-items-center">
            <Col xs="5">
              <bi.KeyFill size={40} className="mr-3" />
            </Col>
            <Col xs="7" className="d-flex justify-content-start">
              เข้าสู่ระบบ
            </Col>
          </Row>
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            googleLogin();
            setLoginModalShow(false);
          }}
          className="btn-login-menu my-2"
        >
          <Row className="align-items-center">
            <Col xs="3">
              <bi.Google size={30} className="mr-3" />
            </Col>
            <Col xs="9" className="d-flex justify-content-start">
              ลงชื่อเข้าใช้ด้วย Google
            </Col>
          </Row>
        </Button>
        <Button
          variant="primary"
          className="btn-login-menu  my-2"
          onClick={() => {
            googleLogout();
          }}
        >
          <Row className="align-items-center">
            <Col xs="3">
              <bi.Facebook size={30} className="mr-3" />
            </Col>
            <Col xs="9" className="d-flex justify-content-start">
              ลงชื่อเข้าใช้ด้วย Facebook
            </Col>
          </Row>
        </Button>
      </div>
    </>
  );
};

export default LoginButtonComponent;
