import { useState } from "react"
import { getPostsRequest } from "../../services/api"
import toast from "react-hot-toast"

export const useGetPosts = () => {
  const [ posts, setPosts ] = useState(null)
  ///console.log(typeof posts)
  const getPosts = async() =>{
    const response = await getPostsRequest()
    if(response.error){
      return toast.error(
        response?.err?.response?.data?.message || 
        'Error al obtener las publicaciones '
      )
    }
    setPosts(response.data)
  }

  return {
    //Retorno los datos que trae el back 
    posts,
    //Si esta cargando 
    isFetching: !posts,
    //Funcionalidad para ejecutarlo
    getPosts
  }
}
