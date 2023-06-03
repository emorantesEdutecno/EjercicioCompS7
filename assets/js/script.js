const convertirFahrenheitACelsius = (tempFahrenheit)=>{
    return new Promise((resuelve)=>{
        if(tempFahrenheit < -200){
            let mensajeError = 'Error: Valor muy negativo';
            resuelve(mensajeError);
        }
        else{
            console.log('iniciando espera de 6000 ms de convertirFahrenheitACelsius');
            setTimeout(()=>{
                let tempCelsius = (5/9)*(tempFahrenheit -32);
                resuelve(tempCelsius.toFixed(2));
            }, 6000);
        }
    } );

};

const convertirTemperatura = async ()=>{
    console.log('iniciando convertirTemperatura');
    let elParrafoCelsius = document.getElementById('celsius');
    elParrafoCelsius.innerText = 'Calculando Temperatura ...';
    let lasCajasTemperatura = document.getElementsByClassName('farenheit');
    // ubicamos la primera caja de temperatura en la posicion 0
    console.log(lasCajasTemperatura);
    let valorTempFahrenheit = Number(lasCajasTemperatura[0].value);
    console.log(valorTempFahrenheit);
    console.log(typeof valorTempFahrenheit);


    let respuestaPromesa = await convertirFahrenheitACelsius(valorTempFahrenheit);

    elParrafoCelsius.innerText = respuestaPromesa + 'C';

    console.log('finalizando convertirTemperatura');

};

const asignarEventos =()=>{
    let elBoton = document.getElementById('btnConvertir');
    elBoton.addEventListener('click', convertirTemperatura);
};