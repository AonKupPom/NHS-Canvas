import { useEffect, useContext } from "react";
import { gapi } from "gapi-script";
import { GoogleLogin } from "react-google-login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faSol from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as bi from "react-bootstrap-icons";
import loginModalContext from "./../login-modal-context/loginModal.context";
import "./login-button.component.css";
import { googleLogin } from "../../../../services/auth.service";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../../../redux/actions/auth.action";

const LoginButtonComponent = () => {
  const { setLoginButtonTab, setLoginFormTab, setLoginModalShow } =
    useContext(loginModalContext);

  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, [clientId]);

  const onSuccess = async (res) => {
    if (!user) {
      var auth2 = gapi.auth2.getAuthInstance();
      if (auth2 != null) {
        auth2.signOut().then(auth2.disconnect().then());
      }
    }
    const userData = {
      email: res.profileObj.email,
      firstName: res.profileObj.givenName,
      lastName: res.profileObj.familyName,
    };
    const userGoogle = await googleLogin(userData);
    if (userGoogle) {
      dispatch(setAuth(userGoogle));
    }
  };

  const onError = (res) => {
    console.log("Error : ", res);
  };

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
        <GoogleLogin
          render={(renderProps) => (
            <Button
              variant="danger"
              onClick={() => {
                renderProps.onClick();
                setLoginModalShow(false);
              }}
              disabled={renderProps.disabled}
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
          )}
          clientId={clientId}
          buttonText="ลงชื่อเข้าใช้ด้วย Google"
          onSuccess={onSuccess}
          onFailure={onError}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
        <Button variant="primary" className="btn-login-menu  my-2">
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
