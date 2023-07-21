import { useState } from 'react'
import useClima from '../hooks/useClima'


function Formulario() {

    const [alerta, setAlerta] = useState('')
    const { busqueda, datosBusqueda, consultarClima, setResultado } = useClima()
    const { ciudad, pais } = busqueda

    const handleSubmit = e => {
        e.preventDefault()

        if (Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios')
            return
        }
        setAlerta('')
        consultarClima(busqueda)
        setResultado({})
    }
    return (
        <div className='contenedor'>
            {alerta && <p>{alerta}</p>}
            <form onSubmit={handleSubmit}>
                <div className='campo'>
                    <label htmlFor='ciudad'>Ciudad</label>
                    <input
                        type='text'
                        id='ciudad'
                        name='ciudad'
                        onChange={datosBusqueda}
                        value={ciudad}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor='pais'>País</label>
                    <select
                        form='pais'
                        name='pais'
                        onChange={datosBusqueda}
                        value={pais}>
                        <option value=''>Seleccione</option>
                        <option value='US'>Estados Unidos</option>
                        <option value='MX'>México</option>
                        <option value='AR'>Argentina</option>
                        <option value='BR'>Brasil</option>
                        <option value='CO'>Colombia</option>
                        <option value='CR'>Costa Rica</option>
                        <option value='PE'>Perú</option>
                        <option value='ES'>España</option>
                        <option value='IT'>Italia</option>
                        <option value='FR'>Francia</option>
                        <option value='DE'>Alemania</option>
                        <option value='GR'>Grecia</option>
                        <option value='PT'>Portugal</option>
                    </select>
                </div>
                <input type='submit' value='consultar clima' />
            </form>
        </div>
    )
}

export default Formulario
