import React from 'react';
import './filter-rent-tents.component.css';

const FilterRentTents = () => {
    return (
        <>
            <div className='filter-title'>ตั้งค่าการค้นหา</div>
            <div className='border-bottom mt-4'></div>

            <div className='my-3'>
                <div className='filter-category'>ช่วงราคา</div>
                <div className='filter-list'>
                    <input type="checkbox" />
                    <span>฿ 0 - 3,000</span>
                </div>
                <div className='filter-list'>
                    <input type="checkbox" />
                    <span>฿ 3,000 - 5,000</span>
                </div>
                <div className='filter-list'>
                    <input type="checkbox" />
                    <span>฿ 5,000 - 10,000</span>
                </div>
                <div className='filter-list'>
                    <input type="checkbox" />
                    <span>฿ 10,000 - 15,000</span>
                </div>
                <div className='filter-list'>
                    <input type="checkbox" />
                    <span>฿ 15,000 - ขึ้นไป</span>
                </div>
            </div>
            <div className='border-bottom'></div>

            <div className='my-3'>
                <div className='filter-category'>สีผ้าใบ</div>
                <div className='filter-list'>
                    <input type="checkbox" />
                    <span>ขาว</span>
                </div>
                <div className='filter-list'>
                    <input type="checkbox" />
                    <span>ดำ</span>
                </div>
                <div className='filter-list'>
                    <input type="checkbox" />
                    <span>เขียว</span>
                </div>
                <div className='filter-list'>
                    <input type="checkbox" />
                    <span>น้ำเงิน</span>
                </div>
                <div className='filter-list'>
                    <input type="checkbox" />
                    <span>ขี้ม้า</span>
                </div>
            </div>
            <div className='border-bottom'></div>

            <div className='my-3'>
                <div className='filter-category'>ขนาดเต็นท์</div>
                <div className='filter-list'>
                    <input type="checkbox" />
                    <span>4 X 8 เมตร</span>
                </div>
                <div className='filter-list'>
                    <input type="checkbox" />
                    <span>4 X 10 เมตร</span>
                </div>
                <div className='filter-list'>
                    <input type="checkbox" />
                    <span>5 X 8 เมตร</span>
                </div>
                <div className='filter-list'>
                    <input type="checkbox" />
                    <span>5 X 10 เมตร</span>
                </div>
            </div>
            <div className='border-bottom mb-5'></div>
        </>
    )
}

export default FilterRentTents;