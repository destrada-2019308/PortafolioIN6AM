import { useState } from "react"
import { useLogin } from '../shared/hooks/useLogin.jsx'

export const Login = () => {
    //Como es un hook, todo hook cuando se importa
    //lleva parentesis, ca con llaves porque es un hook personalizado
    const { isLoading, login } = useLogin()
    const [ formData, setFormData ] = useState({
            account: '',
            password: ''
        })

    const img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX////0oCYAAADv7+/19fU0Igj6pCf+pygaEQTmlyRPT0/pmSSeaBni4uLQiCARCwN0dHSsrKw8PDxiQQ+PXhZKSkpLMQyhoaH5+fnNzc22dx3q6urXjSHxnibFxcWNjY16UBNcXFwTExOBgYGYmJi7u7tnZ2cfHx81NTVaOw7dkSLGgh+CVRQ3JAnZ2dk5OTmobhopKSknGga7eh0/KgoiFwVhYWF0TBJSNg0XFxeYYxgVDgOJWhVrRhA+KQkgFQVccbUEAAAJjElEQVR4nO2dC1PiPBSGBbrtQrnqyh1RRLm5COt6+Vjd/f//6gNR8p40paQtTerkndnZGYGQhyTnJCfNycnJkdXMXdSGt+fL/wZZosFoXKg2ai3r2BU4qnKt/lU2SMtqY95UXdNQ6tQK/wXi7SgvUgd5c34o3aeqc9V1llCnL4v3rvtaShqyVA3Ft9GokQJGKzzfllE1QJCGkfg2WrZUM+xTaxwZcK1qTjWHr67j4FtrcKGaRKzS/f56V76DgppRNYxINz6V/TVZtWeu7XiUmc7ad3Uf1nFHNY9HYhd4tuhmHNu2M0KtX3Dc8qou/KhuBudWUMdJO+8Lh5iZ6eqX4OM3qplQTcEc7S4fTMcoZxNvCRq5xqbHSVRWvYPxtoxO98yDOFQN9qnmqaD9pPg+2vFF11bku+jfrjzflnHBI9ZUs73riavVygkHuGF0+eGog+/nJjLfyqH53hmLHKL6VSPn6Cd+Fsb2SPw+Z1YhBS5VB3LmnIkR1PsdJ19+eGiDHmZlV4xpT6lzvFILyPmJlePF63WLb4+8Bdnq990in/FA2r2/5F1qDSodhEUe0LbLd9/EdJ96KU55y2T3fpO3lBQC0j76g6+p3aZV9dFZmWO03Z/4+qlCwiVWhBuDa+/27xC+94bkPKidJx9V109JyOKMq2SZjqYAXbrk43aXvKpqKdXBSvzq0S76Q4ZvrccHMojtNr6oakFMzAzpZ7Z70ACkosPYvsTX1BibElahSADL8nxrndFugNZGjVPEwGid/PyzUIDrUnq+pahoxBxWACejoQHXUwBEdLCfqhiJGJi5BCvBmcEPja6uhw1QvyrcuplgX+jhK8mb0yZuncFPb+crXK2z4744qtS5uR3w773EzoDrjOTX+7imIFaQj5xd7Qua5RpL7u0LKKsH89lx4ns2uO51YfC8cu0XFBRsNjjEqS1uxKSji2hnXqFOnJ/oH1IUDfPUoRFdiBdfH52JqgZ1Amdv06nagTEIukKBfurcwd+PC+QRRIAnAEhDSQdHIMgE95HZLdIlEu6m8M1tRtgji0GJEAtpRZgfObDeT9aatqBCzM7Q6bLUb467An+gEVfsz+NjwQgFBvAFvD3Otw8xMkwWeg3WK8j0IVF/AQ8CFcXVuZcs8QI+W2c/mg3zh0QHIlSHWVIbfaF0ddDB5hnhM/trkgFwXPuCWYDfuyBdJi7GmMNA65zk7BsMzQsjxE4aIhpfYJ+e7Lop9vzz+EF8BZNSNqEhljRaoRAScdlflwmaGlg5gaGBISNnSLdqwg/EBncPlvoJrqBgeT/b1cUBXxFqywgM9AP73WA3KsFdGqjLlHlDmH+E2k6BnrFihG9KCGF9zgw7LH3DjRgYiGwhbMPkO0GHKCQEqxcuNAZ7BG+MEAKvCT6dASu63awU1wG3oUoFj8gC6DgzVUJYERKG881iQljnJzipMYSGUCxDaAjjlCE0hGIZQkMYpwyhIRTLEBrCOGUIDaFYhtAQxilDaAjFMoSGME4ZQkMoliE0hHHKEBpCsQyhIYxThtAQiqUPYdNi2YT+9HYZdbpRCeGp1TeWqAceME0k11lr+HS6HLEvzdZ3ggf3RoUwgiet/r3sioXH/wfLceH64pgpCOZxpbqKpqtjJcuYB+exTEr3x2Bs6tF+n7qNPadbhz9Fp1wxP2zaCv7GxBXrk4o6AsaKOA/+NiWKr6MenC03acU1A4iWkfSYCvcsskd6DsKt4nm2vUALfVt086rUXbzRysgfrxKINuGze0AqxKNp/d3uM6lPHI1IRmHbkwgqcTnkoGocI5EAqms+JvsBqxQdEM92vqpvwY1IVoPoc3A4jFTRoQXfBUc5w5ySowJLutKFEM/RRLemsJ4PmdIyfuHB0lFkwgErTDUYiFVqEBUQDnb+Uo0FgqOOUeemFivqmy6ddC0IT0UNTCGhaiyQIVRFaNuOs/0XtcPrSGg77mzxPHmp118md4tyJnyyYT0J7V6bZsiqnD1EaUjdCO0pSYL4qZUbmlEvQtu989JtG7LozbGbQkKnvecyi58hZ4JaEQo7KNMiFKI+hLbryZXPS5QgOz2EXMpjsZ5DIGpDmDkol/CdfOhAF0I7sItuJb+01oTQPjhbsvRtA3oQenPRPjVa81JpftHngszZ75JF60LI5ZvvlyzLyq21/m/O3bwjG8XTgpC7qeKq1MyBmtwFZtPgArUj7JGpTN/KUVkdcrfJpdxI1IGQJvoc8oAbRvJsRz64SN0IcbVUbXoB14iYfLYo1YgaENIskYIW3BDi7vlvqd9PB0IIS2cvxIQ5C3OCS3VTHQjhBq6CD2Au1xmwd0ktMjQgxHzqN76ETdiclLKmGhDm2ecGJT/AnAV7d39lnL56QtzFPBca0g9EaOqUEWJiVd9Ouu6m8KiORPE6EMKUTeTtd4Tw1KwbXKxOhOAsGvsIYV4j4y40IDy0DUUZGNNBeOg4HLD3pctboC093WNL8YqFdNlS9IfZPf4QkrJ+SxlhDx4IqX3JOQ2m/z33JRRnKU8JIcYw/CamZG0hFcfQgDAzhcqPfABxffhTqnQdCDEPd/ZJbE4xGMVfnpgCQvIE4bWon5KoqVywTQdCLlxazXGMVocAvqUv1sZdyZI9LRFEqzUiL0vulGpBmHG427vmgIiufqPLNMa8PVfMXQFhib70pxdcnIaEnhuo52JHmMULFtJFSCY2WXT8Tbr5JBcN1omQu0iPzU8tcvnhq/w2tz6EZB/fhzAEoEaEtgutKCaU76JaEZKdbjGh3KaTITSEhtAQGkJDaAgNoSE0hIbQEBpCQ2gIDaEhNISG0BB+CcKm9aHmFyW8vql96Ob+axKKZQgNoSE0hJEJF14mou+pJyx7oYjqKT+PH3zaOe0ZB9Zy9zdhuEK1IrTze1pxIvuokI6Em7FY9JH0KXVNCTdJOX0UtkTdCOOXITSEqMGuqH+qsUD/drWKnDfx62eGPIHV+Ew1106QU2QcmRDP7eiRZDeTcSD3VLgLX1A1VpjUCcFjCieC0W/XgettdGlEbMJsKTLhCSav0CPbNR5ziJ5kl3ZT/TKWD2MgtMjRj9eewqTzmxluD5N5Z7OdGAhPhqTIx1XXUafu6pHUJrolfRfNd7RW5bsaVfiKxNOEOl9w0YgHkGSe10rncQGenDwFf5sCDeK81UqfC8lAMTh70G3wFyasQcyXdmk3FscxmVFQS6ub165j59uooc3NVoW4e+inrNp58LcfX9V4bnnyUe6mXxgNVLENlk/DC8nrHv4H7ldAG1hMpnYAAAAASUVORK5CYII='
    
    const handleChange = (e) =>{
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

    const handleSubmit = (e) =>{
        e.preventDefault()
        login(formData)
    }

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        <img src={img} alt="" style={{width: '5em', height: 'auto'}} />
                        <form onSubmit={handleSubmit}>
                            <p>Sign in with:</p>
                            <div data-mdb-input-init className="form-outline mb-4">
                                <label className="form-label">Username or emial</label>
                                <input value={formData.account} onChange={handleChange} type="text" name="account" id="loginName" className="form-control" />
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <label className="form-label" >Password</label>
                                <input value={formData.password} onChange={handleChange} name="password" type="password" id="loginPassword" className="form-control" />
                            </div>

                            <div className="row mb-4">
                                <div className="col-md-6 d-flex justify-content-center">
                                    <div className="form-check mb-3 mb-md-0">
                                        <input className="form-check-input" type="checkbox" value="" id="loginCheck" />
                                        <label className="form-check-label" > Remember me </label>
                                    </div>
                                </div>

                                <div className="col-md-6 d-flex justify-content-center">
                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>

                            <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>
                            <div className="text-center">
                                <p>Not a remember? <a href="#!">Register</a></p>
                            </div>
                            <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-3">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
