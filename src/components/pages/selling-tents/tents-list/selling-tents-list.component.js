import React from 'react';
import './selling-tents-list.component.css';
import Button from 'react-bootstrap/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSol from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const SellingTentsList = () => {
    return (
        <>
            <div className='filter-title'>รายการเต็นท์ผ้าใบ</div>
            <Row className='my-5 pb-5'>
                <Col sm='6' md='6' lg='6' xl='4' className='d-flex justify-content-center my-2'>
                    <Col className='selling-tents-list p-3 text-center'>
                        <Row className="row justify-content-center align-items-center">
                            <img src={require('../../../../assets/img/28591bf3d6674cfdbbe48e99247e0aad.png')} draggable='false' alt=''></img>
                        </Row>
                        <p align='left' className='px-2'>
                            ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                        </p>
                        <p align='left' className='px-2'>฿1,200 บาท</p>
                        <Button variant="outline-dark" align='center'><FontAwesomeIcon icon={faSol.faShoppingCart} size="lg"></FontAwesomeIcon>&emsp;ซื้อสินค้า</Button>
                    </Col>
                </Col>
                <Col sm='6' md='6' lg='6' xl='4' className='d-flex justify-content-center my-2'>
                    <Col className='selling-tents-list p-3 text-center'>
                        <Row className="row justify-content-center align-items-center">
                            <img src={require('../../../../assets/img/28591bf3d6674cfdbbe48e99247e0aad.png')} draggable='false' alt=''></img>
                        </Row>
                        <p align='left' className='px-2'>
                            ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                        </p>
                        <p align='left' className='px-2'>฿1,200 บาท</p>
                        <Button variant="outline-dark" align='center'><FontAwesomeIcon icon={faSol.faShoppingCart} size="lg"></FontAwesomeIcon>&emsp;ซื้อสินค้า</Button>
                    </Col>
                </Col>
                <Col sm='6' md='6' lg='6' xl='4' className='d-flex justify-content-center my-2'>
                    <Col className='selling-tents-list p-3 text-center'>
                        <Row className="row justify-content-center align-items-center">
                            <img src={require('../../../../assets/img/28591bf3d6674cfdbbe48e99247e0aad.png')} draggable='false' alt=''></img>
                        </Row>
                        <p align='left' className='px-2'>
                            ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                        </p>
                        <p align='left' className='px-2'>฿1,200 บาท</p>
                        <Button variant="outline-dark" align='center'><FontAwesomeIcon icon={faSol.faShoppingCart} size="lg"></FontAwesomeIcon>&emsp;ซื้อสินค้า</Button>
                    </Col>
                </Col>
                <Col sm='6' md='6' lg='6' xl='4' className='d-flex justify-content-center my-2'>
                    <Col className='selling-tents-list p-3 text-center'>
                        <Row className="row justify-content-center align-items-center">
                            <img src={require('../../../../assets/img/dog-x66.png')} draggable='false' alt=''></img>
                        </Row>
                        <p align='left' className='px-2'>
                            ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                        </p>
                        <p align='left' className='px-2'>฿1,200 บาท</p>
                        <Button variant="outline-dark" align='center'><FontAwesomeIcon icon={faSol.faShoppingCart} size="lg"></FontAwesomeIcon>&emsp;ซื้อสินค้า</Button>
                    </Col>
                </Col>
                <Col sm='6' md='6' lg='6' xl='4' className='d-flex justify-content-center my-2'>
                    <Col className='selling-tents-list p-3 text-center'>
                        <Row className="row justify-content-center align-items-center">
                            <img src={require('../../../../assets/img/dog-x66.png')} draggable='false' alt=''></img>
                        </Row>
                        <p align='left' className='px-2'>
                            ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                        </p>
                        <p align='left' className='px-2'>฿1,200 บาท</p>
                        <Button variant="outline-dark" align='center'><FontAwesomeIcon icon={faSol.faShoppingCart} size="lg"></FontAwesomeIcon>&emsp;ซื้อสินค้า</Button>
                    </Col>
                </Col>
                <Col sm='6' md='6' lg='6' xl='4' className='d-flex justify-content-center my-2'>
                    <Col className='selling-tents-list p-3 text-center'>
                        <Row className="row justify-content-center align-items-center">
                            <img src={require('../../../../assets/img/dog-x66.png')} draggable='false' alt=''></img>
                        </Row>
                        <p align='left' className='px-2'>
                            ร้านผ้าใบ หินกอง สระบุรี รับสั่งทำเต็นท์
                        </p>
                        <p align='left' className='px-2'>฿1,200 บาท</p>
                        <Button variant="outline-dark" align='center'><FontAwesomeIcon icon={faSol.faShoppingCart} size="lg"></FontAwesomeIcon>&emsp;ซื้อสินค้า</Button>
                    </Col>
                </Col>
            </Row>
        </>
    )
}

export default SellingTentsList;