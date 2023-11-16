import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './promotion.component.scss'


const Promotion = () => {
    return (
        <>
            <div className='mt-5 justify-content-center' align='center'>
                <Row className='justify-content-center'>
                    <Col md='12'>
                        <div align="left" className='py-2'>
                            <span className='next-promotion'>โปรโมชั่นและสิทธิพิเศษ</span>
                        </div>
                    </Col>
                    <Col md="6" align="center" className='py-2'>
                        <div className='month-promotion'>
                            <p className='paper-title'>โปรโมชั่นประจำเดือน</p>
                            <img src={require('../../../../assets/img/Ratchet-tie.png')} draggable='false' alt=''></img>
                        </div>
                        <div className='good-feedback mt-4'>
                            <p className='paper-title'>ได้รับการตอบรับดีเยี่ยม</p>
                            <img src={require('../../../../assets/img/steel-pipe.png')} draggable='false' alt=''></img>
                        </div>
                    </Col>
                    <Col md="3" sm='6' xs='6' align="center" className='py-2'>
                        <div className='exclusive-partner'>
                            <p className='pt-3'>สิทธิพิเศษ</p>
                            <p>จากพาร์ทเนอร์</p>
                            <img src={require('../../../../assets/img/partner.png')} draggable='false' alt=''></img>
                        </div>
                    </Col>
                    <Col md="3" sm='6' xs='6' align="center" className='py-2'>
                        <div className='popular-brand'>
                            <p className='pt-3'>สินค้าที่</p>
                            <p>ได้รับความนิยม</p>
                            <img src={require('../../../../assets/img/olive-green-canvas1.png')} draggable='false' alt=''></img>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='my-5 justify-content-center' align='center'>
                <Row>
                    <Col md="6" align="center">
                        <div align="left" className='py-3'>
                            <span className='next-promotion'>รับประกันคุณภาพสินค้า</span>
                        </div>
                        <div className='promotion-announce1'>
                            <img src={require('../../../../assets/img/announcement-3.jpg')} draggable='false' alt=''></img>
                        </div>
                    </Col>
                    <Col md="6" align="center">
                        <div align="left" className='py-3'>
                            <span className='next-promotion'>ผ้าใบคลุมรถบรรทุก</span>
                        </div>
                        <div className='promotion-announce2'>
                            <img src={require('../../../../assets/img/announcement-4.jpg')} draggable='false' alt=''></img>
                        </div>
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col md='3' className='d-flex justify-content-center my-1'>
                        <div className='promotion-heap'>
                            <img src={require('../../../../assets/img/28591bf3d6674cfdbbe48e99247e0aad.png')} className='promotion-heap-img' draggable='false' alt=''></img>
                        </div>
                        <Col>
                            <p align='left' className='promotion-heap-description px-2'>
                                ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                            </p>
                            <p align='left' className='promotion-heap-price px-2' >฿1,200 บาท</p>
                        </Col>
                    </Col>
                    <Col md='3' className='d-flex justify-content-center my-1'>
                        <div className='promotion-heap'>
                            <img src={require('../../../../assets/img/dog-x66.png')} className='promotion-heap-img' draggable='false' alt=''></img>
                        </div>
                        <Col>
                            <p align='left' className='promotion-heap-description px-2'>
                                ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                            </p>
                            <p align='left' className='promotion-heap-price px-2' >฿1,200 บาท</p>
                        </Col>
                    </Col>
                    <Col md='3' className='d-flex justify-content-center my-1'>
                        <div className='promotion-heap'>
                            <img src={require('../../../../assets/img/nylon-rope.png')} className='promotion-heap-img' draggable='false' alt=''></img>
                        </div>
                        <Col>
                            <p align='left' className='promotion-heap-description px-2'>
                                ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                            </p>
                            <p align='left' className='promotion-heap-price px-2' >฿1,200 บาท</p>
                        </Col>
                    </Col>
                    <Col md='3' className='d-flex justify-content-center my-1'>
                        <div className='promotion-heap'>
                            <img src={require('../../../../assets/img/plastictarpaulin.png')} className='promotion-heap-img' draggable='false' alt=''></img>
                        </div>
                        <Col>
                            <p align='left' className='promotion-heap-description px-2'>
                                ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                            </p>
                            <p align='left' className='promotion-heap-price px-2' >฿1,200 บาท</p>
                        </Col>
                    </Col>
                    <Col md='3' className='d-flex justify-content-center my-1'>
                        <div className='promotion-heap'>
                            <img src={require('../../../../assets/img/28591bf3d6674cfdbbe48e99247e0aad.png')} className='promotion-heap-img' draggable='false' alt=''></img>
                        </div>
                        <Col>
                            <p align='left' className='promotion-heap-description px-2'>
                                ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                            </p>
                            <p align='left' className='promotion-heap-price px-2' >฿1,200 บาท</p>
                        </Col>
                    </Col>
                    <Col md='3' className='d-flex justify-content-center my-1'>
                        <div className='promotion-heap'>
                            <img src={require('../../../../assets/img/dog-x66.png')} className='promotion-heap-img' draggable='false' alt=''></img>
                        </div>
                        <Col>
                            <p align='left' className='promotion-heap-description px-2'>
                                ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                            </p>
                            <p align='left' className='promotion-heap-price px-2' >฿1,200 บาท</p>
                        </Col>
                    </Col>
                    <Col md='3' className='d-flex justify-content-center my-1'>
                        <div className='promotion-heap'>
                            <img src={require('../../../../assets/img/nylon-rope.png')} className='promotion-heap-img' draggable='false' alt=''></img>
                        </div>
                        <Col>
                            <p align='left' className='promotion-heap-description px-2'>
                                ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                            </p>
                            <p align='left' className='promotion-heap-price px-2' >฿1,200 บาท</p>
                        </Col>
                    </Col>
                    <Col md='3' className='d-flex justify-content-center my-1'>
                        <div className='promotion-heap'>
                            <img src={require('../../../../assets/img/plastictarpaulin.png')} className='promotion-heap-img' draggable='false' alt=''></img>
                        </div>
                        <Col>
                            <p align='left' className='promotion-heap-description px-2'>
                                ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                            </p>
                            <p align='left' className='promotion-heap-price px-2' >฿1,200 บาท</p>
                        </Col>
                    </Col>
                    <Col md='3' className='d-flex justify-content-center my-1'>
                        <div className='promotion-heap'>
                            <img src={require('../../../../assets/img/28591bf3d6674cfdbbe48e99247e0aad.png')} className='promotion-heap-img' draggable='false' alt=''></img>
                        </div>
                        <Col>
                            <p align='left' className='promotion-heap-description px-2'>
                                ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                            </p>
                            <p align='left' className='promotion-heap-price px-2' >฿1,200 บาท</p>
                        </Col>
                    </Col>
                    <Col md='3' className='d-flex justify-content-center my-1'>
                        <div className='promotion-heap'>
                            <img src={require('../../../../assets/img/dog-x66.png')} className='promotion-heap-img' draggable='false' alt=''></img>
                        </div>
                        <Col>
                            <p align='left' className='promotion-heap-description px-2'>
                                ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                            </p>
                            <p align='left' className='promotion-heap-price px-2' >฿1,200 บาท</p>
                        </Col>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Promotion