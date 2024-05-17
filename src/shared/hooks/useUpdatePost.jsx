import toast from "react-hot-toast"
import { updatePostRequest } from "../../services/api"
import { useState } from "react"

export const useUpdatePost = () => {
    const [ updatedPost, setUpdatedPost] = useState(null)
  
    const updatePost = async(id, post) =>{
        const response = await updatePostRequest(id, post)
        if(response.error){
            toast.error(
                reponse?.error?.response?.data.message ||
                'Error al acualizar post'
            )
        }
        setUpdatedPost(response.data)
        toast.success('Actulizado correctamente')
    }

    return{
        updatedPost,
        isFetching: !updatePost,
        updatePost
  }
}
