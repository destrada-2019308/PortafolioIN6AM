import { useState } from "react"

export const PostForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        maintext: ''
    })

    const handleSubmit = () => {

    }

    const handleChange = (e) => {
        //En prevData Almacenamos lo que no cambia
        setFormData((prevData) => (//Almacena un objeto 
            {
                //Si en ese objeto algo no cambia
                ...prevData,
                //Si se llama email cambia a email y viceversa con la password
                [e.target.name]: e.target.value
            }
        ))
        //console.log(formData);
    }

    return (
        <>
            <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
                <h2>New Post :)</h2>
                <div>
                    <img style={{ width: '5em', height: 'auto' }} />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                        <input value={formData.title} onChange={handleChange} name="title" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
                        <input value={formData.category} onChange={handleChange} name="category" type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Content</label>
                        <textarea value={formData.maintext} onChange={handleChange} name="maintext" type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
