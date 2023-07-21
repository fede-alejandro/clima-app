import { horaSunrise, horaSunset } from '../helpers'
import useClima from '../hooks/useClima'

function Clima() {

    const { resultado } = useClima()
    console.log(resultado)
    const { name, main, sys, weather, wind } = resultado
    // Grados Kelvin
    const kelvin = 273.15

    // function horaSunrise() {
    //     const tiempoUnix = sys.sunrise;
    //     // Convertir los timestamps a objetos de fecha
    //     //  Multiplicar por 1000 para convertir de segundos a milisegundos
    //     const sunriseDate = new Date(tiempoUnix * 1000);
    //     // Formatear la hora local en formato legible
    //     const options = {
    //         hour: 'numeric',
    //         minute: 'numeric',
    //     }
    //     return sunriseDate.toLocaleString('es-ES', options)
    // }

    // function horaSunset() {
    //     const tiempo = sys.sunset;
    //     const sunsetDate = new Date(tiempo * 1000);

    //     const options = {
    //         hour: 'numeric',
    //         minute: 'numeric',
    //     }
    //     return sunsetDate.toLocaleString('es-ES', options)
    // }

    return (
        <div className='contenedor clima'>
            <h2>{name}</h2>

            <p>{parseInt(main.temp - kelvin)}
                °
            </p>
            <p>{weather[0].description}</p>

            <div className='temp_min_max'>
                <div>
                    <span className='material-symbols-outlined'>
                        air
                    </span>
                    <p>{wind.speed}<span>m/s</span></p>
                </div>

                <div className=''>
                    <span className='material-symbols-outlined'>
                        humidity_percentage
                    </span>
                    <p>{main.humidity}</p>
                </div>
                {/* </div>
            <div className='temp_min_max'> */}
                <div>
                    <span className='material-symbols-outlined'>
                        wb_twilight
                    </span>
                    <p>{horaSunset(sys)}</p>
                </div>
                <div>
                    <span className='material-symbols-outlined'>
                        clear_day
                    </span>
                    <p>{horaSunrise(sys)}</p>
                </div>
                <div>
                    <span className='material-symbols-outlined'>
                        thermometer_loss
                    </span>
                    <p>Min:{parseInt(main.temp_min - kelvin)}
                        <span>°</span>
                    </p>
                </div>
                <div className=''>
                    <span className='material-symbols-outlined'>
                        thermometer_gain
                    </span>
                    <p>Max:{parseInt(main.temp_max - kelvin)}
                        <span>°</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Clima
