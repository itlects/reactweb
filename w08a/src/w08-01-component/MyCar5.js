function MyCarList(props){
     return <li>id: {props.id} 차종: { props.name}  제조사: {props.brand }</li>
}


function MyCar5_Garage(){

    const carsList = [
        {id: 1 ,name:'소나타', brand: '현대자동차'}, 
        {id: 2 ,name:'모잉', brand: '기아자동차'},
        {id: 3 ,name:'카니발', brand: '기아자동차'}
    ];
    return (
    <>
        <h2>Hi!@@  My Car 주차장 안에는 어떤 차가 있지? </h2>

        <ul>
            {carsList.map( (car) => <MyCarList id={car.id} name={car.name} brand={car.brand}></MyCarList>)}

        </ul>
    </>
    );
}

export default MyCar5_Garage;