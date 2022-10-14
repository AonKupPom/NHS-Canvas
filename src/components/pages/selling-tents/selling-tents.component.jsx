import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import FilterSellingTents from './filter-menu/filter-selling-tents.component';
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col';
import './selling-tents.component.css';
import SellingTentsList from './tents-list/selling-tents-list.component';

const SellingTents = () => {

    return (
        <>
            <Container className='px-4'>
                <Row className='mb-5'>
                    <Col md='4' lg='3'>
                        <FilterSellingTents />
                    </Col>
                    <Col md='8' lg='9'>
                        <SellingTentsList />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SellingTents;