import React from 'react';
import Slideshow from './slide-show/slide-show.component'
import ProductList from './product-list/product-list.component';
import './welcome.component.scss'
import Promotion from './promotion/promotion.component';
import Container from 'react-bootstrap/esm/Container';

const Welcome = () => {
    return (
        <>
            <Slideshow/>
            <Container className='px-4'>
            <ProductList></ProductList>
            <Promotion></Promotion>
            </Container>
        </>
    )
}

export default Welcome;