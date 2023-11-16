import "./manage-product-rent.component.scss";
import { Container } from "react-bootstrap";
import $ from "jquery";
import DataTables from "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { useEffect, useRef, useState } from "react";
import * as productService from "./../../../../services/product.service";
// import * as productRentService from "./../../../../services/product-rent.service";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EditProductRentModalComponent from "./manage-product-rent-modal/edit-product-rent/edit-product-rent-modal.component";

const ManageProductRentComponent = () => {
  const tableRef = useRef();
  const [editProductRentModalShow, setEditProductRentModalShow] =
    useState(false);
  const [productId, setProductId] = useState(null);
  const [table, setTable] = useState(null);

  useEffect(() => {
    const table = new DataTables(tableRef.current, {
      serverSide: true,
      ajax: (options, callback, settings) => {
        productService.getProductForDatatable(options).then((res) => {
          const products = res.data.map((items) => ({
            ...items,
            image: `${process.env.REACT_APP_API_PATH}/uploads/${items?.image}`,
            enable: items.enableRent ? "เปิดให้เช่า" : "ไม่เปิดให้เช่า",
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
          title: "เปิดใช้งานการเช่า",
          data: "enable",
          render: (data) => {
            const enableRentClass =
              data === "เปิดให้เช่า" ? "enableRent" : "disableRent";
            return `<div class="row align-items-center"><div class="col d-flex justify-content-center"><div class="${enableRentClass}">${data}</div></div></div>`;
          },
          className: "text-center",
        },
        {
          title: "จัดการสินค้าเช่า",
          data: "_id",
          className: "text-center",
          render: (data) => {
            $(document).on("click", `#${data}`, (e) => {
              e.currentTarget.blur();
              setEditProductRentModalShow(true);
              setProductId(data);
            });

            return `
            <button id="${data}" class="btn btn-outline-success m-1 datatable-btn">
            <div class="d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
              </svg>
              &nbsp;
              จัดการ
            </div>
            </button>`;
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

  return (
    <>
      <Container className="mb-5">
        <Row className="align-items-center mb-4">
          <Col className="d-flex justify-content-start">
            <div className="page-title">จัดการรายการสินค้าเช่า</div>
          </Col>
        </Row>

        <table
          ref={tableRef}
          className="table table-striped table-borderless responsive-table"
        />
      </Container>

      <EditProductRentModalComponent
        editProductRentModalShow={editProductRentModalShow}
        setEditProductRentModalShow={setEditProductRentModalShow}
        productId={productId}
        table={table}
      />
    </>
  );
};

export default ManageProductRentComponent;
