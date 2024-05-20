import {useState} from 'react';

const CarInfo = ()=>{
    const [car, setCar] = useState(
        {
            brand: '현대차', 
            model: '카니발',
            year: '2022',
            color: '빨강'
        }
    );

    return(
        <>
            <h1>내차정보(제조사): {car.brand} </h1>
            <p>자세한 정보: </p>
            <ul>
                <li>모델: {car.model}</li>
                <li>색상: {car.color}</li>
                <li>제조년: {car.year}</li>

            </ul>

        </>
    );
}

export default CarInfo;
