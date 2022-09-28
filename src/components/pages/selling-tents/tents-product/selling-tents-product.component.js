import React from 'react';
import { useParams } from 'react-router-dom';

const SellingTentsProduct = () => {
    
    const { id } = useParams();
    return (
        <>
            <div>
                Product ID : {id}
                Aon : {process.env.NODE_ENV}
            </div>
        </>
    )
}

export default SellingTentsProduct;