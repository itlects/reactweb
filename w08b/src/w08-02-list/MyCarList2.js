function MyCarList(props){
    return(
        <li>내차의 등록번호:{props.id} 차명: {props.name} 제조사: {props.brand} </li>

    );
}

function MyGarage2(){
    const mycar = [
        {id: 1 ,name:'소나타', brand:'현대'}, 
        {id: 2, name:'카니발', brand:'기아'}, 
        {id: 3, name: '코나' , brand: '현대'}
    ];
    return(
        <>
            <h1>나의 집에는 어떤 차가 있을까? </h1>
            <ul>
                {mycar.map(  (car)=><MyCarList id={car.id} name={car.name} brand={car.brand}></MyCarList>  )}
            </ul>
        </>
    );
}

export default MyGarage2;