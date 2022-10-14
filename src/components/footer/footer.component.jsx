import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as bi from 'react-bootstrap-icons'
import './footer.component.css'
import { Link } from "react-router-dom";

export default function FooterComponent() {
    return (
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex align-items-center px-5'>
                    <MDBContainer>
                        <MDBRow className='mt-2 align-items-center'>
                            <MDBCol md="5" lg="6" xl="6" className='py-4'>
                                <span className='footer-contact'>ห้างผ้าใบ น่ำ ฮั่ว เซ้ง</span>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2">
                            </MDBCol>

                            {/* <MDBCol md="2" lg="2" xl="2">
                            </MDBCol> */}

                            <MDBCol md="5" lg="4" xl="4">
                                <Row className='justify-content-end'>
                                    <Col md="2" className='d-flex justify-content-center py-2 px-0'>
                                        <bi.Facebook size={25} />
                                    </Col>
                                    <Col md="2" className='d-flex justify-content-center py-2 px-0'>
                                        <bi.Instagram size={25} />
                                    </Col>
                                    <Col md="2" className='d-flex justify-content-center py-2 px-0'>
                                        <bi.Twitter size={25} />
                                    </Col>
                                    <Col md="2" className='d-flex justify-content-center py-2 px-0'>
                                        <bi.Line size={25} />
                                    </Col>
                                </Row>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
                <div className='border-bottom'></div>
                <section>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="5" lg="6" xl="5" className='mb-4 mr-auto'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    บริษัท
                                </h6>
                                <p>
                                    ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์ กันสาดผ้าใบ ผ้าใบคลุมรถบรรทุก รับทำเบาะรถยนต์ เบาะรถโดยสาร พร้อมงานซ่อมผ้าใบทุกชนิด
                                    งานหุ้มเบาะรถ และงานเย็บผ้าใบอื่นๆ เรามีช่างและเครื่องจักรทันสมัยเย็บเชื่อมผ้าใบแบบไร้ตะเข็บ เชื่อมด้วยระบบไมโครเวฟกันน้ำรั่วซึม 100%
                                    รับงานตามออเดอร์ตามแบบของลูกค้า ร้านอยู่ริมถนนห่างสี่แยกสะพานลอยหินกอง 500 เมตร
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mb-4 mr-auto'>
                                <h6 className='text-uppercase fw-bold mb-4'>สินค้า</h6>
                                <p>
                                    <Link to={''} className='text-reset'>
                                        ซื้อเต็นท์
                                    </Link>
                                </p>
                                <p>
                                    <Link to={''} className='text-reset'>
                                        เช่าเต็นท์
                                    </Link>
                                </p>
                                <p>
                                    <Link to={''} className='text-reset'>
                                        งานเบาะและผ้าใบ
                                    </Link>
                                </p>
                                <p>
                                    <Link to={''} className='text-reset'>
                                        อุปกรณ์เสริม
                                    </Link>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mb-md-0 mb-2'>
                                <h6 className='text-uppercase fw-bold mb-4'>ติดต่อเรา</h6>
                                <p>
                                    180/40-42 ตลาดหินกอง ตำบลห้วยทราย อำเภอหนองแค จังหวัดสระบุรี
                                </p>
                                <p>
                                    nhs@gmail.com
                                </p>
                                <p>
                                    081-9943319
                                </p>
                                <p>
                                    0-3637-9346
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mb-4 ar-auto'>
                                <h6 className='text-uppercase fw-bold mb-4'>เพิ่มเพื่อน</h6>
                                <div className='d-flex justify-content-center'>
                                    <img src={require('../../assets/img/qrcode.png')} alt='' id='qrcode' draggable='false'></img>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className='mt-3'>
                            <MDBCol md="12" lg="12" xl="12" className='mb-5'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    ช่องทางการชำระเงิน
                                </h6>
                                <MDBRow>
                                    <MDBCol>
                                        <MDBRow>
                                            <MDBCol><img src={require('../../assets/img/bbl.png')} alt='' draggable='false' className='payment'></img></MDBCol>
                                            <MDBCol><img src={require('../../assets/img/kbank.png')} alt='' draggable='false' className='payment'></img></MDBCol>
                                            <MDBCol><img src={require('../../assets/img/kcc.png')} alt='' draggable='false' className='payment'></img></MDBCol>
                                            <MDBCol><img src={require('../../assets/img/scb.png')} alt='' draggable='false' className='payment'></img></MDBCol>
                                            <MDBCol><img src={require('../../assets/img/city.png')} alt='' draggable='false' className='payment'></img></MDBCol>
                                            <MDBCol><img src={require('../../assets/img/uob.png')} alt='' draggable='false' className='payment'></img></MDBCol>
                                            <MDBCol><img src={require('../../assets/img/ktc.png')} alt='' draggable='false' className='payment'></img></MDBCol>
                                            <MDBCol><img src={require('../../assets/img/mastercard.png')} alt='' draggable='false' className='payment'></img></MDBCol>
                                            <MDBCol><img src={require('../../assets/img/visa.png')} alt='' draggable='false' className='payment'></img></MDBCol>
                                        </MDBRow>
                                    </MDBCol>
                                    <MDBCol>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                {/* <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                NHS Canvas <span className='nhs-limited'>©</span> 2022
            </div> */}
            </MDBFooter>
    );
}