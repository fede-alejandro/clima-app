/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import axios from 'axios';

const ClimaContext = createContext()

const ClimaProvider = ({ children }) => {

    const [noResultado, setNoResultado] = useState(false)
    const [cargando, setCargando] = useState(false)
    const [resultado, setResultado] = useState({})
    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const consultarClima = async datos => {
        setCargando(true)
        setNoResultado(false)
        try {
            const { ciudad, pais } = datos
            const appId = import.meta.env.VITE_API_KEY

            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`


            const { data } = await axios(url)
            const { lat, lon, name } = data[0]

            const urlClima = `https://api.openweathermap.org/data/2.5/weather?q=${name}&lat=${lat}&lon=${lon}&appid=${appId}&lang=es`

            const { data: clima } = await axios(urlClima)
            console.log(clima)
            setResultado(clima)
        } catch (error) {
            setNoResultado(true)
        } finally {
            setCargando(false)
        }
    }

    return (
        <ClimaContext.Provider
            value={{
                busqueda,
                datosBusqueda,
                consultarClima,
                resultado,
                setResultado,
                cargando,
                noResultado
            }}>
            {children}
        </ClimaContext.Provider>
    )
}

export { ClimaProvider }

export default ClimaContext