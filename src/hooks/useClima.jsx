import { useContext } from 'react'
import ClimaContext from '../context/climaProvider'

const useClima = () => {
    return useContext(ClimaContext)
}

export default useClima