function MyCarList(props){
    return(
        <li>I am a {props.brand}</li>

    );
}

function MyGarage(){
    const mycar = ['소나타', '카니발', '코나'];
    return(
        <>
            <h1>나의 집에는 어떤 차가 있을까? </h1>
            <ul>
                {mycar.map(  (car)=><MyCarList brand={car}></MyCarList>  )}
            </ul>
        </>
    );
}

export default MyGarage;