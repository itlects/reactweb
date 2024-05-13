function MyCarList(props){
     return <li>{props.name}</li>
}


function MyCar4_Garage(){

    const carsList = ['소나타', '모잉', '카니발'];
    return (
    <>
        <h2>Hi!@@  My Car 주차장 안에는 어떤 차가 있지? </h2>

        <ul>
            {carsList.map( (car) => <MyCarList name={car}></MyCarList>)}

        </ul>
    </>
    );
}

export default MyCar4_Garage;