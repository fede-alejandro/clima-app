import useClima from '../hooks/useClima'
import Clima from './Clima'
import Formulario from './Formulario'
import Loading from './Loading'


function AppClima() {

    const { resultado, cargando, noResultado } = useClima()
    return (
        <>
            <main className='dos-columnas'>
                <Formulario />
                {
                    cargando ? <Loading />
                        : resultado?.name ? <Clima />
                            : noResultado
                            ? noResultado && <p>No hay resultados</p>
                            : <p>El clima se va a mostrar aqui</p>
                }
            </main>
        </>
    )
}

export default AppClima
