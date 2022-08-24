import React from 'react';
import './product-list.component.css';
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Slider from "react-slick";

const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const ProductList = () => {
    return (
        <>
            <div className='my-5'>

                <div className='my-5 justify-content-center' align='center'>
                    <Row>
                        <Col md="6" align="center">
                            <div align="left" className='py-3'>
                                <span className='next-promotion'>ผ้าใบคุณภาพดี ฝีมือประณีต</span>
                            </div>
                            <div className='product-announce1'>
                                <img src={require('../../../../assets/img/announcement-1.jpg')} draggable='false' alt=''></img>
                            </div>
                        </Col>
                        <Col md="6" align="center">
                            <div align="left" className='py-3'>
                                <span className='next-promotion'>อุปกรณ์เสริม ราคาโดนใจ</span>
                            </div>
                            <div className='product-announce2'>
                                <img src={require('../../../../assets/img/announcement-2.jpg')} draggable='false' alt=''></img>
                            </div>
                        </Col>
                    </Row>
                    <Row className='my-5 pb-5'>
                        <Col md='3' className='d-flex justify-content-center my-1'>
                            <div className='product-heap'>
                                <img src={require('../../../../assets/img/28591bf3d6674cfdbbe48e99247e0aad.png')} className='product-heap-img' draggable='false' alt=''></img>
                            </div>
                            <Col>
                                <p align='left' className='product-heap-description px-2'>
                                    ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                                </p>
                                <p align='left' className='product-heap-price px-2' >฿1,200 บาท</p>
                            </Col>
                        </Col>
                        <Col md='3' className='d-flex justify-content-center my-1'>
                            <div className='product-heap'>
                                <img src={require('../../../../assets/img/dog-x66.png')} className='product-heap-img' draggable='false' alt=''></img>
                            </div>
                            <Col>
                                <p align='left' className='product-heap-description px-2'>
                                    ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                                </p>
                                <p align='left' className='product-heap-price px-2' >฿1,200 บาท</p>
                            </Col>
                        </Col>
                        <Col md='3' className='d-flex justify-content-center my-1'>
                            <div className='product-heap'>
                                <img src={require('../../../../assets/img/nylon-rope.png')} className='product-heap-img' draggable='false' alt=''></img>
                            </div>
                            <Col>
                                <p align='left' className='product-heap-description px-2'>
                                    ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                                </p>
                                <p align='left' className='product-heap-price px-2' >฿1,200 บาท</p>
                            </Col>
                        </Col>
                        <Col md='3' className='d-flex justify-content-center my-1'>
                            <div className='product-heap'>
                                <img src={require('../../../../assets/img/plastictarpaulin.png')} className='product-heap-img' draggable='false' alt=''></img>
                            </div>
                            <Col>
                                <p align='left' className='product-heap-description px-2'>
                                    ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                                </p>
                                <p align='left' className='product-heap-price px-2' >฿1,200 บาท</p>
                            </Col>
                        </Col>
                        <Col md='3' className='d-flex justify-content-center my-1'>
                            <div className='product-heap'>
                                <img src={require('../../../../assets/img/28591bf3d6674cfdbbe48e99247e0aad.png')} className='product-heap-img' draggable='false' alt=''></img>
                            </div>
                            <Col>
                                <p align='left' className='product-heap-description px-2'>
                                    ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                                </p>
                                <p align='left' className='product-heap-price px-2' >฿1,200 บาท</p>
                            </Col>
                        </Col>
                        <Col md='3' className='d-flex justify-content-center my-1'>
                            <div className='product-heap'>
                                <img src={require('../../../../assets/img/dog-x66.png')} className='product-heap-img' draggable='false' alt=''></img>
                            </div>
                            <Col>
                                <p align='left' className='product-heap-description px-2'>
                                    ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                                </p>
                                <p align='left' className='product-heap-price px-2' >฿1,200 บาท</p>
                            </Col>
                        </Col>
                        <Col md='3' className='d-flex justify-content-center my-1'>
                            <div className='product-heap'>
                                <img src={require('../../../../assets/img/nylon-rope.png')} className='product-heap-img' draggable='false' alt=''></img>
                            </div>
                            <Col>
                                <p align='left' className='product-heap-description px-2'>
                                    ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                                </p>
                                <p align='left' className='product-heap-price px-2' >฿1,200 บาท</p>
                            </Col>
                        </Col>
                        <Col md='3' className='d-flex justify-content-center my-1'>
                            <div className='product-heap'>
                                <img src={require('../../../../assets/img/plastictarpaulin.png')} className='product-heap-img' draggable='false' alt=''></img>
                            </div>
                            <Col>
                                <p align='left' className='product-heap-description px-2'>
                                    ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                                </p>
                                <p align='left' className='product-heap-price px-2' >฿1,200 บาท</p>
                            </Col>
                        </Col>
                        <Col md='3' className='d-flex justify-content-center my-1'>
                            <div className='product-heap'>
                                <img src={require('../../../../assets/img/28591bf3d6674cfdbbe48e99247e0aad.png')} className='product-heap-img' draggable='false' alt=''></img>
                            </div>
                            <Col>
                                <p align='left' className='product-heap-description px-2'>
                                    ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                                </p>
                                <p align='left' className='product-heap-price px-2' >฿1,200 บาท</p>
                            </Col>
                        </Col>
                        <Col md='3' className='d-flex justify-content-center my-1'>
                            <div className='product-heap'>
                                <img src={require('../../../../assets/img/dog-x66.png')} className='product-heap-img' draggable='false' alt=''></img>
                            </div>
                            <Col>
                                <p align='left' className='product-heap-description px-2'>
                                    ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                                </p>
                                <p align='left' className='product-heap-price px-2' >฿1,200 บาท</p>
                            </Col>
                        </Col>
                        <Col md='3' className='d-flex justify-content-center my-1'>
                            <div className='product-heap'>
                                <img src={require('../../../../assets/img/nylon-rope.png')} className='product-heap-img' draggable='false' alt=''></img>
                            </div>
                            <Col>
                                <p align='left' className='product-heap-description px-2'>
                                    ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                                </p>
                                <p align='left' className='product-heap-price px-2' >฿1,200 บาท</p>
                            </Col>
                        </Col>
                        <Col md='3' className='d-flex justify-content-center my-1'>
                            <div className='product-heap'>
                                <img src={require('../../../../assets/img/plastictarpaulin.png')} className='product-heap-img' draggable='false' alt=''></img>
                            </div>
                            <Col>
                                <p align='left' className='product-heap-description px-2'>
                                    ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                                </p>
                                <p align='left' className='product-heap-price px-2' >฿1,200 บาท</p>
                            </Col>
                        </Col>
                    </Row>
                </div>

                <div className='justify-content-center'>
                    <Row>
                        <Col md="12" align="center">
                            <div className='best-seller-banner'>
                                {/* <img src={require('../../../../assets/img/VDO-Ninebot-KickScooter-Max.jpg')} draggable='false' alt=''></img> */}
                                <p align='left'>สินค้าขายดี...แนะนำสำหรับคุณ</p>
                                <span>Canvas</span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Slider {...settings} className='mb-5'>
                    <Col className='d-flex justify-content-center my-3'>
                        <div className="card">
                            <div className="imgBx">
                                <img src={require('../../../../assets/img/48.png')} alt='' />
                            </div>
                            <div className="contentBx">
                                <h2 className='mb-2'>เต็นท์โค้ง</h2>
                                <div className="size d-flex align-items-center" align='center'>
                                    <h3 className="mt-2">ขนาด :</h3>
                                    <span>4X8</span>
                                    <span>4X10</span>
                                    <span>5X8</span>
                                    <span>5X10</span>
                                </div>
                                <div className="color">
                                    <h3 className='mt-2'>สี :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="price mb-2">
                                    <h3 className='mt-2'>ราคา :</h3>
                                    <span>1,200 บาท</span>
                                </div>
                                    <Link to={''}>เพิ่มในรถเข็น</Link>
                            </div>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center my-3'>
                        <div className="card">
                            <div className="imgBx">
                                <img src={require('../../../../assets/img/front-gabletent.png')} alt='' />
                            </div>
                            <div className="contentBx">
                                <h2 className='mb-2'>เต็นท์จั่วสั้น</h2>
                                <div className="size d-flex align-items-center" align='center'>
                                    <h3 className="mt-2">ขนาด :</h3>
                                    <span>4X8</span>
                                    <span>4X10</span>
                                    <span>5X8</span>
                                    <span>5X10</span>
                                </div>
                                <div className="color">
                                    <h3 className='mt-2'>สี :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="price mb-2">
                                    <h3 className='mt-2'>ราคา :</h3>
                                    <span>1,200 บาท</span>
                                </div>
                                    <Link to={''}>เพิ่มในรถเข็น</Link>
                            </div>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center my-3'>
                        <div className="card">
                            <div className="imgBx">
                                <img src={require('../../../../assets/img/side-gable.png')} alt='' />
                            </div>
                            <div className="contentBx">
                                <h2 className='mb-2'>เต็นท์จั่วยาว</h2>
                                <div className="size d-flex align-items-center" align='center'>
                                    <h3 className="mt-2">ขนาด :</h3>
                                    <span>4X8</span>
                                    <span>4X10</span>
                                    <span>5X8</span>
                                    <span>5X10</span>
                                </div>
                                <div className="color">
                                    <h3 className='mt-2'>สี :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="price mb-2">
                                    <h3 className='mt-2'>ราคา :</h3>
                                    <span>1,200 บาท</span>
                                </div>
                                    <Link to={''}>เพิ่มในรถเข็น</Link>
                            </div>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center my-3'>
                        <div className="card">
                            <div className="imgBx">
                                <img src={require('../../../../assets/img/48.png')} alt='' />
                            </div>
                            <div className="contentBx">
                                <h2 className='mb-2'>เต็นท์ต้นแบบ</h2>
                                <div className="size d-flex align-items-center" align='center'>
                                    <h3 className="mt-2">ขนาด :</h3>
                                    <span>4X8</span>
                                    <span>4X10</span>
                                    <span>5X8</span>
                                    <span>5X10</span>
                                </div>
                                <div className="color">
                                    <h3 className='mt-2'>สี :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="price mb-2">
                                    <h3 className='mt-2'>ราคา :</h3>
                                    <span>1,200 บาท</span>
                                </div>
                                    <Link to={''}>เพิ่มในรถเข็น</Link>
                            </div>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center my-3'>
                        <div className="card">
                            <div className="imgBx">
                                <img src={require('../../../../assets/img/48.png')} alt='' />
                            </div>
                            <div className="contentBx">
                                <h2 className='mb-2'>เต็นท์ต้นแบบ</h2>
                                <div className="size d-flex align-items-center" align='center'>
                                    <h3 className="mt-2">ขนาด :</h3>
                                    <span>4X8</span>
                                    <span>4X10</span>
                                    <span>5X8</span>
                                    <span>5X10</span>
                                </div>
                                <div className="color">
                                    <h3 className='mt-2'>สี :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="price mb-2">
                                    <h3 className='mt-2'>ราคา :</h3>
                                    <span>1,200 บาท</span>
                                </div>
                                    <Link to={''}>เพิ่มในรถเข็น</Link>
                            </div>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center my-3'>
                        <div className="card">
                            <div className="imgBx">
                                <img src={require('../../../../assets/img/48.png')} alt='' />
                            </div>
                            <div className="contentBx">
                                <h2 className='mb-2'>เต็นท์ต้นแบบ</h2>
                                <div className="size d-flex align-items-center" align='center'>
                                    <h3 className="mt-2">ขนาด :</h3>
                                    <span>4X8</span>
                                    <span>4X10</span>
                                    <span>5X8</span>
                                    <span>5X10</span>
                                </div>
                                <div className="color">
                                    <h3 className='mt-2'>สี :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="price mb-2">
                                    <h3 className='mt-2'>ราคา :</h3>
                                    <span>1,200 บาท</span>
                                </div>
                                    <Link to={''}>เพิ่มในรถเข็น</Link>
                            </div>
                        </div>
                    </Col>
                </Slider>
            </div>
        </>
    )
}

export default ProductList