import { deletePostRequest } from "../../services/api"
import toast from "react-hot-toast"

export const useDeletePost = () => {
    
    const deletePost = async(id) =>{
        const response = await deletePostRequest(id)
        if(response.error){
            return toast.error('Error al eliminar post')
        }
        return toast.success('Por eliminado correctamente')
    }
  
  
    return {
        deletePost
  }
}
