import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./edit-product-modal.component.scss";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import * as productService from "./../../../../../../services/product.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faSol from "@fortawesome/free-solid-svg-icons";
import uuid from "react-uuid";

const EditProductModalComponent = ({
  editProductModalShow,
  setEditProductModalShow,
  productId,
  productTypes,
  table,
}) => {
  const [formData, setFormData] = useState(new FormData());
  const [validated, setValidated] = useState(false);
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productUploadFile, setProductUploadFile] = useState([]);
  const [productAttribute, setProductAttribute] = useState([
    {
      id: uuid(),
      _id: "",
      color: "",
      size: {
        width: "",
        long: "",
        height: "",
      },
      stock: "",
      defaultImage: "",
      image: "",
      imageName: "กรุณาเลือกภาพสินค้า",
      imageNameClass: "file-name-before",
      previewImage: null,
    },
  ]);

  // const dataURLtoFile = (dataurl, filename) => {
  //   var arr = dataurl.split(","),
  //     mime = arr[0].match(/:(.*?);/)[1],
  //     bstr = atob(arr[1]),
  //     n = bstr.length,
  //     u8arr = new Uint8Array(n);

  //   while (n--) {
  //     u8arr[n] = bstr.charCodeAt(n);
  //   }

  //   return new File([u8arr], filename, { type: mime });
  // };

  useEffect(() => {
    if (editProductModalShow) {
      productService.getWithProductAttribute(productId).then((res) => {
        setValidated(false);
        setFormData(new FormData());
        setProductName(res?.name);
        setProductType(res?.type);
        setProductDescription(res?.description);
        setProductImage(res?.image);
        setProductUploadFile([]);
        setProductAttribute(
          res?.productAttribute.map((items) => {
            return {
              id: uuid(),
              _id: items._id,
              color: items.color,
              size: {
                width: items.size.width,
                long: items.size.long,
                height: items.size.height,
              },
              stock: items.stock,
              defaultImage: items.image,
              image: items.image,
              imageName: items.image,
              imageNameClass: "file-name-after",
              previewImage: `${process.env.REACT_APP_API_PATH}/uploads/${items.image}`,
            };
          })
        );
      });
    } else {
      setProductName("");
      setProductType("");
      setProductDescription("");
      setProductImage("");
      setProductUploadFile([]);
      setProductAttribute([
        {
          id: uuid(),
          _id: "",
          color: "",
          size: {
            width: "",
            long: "",
            height: "",
          },
          stock: "",
          defaultImage: "",
          image: "",
          imageName: "กรุณาเลือกภาพสินค้า",
          imageNameClass: "file-name-before",
          previewImage: null,
        },
      ]);
    }
  }, [productId, editProductModalShow]);

  const editProduct = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();

      const product = {
        _id: productId,
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
      productUploadFile.map((items) => {
        formData.append("files", items.file);
        return null;
      });

      setFormData(formData);

      productService.updateProduct(productId, formData).then(() => {
        table.draw();
        setEditProductModalShow(false);
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
          if (
            !!items.defaultImage &&
            !formData.getAll("filesDelete").includes(items.defaultImage)
          ) {
            formData.append("filesDelete", items.defaultImage);
          }
          const files = {
            id,
            file: newFile,
          };
          setProductUploadFile([
            ...productUploadFile.filter((items) => items.id !== id),
            files,
          ]);
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
      defaultImage: "",
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
          <Form
            id="edit-form"
            className="mt-3"
            noValidate
            validated={validated}
            onSubmit={editProduct}
          >
            <Row className="align-items-center mb-3">
              <Col
                xs="3"
                sm="2"
                className="detail-title p-0 mx-3 d-flex justify-content-start"
              >
                ชื่อสินค้า :
              </Col>
              <Col className="p-0 mx-2">
                <Form.Group controlId="name">
                  <Form.Control
                    className="p-2"
                    type="text"
                    placeholder="กรุณาระบุชื่อสินค้า"
                    onChange={(e) => setProductName(e.target.value)}
                    defaultValue={productName}
                    required
                  />
                  <Form.Control.Feedback type="invalid" className="mx-1">
                    กรุณาระบุชื่อสินค้า.
                  </Form.Control.Feedback>
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
                <Form.Group controlId="type">
                  <Form.Control
                    className="p-2 form-select"
                    as="select"
                    value={productType}
                    onChange={(e) => {
                      setProductType(e.target.value);
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
                            setProductUploadFile(
                              productUploadFile.filter(
                                (upload) => upload.id !== items.id
                              )
                            );
                            if (
                              !!items._id &&
                              !formData
                                .getAll("filesDelete")
                                .includes(items.defaultImage)
                            ) {
                              formData.append(
                                "filesDelete",
                                items.defaultImage
                              );
                            }
                            if (!!items._id) {
                              formData.append(
                                "productAttributeDelete",
                                items._id
                              );
                            }
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
                        {!!items.image ? (
                          <Form.Control
                            type="file"
                            onChange={(e) => {
                              setProductFile(e.target.files[0], items.id);
                            }}
                            accept="image/png, image/jpeg"
                            hidden
                          />
                        ) : (
                          <Form.Control
                            type="file"
                            onChange={(e) => {
                              setProductFile(e.target.files[0], items.id);
                            }}
                            accept="image/png, image/jpeg"
                            hidden
                            required
                          />
                        )}
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
                  <Row className="align-items-center mb-3">
                    <Col xs="4" sm="3" className="detail-title">
                      สีสินค้า :
                    </Col>
                    <Col className="p-0 mx-2">
                      <Form.Group controlId="color">
                        <Form.Control
                          className="p-2"
                          type="text"
                          placeholder="กรุณาระบุสีสินค้า"
                          onChange={(e) => {
                            setProductColor(e.target.value, items.id);
                          }}
                          defaultValue={items.color}
                          required
                        />
                        <Form.Control.Feedback type="invalid" className="mx-1">
                          กรุณาระบุสีของสินค้า.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-3">
                    <Col xs="3" className="detail-title">
                      ขนาด :
                    </Col>
                    <Col className="d-flex p-0 mx-2">
                      <Form.Group controlId="width">
                        <Form.Control
                          className="p-2"
                          type="text"
                          placeholder="กว้าง"
                          onChange={(e) => {
                            setProductSize(e.target.value, items.id, "width");
                          }}
                          defaultValue={items.size.width}
                          required
                        />
                        <Form.Control.Feedback type="invalid" className="mx-1">
                          กรุณาระบุความกว้าง.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mx-1" controlId="long">
                        <Form.Control
                          className="p-2"
                          type="text"
                          placeholder="ยาว"
                          onChange={(e) => {
                            setProductSize(e.target.value, items.id, "long");
                          }}
                          defaultValue={items.size.long}
                          required
                        />
                        <Form.Control.Feedback type="invalid" className="mx-1">
                          กรุณาระบุความยาว.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="height">
                        <Form.Control
                          className="p-2"
                          type="text"
                          placeholder="สูง"
                          onChange={(e) => {
                            setProductSize(e.target.value, items.id, "height");
                          }}
                          defaultValue={items.size.height}
                          required
                        />
                        <Form.Control.Feedback type="invalid" className="mx-1">
                          กรุณาระบุความสูง.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col xs="4" sm="3" className="detail-title">
                      จำนวน :
                    </Col>
                    <Col className="p-0 mx-2">
                      <Form.Group controlId="stock">
                        <Form.Control
                          className="p-2"
                          type="text"
                          placeholder="กรุณาระบุจำนวนสินค้า"
                          onChange={(e) =>
                            setProductStock(e.target.value, items.id)
                          }
                          defaultValue={items.stock}
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
                  className="new-product-attribute mb-3"
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
                    placeholder="กรุณาระบุรายละเอียด"
                    onChange={(e) => setProductDescription(e.target.value)}
                    defaultValue={productDescription}
                    required
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
