import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./edit-product-modal.component.css";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import * as productService from "./../../../../../../services/product.service";

const EditProductModalComponent = ({
  editProductModalShow,
  setEditProductModalShow,
  productId,
  table,
}) => {
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [productFile, setProductFile] = useState(null);
  const [productStock, setProductStock] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const formData = {
    name: productName,
    type: productType,
    file: productFile,
    stock: parseInt(productStock),
    description: productDescription,
    image: `${Date.now().toString()}.${productFile?.name?.split(".").pop()}`,
    fileDelete: productImage,
  };

  const dataURLtoFile = (dataurl, filename) => {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  };

  useEffect(() => {
    if (editProductModalShow)
      productService.getProductById(productId).then((res) => {
        if (!!res.image) {
          let request = new XMLHttpRequest();
          request.open(
            "GET",
            `${process.env.REACT_APP_API_PATH}/uploads/${res.image}`,
            true
          );
          request.responseType = "blob";
          request.onload = () => {
            let reader = new FileReader();
            reader.readAsDataURL(request.response);
            reader.onload = (e) => {
              const file = dataURLtoFile(e.target.result, res.image);
              setProductFile(file);
            };
          };
          request.send();
        }

        setProductName(res?.name);
        setProductType(res?.type);
        setProductStock(res?.stock);
        setProductDescription(res?.description);
        setProductImage(res?.image);
        setImageName(res?.image);
        setPreviewImage(
          `${process.env.REACT_APP_API_PATH}/uploads/${res?.image}`
        );
      });
  }, [productId, editProductModalShow]);

  const editProduct = () => {
    productService.updateProduct(productId, formData).then(() => {
      table.draw();
      setEditProductModalShow(false);
    });
  };

  const preview = (files) => {
    if (files.files.length === 0) return;
    let reader = new FileReader();
    reader.readAsDataURL(files.files[0]);
    reader.onload = (_event) => {
      setPreviewImage(reader.result);
    };
  };

  return (
    <>
      <Modal
        id="edit-product-modal"
        show={editProductModalShow}
        onHide={() => setEditProductModalShow(false)}
        aria-labelledby="contained-modal-title-center"
        scrollable={true}
        centered
      >
        <Modal.Header className="pb-0" closeButton></Modal.Header>
        <Modal.Body id="edit-product-modal-body" className="px-4">
          <Row className="align-items-center modal-title">
            <Col className="d-flex justify-content-start">
              <div className="modal-title">แก้ไขรายการสินค้า</div>
            </Col>
          </Row>
          <Form id="edit-form" className="mt-3">
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Control
                    className="p-2"
                    type="text"
                    placeholder="ชื่อสินค้า"
                    onChange={(e) => setProductName(e.target.value)}
                    value={productName}
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
                    value={productType}
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
                    }}
                    accept="image/png, image/jpeg"
                    hidden
                  />
                  <label htmlFor="files" className="upload-button">
                    อัพโหลด
                  </label>
                  <label className="file-name mx-3">{imageName}</label>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col className="d-flex justify-content-center">
                <img
                  src={imageName ? previewImage : null}
                  draggable={false}
                  alt=""
                  width={200}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="stock">
                  <Form.Control
                    className="p-2"
                    type="text"
                    placeholder="จำนวนสินค้า"
                    onChange={(e) => setProductStock(parseInt(e.target.value))}
                    value={productStock}
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
                    value={productDescription}
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
                    editProduct();
                  }}
                >
                  แก้ไขสินค้า
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

export default EditProductModalComponent;
