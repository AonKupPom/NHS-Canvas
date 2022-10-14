import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slide-show.component.css'

const images = [
    require(`../../../../assets/img/image-slide-1.jpg`),
    require(`../../../../assets/img/image-slide-2.jpg`),
    require(`../../../../assets/img/image-slide-3.jpg`),
];

const imageDetails = [
    {
        contrast: 'grayout slide-image',
        title: 'ยินดีต้อนรับสู่ NHS Canvas',
        description: 'เราคือผู้นำในด้านการให้บริการเกี่ยวกับเต็นท์และผ้าใบทุกรูปแบบ',
        button: 'เข้าชมเว็บไซต์'
    },
    {
        contrast: 'darken slide-image',
        title: 'รับประกันคุณภาพสินค้า',
        description: 'เรามีสินค้าที่มีคุณภาพและการรับประกันที่น่าพึงพอใจสำหรับลูกค้าทุกประเภท',
        button: 'เลือกซื้อสินค้า'
    },
    {
        contrast: 'tint-dark slide-image',
        title: 'บริการนอกสถานที่',
        description: 'ให้บริการกางเต็นท์นอกสถานที่ตามความต้องการของลูกค้า',
        button: 'บริการของเรา'
    }
]


const properties = {
    duration: 2500,
    transitionDuration: 600,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => { }
}

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide {...properties}>
                {
                    images.map((each, index) => {
                        return (
                            <div key={index} className='slide-container'>
                                <img key={index} alt='' draggable='false' src={each} className={imageDetails[index].contrast} />
                                <div className="info-area-container">
                                    <div className="spacer-div"></div>
                                    <div className="info-area" id="info-1">
                                        <h1 className="slide-title">{imageDetails[index].title}</h1>
                                        <span className="slide-sub-text">{imageDetails[index].description}</span>
                                        <button className="slide-button">{imageDetails[index].button}</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slide>
        </div>
    )
}

export default Slideshow;