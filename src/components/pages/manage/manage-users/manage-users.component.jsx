import "./manage-users.component.css";
import { Container } from "react-bootstrap";
import $ from "jquery";
import DataTables from "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { useEffect, useRef } from "react";
import * as userService from "../../../../services/user.service";

const ManageUsersComponent = () => {
  const tableRef = useRef();

  useEffect(() => {
    new DataTables(tableRef.current, {
      serverSide: true,
      ajax: (options, callback, settings) => {
        userService.getAllForDatatable(options).then((res) => {
          const users = res.data.map((items) => ({
            ...items,
            image: require("./../../../../assets/img/48.png"),
          }));
          callback({
            recordsTotal: res.recordsTotal,
            recordsFiltered: res.recordsFiltered,
            data: users,
          });
        });
      },
      columns: [
        {
          title: "รูปภาพ",
          data: "image",
          render: (data) => {
            return '<img src="' + data + '" />';
          },
          width: 90,
          className: "text-center",
        },
        { title: "ชื่อ", data: "firstName" },
        { title: "นามสกุล", data: "lastName" },
        { title: "วันเกิด", data: "birthDate", className: "text-center" },
        { title: "เพศ", data: "gender", className: "text-center" },
        { title: "อีเมล", data: "email", className: "text-center" },
        { title: "เบอร์โทร", data: "phone", className: "text-center" },
        {
          title: "จัดการ",
          data: "_id",
          className: "text-center",
          render: (data) => {
            $("#" + data).on("click", (res) => {
              console.log(res);
            });
            return (
              '<button id="' +
              data +
              '" class="btn btn-success m-1 datatable-btn">แก้ไข</button> <button class="btn btn-danger m-1 datatable-btn">ลบ</button>'
            );
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
      lengthMenu: [5, 10, 20, 50, 100],
    });
  }, []);

  return (
    <>
      <Container>
        <table
          ref={tableRef}
          className="table table-striped table-borderless responsive-table"
        />
      </Container>
    </>
  );
};

export default ManageUsersComponent;
