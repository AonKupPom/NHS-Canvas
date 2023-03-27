import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./create-product-modal.component.css";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import * as productService from "./../../../../../../services/product.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faSol from "@fortawesome/free-solid-svg-icons";
import uuid from "react-uuid";

const CreateProductModalComponent = ({
  createProductModalShow,
  setCreateProductModalShow,
  productTypes,
  table,
}) => {
  const [validated, setValidated] = useState(false);
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productTypeClass, setProductTypeClass] =
    useState("productType-before");
  const [allProductFile, setAllProductFile] = useState([]);
  const [productAttribute, setProductAttribute] = useState([
    {
      id: uuid(),
      color: "",
      size: {
        width: "",
        long: "",
        height: "",
      },
      stock: "",
      image: "",
      imageName: "กรุณาเลือกภาพสินค้า",
      imageNameClass: "file-name-before",
      previewImage: null,
    },
  ]);

  useEffect(() => {
    setValidated(false);
    setProductName("");
    setProductType("");
    setProductDescription("");
    setProductImage("");
    setProductTypeClass("productType-before");
    setAllProductFile([]);
    setProductAttribute([
      {
        id: uuid(),
        color: "",
        size: {
          width: "",
          long: "",
          height: "",
        },
        stock: "",
        image: "",
        imageName: "กรุณาเลือกภาพสินค้า",
        imageNameClass: "file-name-before",
        previewImage: null,
      },
    ]);
  }, [createProductModalShow]);

  const newProduct = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      const formData = new FormData();
      const product = {
        name: productName,
        type: productType,
        description: productDescription,
        image: productImage,
      };
      formData.append(
        "product",
        new Blob([JSON.stringify(product)], { type: "application/json" })
      );
      formData.append(
        "productAttribute",
        new Blob([JSON.stringify(productAttribute)], {
          type: "application/json",
        })
      );
      allProductFile.map((items) => {
        formData.append("files", items);
        return null;
      });
      productService.newProduct(formData).then(() => {
        table.draw();
        setCreateProductModalShow(false);
      });
    }

    setValidated(true);
  };

  const setProductColor = (color, id) => {
    const updatedProductAttribute = productAttribute.map((items) => {
      if (items.id === id) {
        return { ...items, color };
      }
      return items;
    });
    setProductAttribute(updatedProductAttribute);
  };

  const setProductSize = (size, id, type) => {
    const value = !!size ? parseFloat(size) : 0;
    const updatedProductAttribute = productAttribute.map((items) => {
      if (items.id === id && type === "width") {
        return { ...items, size: { ...items.size, width: value } };
      } else if (items.id === id && type === "long") {
        return { ...items, size: { ...items.size, long: value } };
      } else if (items.id === id && type === "height") {
        return { ...items, size: { ...items.size, height: value } };
      }
      return items;
    });
    setProductAttribute(updatedProductAttribute);
  };

  const setProductStock = (stock, id) => {
    const value = !!stock ? parseInt(stock) : 0;
    const updatedProductAttribute = productAttribute.map((items) => {
      if (items.id === id) {
        return { ...items, stock: value };
      }
      return items;
    });
    setProductAttribute(updatedProductAttribute);
  };

  const setProductFile = (file, id) => {
    if (!file) return;
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      const updatedProductAttribute = productAttribute.map((items, index) => {
        if (items.id === id) {
          const newFile = new File(
            [file],
            `${Date.now().toString()}.${file?.name?.split(".").pop()}`
          );
          setAllProductFile([...allProductFile, newFile]);
          if (index === 0) {
            setProductImage(newFile.name);
          }
          return {
            ...items,
            image: newFile.name,
            imageName: file.name,
            imageNameClass: "file-name-after",
            previewImage: reader.result,
          };
        }
        return items;
      });
      setProductAttribute(updatedProductAttribute);
    };
  };

  const addNewProductAttribute = () => {
    const newProductAttribute = {
      id: uuid(),
      color: "",
      size: {
        width: "",
        long: "",
        height: "",
      },
      stock: "",
      image: "",
      imageName: "กรุณาเลือกภาพสินค้า",
      imageNameClass: "file-name-before",
      previewImage: null,
    };
    setProductAttribute([...productAttribute, newProductAttribute]);
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
          <Form
            noValidate
            validated={validated}
            className="mt-3"
            onSubmit={newProduct}
          >
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Control
                    className="p-2"
                    type="text"
                    placeholder="ชื่อสินค้า"
                    onChange={(e) => setProductName(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid" className="mx-1">
                    กรุณาระบุชื่อสินค้า.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="type">
                  <Form.Control
                    className={`${productTypeClass} p-2 form-select`}
                    as="select"
                    value={productType}
                    onChange={(e) => {
                      setProductType(e.target.value);
                      setProductTypeClass("");
                    }}
                    required
                  >
                    <option value="" disabled hidden>
                      กรุณาเลือกประเภทสินค้า
                    </option>
                    {productTypes?.map((items) => {
                      return (
                        <option key={items._id} value={items._id}>
                          {items.name}
                        </option>
                      );
                    })}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid" className="mx-1">
                    กรุณาเลือกประเภทสินค้า.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            {productAttribute.map((items, index) => {
              return (
                <div
                  key={items.id}
                  className="productAttribute-border p-3 mb-3"
                >
                  <Row className="mb-3">
                    <Col>
                      <label className="product-choice">ตัวเลือกสินค้า</label>
                    </Col>
                    {index !== 0 && (
                      <Col className="d-flex justify-content-end">
                        <FontAwesomeIcon
                          icon={faSol.faXmark}
                          size="lg"
                          className="productAttribute-xmark"
                          onClick={() => {
                            setProductAttribute(
                              productAttribute.filter((productAttribute) => {
                                return productAttribute.id !== items.id;
                              })
                            );
                          }}
                        />
                      </Col>
                    )}
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-3"
                        controlId={`files-${items.id}`}
                      >
                        <Form.Control
                          type="file"
                          onChange={(e) => {
                            setProductFile(e.target.files[0], items.id);
                          }}
                          accept="image/png, image/jpeg"
                          hidden
                          required
                        />
                        <label
                          htmlFor={`files-${items.id}`}
                          className="upload-button"
                        >
                          อัพโหลด
                        </label>
                        <label className={`${items.imageNameClass} mx-3`}>
                          {items.imageName}
                        </label>
                        <Form.Control.Feedback type="invalid" className="mx-1">
                          กรุณาเลือกภาพสินค้า.
                        </Form.Control.Feedback>
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
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="color">
                        <Form.Control
                          className="p-2"
                          type="text"
                          placeholder="สี"
                          onChange={(e) => {
                            setProductColor(e.target.value, items.id);
                          }}
                          required
                        />
                        <Form.Control.Feedback type="invalid" className="mx-1">
                          กรุณาระบุสีของสินค้า.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="d-flex">
                      <Form.Group className="mb-3" controlId="width">
                        <Form.Control
                          className="p-2"
                          type="text"
                          placeholder="กว้าง"
                          onChange={(e) => {
                            setProductSize(e.target.value, items.id, "width");
                          }}
                          required
                        />
                        <Form.Control.Feedback type="invalid" className="mx-1">
                          กรุณาระบุความกว้าง.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3 mx-1" controlId="long">
                        <Form.Control
                          className="p-2"
                          type="text"
                          placeholder="ยาว"
                          onChange={(e) => {
                            setProductSize(e.target.value, items.id, "long");
                          }}
                          required
                        />
                        <Form.Control.Feedback type="invalid" className="mx-1">
                          กรุณาระบุความยาว.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="height">
                        <Form.Control
                          className="p-2"
                          type="text"
                          placeholder="สูง"
                          onChange={(e) => {
                            setProductSize(e.target.value, items.id, "height");
                          }}
                          required
                        />
                        <Form.Control.Feedback type="invalid" className="mx-1">
                          กรุณาระบุความสูง.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="stock">
                        <Form.Control
                          className="p-2"
                          type="text"
                          placeholder="จำนวนสินค้า"
                          onChange={(e) =>
                            setProductStock(e.target.value, items.id)
                          }
                          required
                        />
                        <Form.Control.Feedback type="invalid" className="mx-1">
                          กรุณาระบุจำนวนสินค้า.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              );
            })}
            <Row>
              <Col>
                <Button
                  variant="primary"
                  className="submit-login-button mb-3"
                  onClick={() => {
                    addNewProductAttribute();
                  }}
                >
                  + เพิ่มตัวเลือกสินค้า
                </Button>
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
                    required
                  />
                  <Form.Control.Feedback type="invalid" className="mx-1">
                    กรุณาระบุรายละเอียดสินค้า.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-end">
                <Button
                  variant="primary"
                  className="submit-login-button"
                  type="submit"
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
