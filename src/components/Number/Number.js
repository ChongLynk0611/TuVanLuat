import React from 'react'

import NumberItem from './NumberItem/NumberItem';

import './Number.css';


const numbers = [
    {
        style: {color:"#F14D5D"},
        number: "506",
        content: "Khóa học & Bài giảng",
        isBoder: true
    },
    {
        style: {color:"#EE8C1C"},
        number: "265",
        content: "Chuyên gia luật",
        isBoder: true
    },
    {
        style: {color:"#55BC7E"},
        number: "2,506",
        content: "Học viên tốt nghiệp",
        isBoder: true
    },
    {
        style: {color:"#0056D2"},
        number: "300",
        content: "Khóa học đã hoàn thành"
    }
]
function Number(props) {
    return (
        <div className="Number">
            {
                numbers.map((number, index) => (
                    <NumberItem 
                        style={number.style}
                        number={number.number}
                        content={number.content}
                        isBoder={number.isBoder}
                        key={index}
                    />
                ))
            }
            
        </div>
    )
}

export default Number

