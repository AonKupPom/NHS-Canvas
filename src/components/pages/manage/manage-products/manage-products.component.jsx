import "./manage-products.component.css";
import { Container } from "react-bootstrap";
import $ from "jquery";
import DataTables from "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { useEffect, useRef, useState } from "react";
import * as productService from "./../../../../services/product.service";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CreateProductModalComponent from "./manage-product-modal/create-product/create-product-modal.component";
import EditProductModalComponent from "./manage-product-modal/edit-product/edit-product-modal.component";
import DeleteProductModalComponent from "./manage-product-modal/delete-product/delete-product-modal.component";
import * as productTypeService from "./../../../../services/product-type.service";

const ManageUsersComponent = () => {
  const tableRef = useRef();
  const [createProductModalShow, setCreateProductModalShow] = useState(false);
  const [editProductModalShow, setEditProductModalShow] = useState(false);
  const [deleteProductModalShow, setDeleteProductModalShow] = useState(false);
  const [productId, setProductId] = useState(null);
  const [table, setTable] = useState(null);
  const [productTypes, setProductTypes] = useState(null);

  useEffect(() => {
    getAllProductTypes();
    const table = new DataTables(tableRef.current, {
      serverSide: true,
      ajax: (options, callback, settings) => {
        productService.getProductForDatatable(options).then((res) => {
          const products = res.data.map((items) => ({
            ...items,
            image: `${process.env.REACT_APP_API_PATH}/uploads/${items?.image}`,
          }));
          callback({
            recordsTotal: res.recordsTotal,
            recordsFiltered: res.recordsFiltered,
            data: products,
          });
        });
      },
      columns: [
        {
          title: "รูปภาพ",
          data: "image",
          render: (data) => {
            return `<img src="${data}" class="datatable-img" draggable="false" />`;
          },
          width: 100,
          className: "text-center",
        },
        { title: "ชื่อ", data: "name", className: "text-center" },
        { title: "ประเภท", data: "type.name", className: "text-center" },
        {
          title: "รายละเอียด",
          data: "description",
          className: "text-center multi-line",
        },
        {
          title: "จัดการ",
          data: "_id",
          className: "text-center",
          render: (data) => {
            $(document).on("click", `#edit-${data}`, (e) => {
              e.currentTarget.blur();
              setEditProductModalShow(true);
              setProductId(data);
            });

            $(document).on("click", `#delete-${data}`, (e) => {
              e.currentTarget.blur();
              setDeleteProductModalShow(true);
              setProductId(data);
            });
            return `<button id="edit-${data}" class="btn btn-outline-success m-1 datatable-btn">แก้ไข</button> <button id="delete-${data}" class="btn btn-outline-danger m-1 datatable-btn">ลบ</button>`;
          },
        },
      ],
      language: {
        emptyTable: "ไม่พบข้อมูลที่ท่านค้นหา",
        search: "ค้นหา",
        paginate: {
          first: "",
          last: "",
          next: "ถัดไป",
          previous: "ก่อนหน้า",
        },
        lengthMenu: "แสดง _MENU_ จำนวน",
        info: "แสดง _START_ ถึง _END_ จากทั้งหมด _TOTAL_",
        infoEmpty: "",
        zeroRecords: "ไม่พบข้อมูลที่ท่านค้นหา",
        infoFiltered: "ค้นหาจากทั้งหมด _MAX_ รายการ",
      },
      destroy: true,
      ordering: false,
      responsive: true,
      scrollX: true,
      lengthMenu: [5, 10, 20, 50],
      pageLength: 10,
    });

    setTable(table);
  }, []);

  const getAllProductTypes = () => {
    productTypeService.getAllProductTypes().then((res) => {
      setProductTypes(res);
    });
  };

  return (
    <>
      <Container className="mb-5">
        <Row className="align-items-center mb-4">
          <Col className="d-flex justify-content-start">
            <div className="page-title">รายละเอียดสินค้า</div>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              variant="outline-primary"
              onClick={(e) => {
                e.currentTarget.blur();
                setCreateProductModalShow(true);
              }}
            >
              เพิ่มสินค้า
            </Button>
          </Col>
        </Row>

        <table
          ref={tableRef}
          className="table table-striped table-borderless responsive-table"
        />
      </Container>

      <CreateProductModalComponent
        createProductModalShow={createProductModalShow}
        setCreateProductModalShow={setCreateProductModalShow}
        productTypes={productTypes}
        table={table}
      />

      <EditProductModalComponent
        editProductModalShow={editProductModalShow}
        setEditProductModalShow={setEditProductModalShow}
        productId={productId}
        productTypes={productTypes}
        table={table}
      />

      <DeleteProductModalComponent
        deleteProductModalShow={deleteProductModalShow}
        setDeleteProductModalShow={setDeleteProductModalShow}
        productId={productId}
        table={table}
      />
    </>
  );
};

export default ManageUsersComponent;
