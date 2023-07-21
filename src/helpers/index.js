export function horaSunrise( sys ) {
    const { sunrise } = sys;
    // Convertir los timestamps a objetos de fecha
    //  Multiplicar por 1000 para convertir de segundos a milisegundos
    const sunriseDate = new Date(sunrise * 1000);
    // Formatear la hora local en formato legible
    const options = {
        hour: 'numeric',
        minute: 'numeric',
    }
    return sunriseDate.toLocaleString('es-ES', options)
}

export function horaSunset(sys ) {
    const { sunset } = sys;
    const sunsetDate = new Date(sunset * 1000);

    const options = {
        hour: 'numeric',
        minute: 'numeric',
    }
    return sunsetDate.toLocaleString('es-ES', options)
}
