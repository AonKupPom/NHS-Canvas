import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faReg from "@fortawesome/free-regular-svg-icons";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const LoginFormComponent = () => {
  return (
    <>
      <div className="d-flex justify-content-center mb-3">
        <h4>
          <FontAwesomeIcon icon={faReg.faUser} size="lg" className="mr-3" />
          &nbsp;เข้าสู่ระบบ
        </h4>
      </div>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="userName">
              <Form.Control
                className="p-2"
                type="text"
                placeholder="ชื่อผู้ใช้"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                className="p-2"
                type="password"
                placeholder="รหัสผ่าน"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-end">
            <Link to="/" className="login-modal-link">
              ลืมรหัสผ่าน?
            </Link>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="d-flex justify-content-center">
            <Button
              variant="primary"
              type="submit"
              className="submit-login-button"
            >
              เข้าสู่ระบบ
            </Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="d-flex justify-content-center">
            ยังไม่มีบัญชี?&nbsp;
            <Link to="/" className="login-modal-link">
              สมัครสมาชิก
            </Link>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default LoginFormComponent;
