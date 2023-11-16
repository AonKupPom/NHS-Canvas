import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./edit-product-rent-modal.component.scss";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
// import * as productService from "./../../../../../../services/product.service";
import * as productRentService from "./../../../../../../services/product-rent.service";

const EditProductRentModalComponent = ({
  editProductRentModalShow,
  setEditProductRentModalShow,
  productId,
  table,
}) => {
  const [formData, setFormData] = useState(new FormData());
  const [validated, setValidated] = useState(false);
  const [enableRent, setEnalbleRent] = useState(false);
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState(null);
  const [productDescription, setProductDescription] = useState("");
  const [productRent, setProductRent] = useState([
    {
      _id: "",
      price: "",
      product: "",
      productAttribute: "",
    },
  ]);
  const [productAttribute, setProductAttribute] = useState([
    {
      _id: "",
      color: "",
      size: {
        width: "",
        long: "",
        height: "",
      },
      productRent: {
        _id: "",
        price: "",
      },
      stock: "",
      imageName: "",
      previewImage: null,
    },
  ]);

  useEffect(() => {
    if (editProductRentModalShow) {
      productRentService.getProductWithRentData(productId).then((res) => {
        console.log("Res : ", res);
        setValidated(false);
        setFormData(new FormData());
        setEnalbleRent(res?.enableRent);
        setProductName(res?.name);
        setProductType(res?.type);
        setProductDescription(res?.description);
        setProductRent(res?.productRent);
        setProductAttribute(
          res?.productAttribute.map((items) => {
            return {
              _id: items._id,
              color: items.color,
              size: {
                width: items.size.width,
                long: items.size.long,
                height: items.size.height,
              },
              productRent: {
                _id: items?.productRent?._id,
                price: items?.productRent?.price,
              },
              stock: items.stock,
              imageName: items.image,
              previewImage: `${process.env.REACT_APP_API_PATH}/uploads/${items.image}`,
            };
          })
        );
      });
    } else {
      setEnalbleRent(false);
      setProductName("");
      setProductType(null);
      setProductDescription("");
      setProductRent([
        {
          _id: "",
          price: "",
          product: "",
          productAttribute: "",
        },
      ]);
      setProductAttribute([
        {
          _id: "",
          color: "",
          size: {
            width: "",
            long: "",
            height: "",
          },
          productRent: {
            _id: "",
            price: "",
          },
          stock: "",
          imageName: "",
          previewImage: null,
        },
      ]);
    }
  }, [productId, editProductRentModalShow]);

  const editProductRent = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();

      formData.append("enableRent", enableRent);
      formData.append(
        "productRent",
        new Blob([JSON.stringify(productRent)], {
          type: "application/json",
        })
      );

      setFormData(formData);

      productRentService.updateProductRent(productId, formData).then((res) => {
        console.log("enable : ",res)
        table.draw();
        setEditProductRentModalShow(false);
      });
    }

    setValidated(true);
  };

  const setProductPrice = (value, productAttributeId) => {
    const price = !!value ? parseFloat(value) : 0;
    if (
      productRent.some((obj) => obj.productAttribute === productAttributeId)
    ) {
      const updatedProductRent = productRent.map((items) => {
        if (items.productAttribute === productAttributeId) {
          return { ...items, price };
        }
        return items;
      });
      setProductRent(updatedProductRent);
    } else {
      setProductRent([
        ...productRent,
        {
          price,
          product: productId,
          productAttribute: productAttributeId,
        },
      ]);
    }
  };

  return (
    <>
      <Modal
        id="edit-product-rent-modal"
        show={editProductRentModalShow}
        onHide={() => setEditProductRentModalShow(false)}
        aria-labelledby="contained-modal-title-center"
        scrollable={true}
        centered
      >
        <Modal.Header className="pb-0" closeButton></Modal.Header>
        <Modal.Body id="edit-product-rent-modal-body" className="px-4">
          <Row className="align-items-center modal-title">
            <Col className="d-flex justify-content-start">
              <div className="modal-title">จัดการรายการสินค้าเช่า</div>
            </Col>
          </Row>
          <Form
            id="edit-form"
            className="mt-3"
            noValidate
            validated={validated}
            onSubmit={editProductRent}
          >
            <Row className="align-items-center mb-3">
              <Col
                xs="3"
                sm="2"
                className="detail-title p-0 mx-3 d-flex justify-content-start"
              >
                เปิดให้เช่า :
              </Col>
              <Col className="p-0 mx-2">
                <Form.Group>
                  <Form.Check
                    type="switch"
                    onChange={(e) => {
                      setEnalbleRent(e.target.checked);
                    }}
                    checked={enableRent}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="align-items-center mb-3">
              <Col
                xs="3"
                sm="2"
                className="detail-title p-0 mx-3 d-flex justify-content-start"
              >
                ชื่อสินค้า :
              </Col>
              <Col className="p-0 mx-2">
                <Form.Group>
                  <Form.Control
                    className="p-2"
                    type="text"
                    defaultValue={productName}
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="align-items-center mb-3">
              <Col
                xs="3"
                sm="2"
                className="detail-title p-0 mx-3 d-flex justify-content-start"
              >
                ประเภท :
              </Col>
              <Col className="p-0 mx-2">
                <Form.Group>
                  <Form.Control
                    className="p-2"
                    type="text"
                    defaultValue={productType?.name}
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>
            {productAttribute.map((items) => {
              return (
                <div
                  key={items._id}
                  className="productAttribute-border p-3 mb-3"
                >
                  <Row className="mb-3">
                    <Col>
                      <label className="product-choice">ตัวเลือกสินค้า</label>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-3">
                    <Col xs="4" sm="3">
                      <label className="detail-title">ชื่อภาพ :</label>
                    </Col>
                    <Col className="p-0 mx-2">
                      <Form.Group>
                        <Form.Control
                          className="p-2"
                          type="text"
                          defaultValue={items.imageName}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  {items.previewImage && (
                    <Row className="mb-3">
                      <Col className="d-flex justify-content-center">
                        <img
                          src={items.previewImage}
                          draggable={false}
                          alt=""
                          width={200}
                        />
                      </Col>
                    </Row>
                  )}
                  <Row className="align-items-center mb-3">
                    <Col xs="4" sm="3" className="detail-title">
                      สีสินค้า :
                    </Col>
                    <Col className="p-0 mx-2">
                      <Form.Group>
                        <Form.Control
                          className="p-2"
                          type="text"
                          defaultValue={items.color}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-3">
                    <Col xs="3" className="detail-title">
                      ขนาด :
                    </Col>
                    <Col className="d-flex p-0 mx-2">
                      <Form.Group>
                        <Form.Control
                          className="p-2"
                          type="text"
                          defaultValue={items.size.width}
                          disabled
                        />
                      </Form.Group>
                      <Form.Group className="mx-1">
                        <Form.Control
                          className="p-2"
                          type="text"
                          defaultValue={items.size.long}
                          disabled
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          className="p-2"
                          type="text"
                          defaultValue={items.size.height}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-3">
                    <Col xs="4" sm="3" className="detail-title">
                      จำนวน :
                    </Col>
                    <Col className="p-0 mx-2">
                      <Form.Group>
                        <Form.Control
                          className="p-2"
                          type="text"
                          defaultValue={items.stock}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col xs="4" sm="3" className="detail-title">
                      ราคาเช่า :
                    </Col>
                    <Col className="p-0 mx-2">
                      <Form.Group controlId="price">
                        <Form.Control
                          className="p-2"
                          type="text"
                          placeholder="ราคาเช่าสินค้า"
                          defaultValue={items.productRent.price}
                          onChange={(e) => {
                            setProductPrice(e.target.value, items._id);
                          }}
                          required
                        />
                        <Form.Control.Feedback type="invalid" className="mx-1">
                          กรุณาระบุราคาสินค้า.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              );
            })}
            <Row className="mb-3">
              <Col>
                <Form.Group>
                  <Form.Control
                    className="p-2"
                    as="textarea"
                    rows={5}
                    defaultValue={productDescription}
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-end">
                <Button
                  variant="primary"
                  className="submit-button"
                  type="submit"
                >
                  ยืนยัน
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

export default EditProductRentModalComponent;
