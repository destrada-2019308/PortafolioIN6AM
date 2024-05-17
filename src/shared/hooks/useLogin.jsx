import { useState } from 'react'
import { loginRequest } from '../../services/api'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

//Hook personalizado para que devuelve la funcion del api

export const useLogin = () => {
    //Constante para redirigir hacia otra pagina
    const navigate = useNavigate()
    //Es true cuando carga la informacion                                    
    const [ isLoading, setIsLoading ] = useState(false)
    //Funcion que consulta al api enviando los datos
    const login = async(user) => {
        setIsLoading(true)
        const response = await loginRequest(user)
        setIsLoading(false)
        if(response.error){
            return toast.error(
                response?.err?.response?.data?.message ||
                'Error al loggearse'
            )
        }
        toast.success('loggeado correctamente')
        localStorage.setItem('token', response.data.token)
        navigate('/feed/posts')
    }

  return {
    isLoading,
    login
  }
}
