import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import FilterRentTents from './filter-menu/filter-rent-tents.component';
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col';
import './rent-tents.component.scss';
import RentTentsList from './tents-list/rent-tents-list.component';

const RentTents = () => {

    return (
        <>
            <Container className='px-4'>
                <Row className='mb-5'>
                    <Col md='4' lg='3'>
                        <FilterRentTents />
                    </Col>
                    <Col md='8' lg='9'>
                        <RentTentsList />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default RentTents;