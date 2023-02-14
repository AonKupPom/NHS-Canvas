import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./create-product-modal.component.css";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import * as productService from "./../../../../../../services/product.service";

const CreateProductModalComponent = ({
  createProductModalShow,
  setCreateProductModalShow,
  table,
}) => {
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [productFile, setProductFile] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [imageName, setImageName] = useState("กรุณาเลือกภาพสินค้า");
  const [imageNameClass, setImageNameClass] = useState("file-name-before");
  const [previewImage, setPreviewImage] = useState("");

  const formData = {
    name: productName,
    type: productType,
    file: productFile,
    stock: parseInt(productStock),
    description: productDescription,
    image: `${Date.now().toString()}.${productFile?.name?.split(".").pop()}`,
  };

  useEffect(() => {
    setProductName("");
    setProductType("");
    setProductStock("");
    setProductDescription("");
    setImageName("กรุณาเลือกภาพสินค้า");
    setImageNameClass("file-name-before");
    setPreviewImage("");
  }, [createProductModalShow]);

  const newProduct = () => {
    productService.newProduct(formData).then(() => {
      table.draw();
      setCreateProductModalShow(false);
    });
  };

  const preview = (files) => {
    if (files.files.length === 0) return;
    var reader = new FileReader();
    reader.readAsDataURL(files.files[0]);
    reader.onload = (_event) => {
      setPreviewImage(reader.result);
    };
  };

  return (
    <>
      <Modal
        id="create-product-modal"
        show={createProductModalShow}
        onHide={() => setCreateProductModalShow(false)}
        aria-labelledby="contained-modal-title-center"
        scrollable={true}
        centered
      >
        <Modal.Header className="pb-0" closeButton></Modal.Header>
        <Modal.Body id="create-product-modal-body" className="px-4">
          <Row className="align-items-center modal-title">
            <Col className="d-flex justify-content-start">
              <div className="modal-title">เพิ่มรายการสินค้า</div>
            </Col>
          </Row>
          <Form className="mt-3">
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Control
                    className="p-2"
                    type="text"
                    placeholder="ชื่อสินค้า"
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="type">
                  <Form.Control
                    className="p-2"
                    type="text"
                    placeholder="ประเภทสินค้า"
                    onChange={(e) => setProductType(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="files">
                  <Form.Control
                    type="file"
                    onChange={(e) => {
                      preview(e.target);
                      setProductFile(e.target.files[0]);
                      setImageName(e.target.files[0].name);
                      setImageNameClass("file-name-after");
                    }}
                    accept="image/png, image/jpeg"
                    hidden
                  />
                  <label htmlFor="files" className="upload-button">
                    อัพโหลด
                  </label>
                  <label className={`${imageNameClass} mx-3`}>
                    {imageName}
                  </label>
                </Form.Group>
              </Col>
            </Row>
            {previewImage ? (
              <Row className="mb-3">
                <Col className="d-flex justify-content-center">
                  <img
                    src={previewImage}
                    draggable={false}
                    alt=""
                    width={200}
                  />
                </Col>
              </Row>
            ) : null}
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="stock">
                  <Form.Control
                    className="p-2"
                    type="text"
                    placeholder="จำนวนสินค้า"
                    onChange={(e) => setProductStock(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="description">
                  <Form.Control
                    className="p-2"
                    as="textarea"
                    rows={5}
                    placeholder="รายละเอียด"
                    onChange={(e) => setProductDescription(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-end">
                <Button
                  variant="primary"
                  className="submit-login-button"
                  onClick={() => {
                    newProduct();
                  }}
                >
                  เพิ่มสินค้า
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-end"></Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateProductModalComponent;
