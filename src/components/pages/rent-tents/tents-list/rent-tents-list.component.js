import React from 'react';
import './rent-tents-list.component.css';
import Button from 'react-bootstrap/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSol from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import * as tentService from './../../../../services/tent.service'
import { useState, useEffect } from 'react';

const RentTentsList = () => {

    const [tents, setTents] = useState([])

    useEffect(() => {
        tentService.getAllTents().then(res => {
            setTents(res)
        })
    }, [])

    // const shoot = () => {
    //     var bodyFormData = new FormData();
    //     var address = JSON.stringify({
    //         location: "aon location",
    //         road: "road",
    //         subDistrict: "subDistrict",
    //         district: "district",
    //         pincode: 77506,
    //     });

    //     bodyFormData.append('userName', 'Aon');
    //     bodyFormData.append('password', '1234');
    //     bodyFormData.append('title', 'mr.');
    //     bodyFormData.append('firstName', '55555');
    //     bodyFormData.append('lastName', 'sasawat');
    //     bodyFormData.append('birthDate', '10 1 2541');
    //     bodyFormData.append('gender', 'female');
    //     bodyFormData.append('email', 'female@gmail.com');
    //     bodyFormData.append('phone', '089999999');
    //     bodyFormData.append('address', address);

    // }

    return (
        <>
            <div className='filter-title'>รายการเต็นท์เช่า</div>
            <Row className='my-5 pb-5'>
                {
                    tents.map((items, index) => {
                        return (
                            <Col sm='6' md='6' lg='6' xl='4' className='d-flex justify-content-center my-2' key={index}>
                                <Col className='rent-tents-list p-3 text-center'>
                                    <Row className="row justify-content-center align-items-center">
                                        <img src={require('../../../../assets/img/48.png')} draggable='false' alt=''></img>
                                    </Row>
                                    <p align='left' className='px-2'>
                                        {items.description}
                                    </p>
                                    <p align='left' className='px-2'>฿{items.price} บาท</p>
                                    <Button variant="outline-dark" align='center'><FontAwesomeIcon icon={faSol.faShoppingCart} size="lg"></FontAwesomeIcon>&emsp;ซื้อสินค้า</Button>
                                    {/* <Button variant="outline-dark" onClick={() => setTents([])} align='center'><FontAwesomeIcon icon={faSol.faShoppingCart} size="lg"></FontAwesomeIcon>&emsp;ซื้อสินค้า</Button> */}
                                </Col>
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    )
}

export default RentTentsList;