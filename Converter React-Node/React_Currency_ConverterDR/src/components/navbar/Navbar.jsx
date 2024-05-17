import './Navbar.css'
import logo from '../../assets/img/images.png'

export const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-content">
            <span>
                <h1>Kinal Currenty Converter</h1>
            </span>
            <img src={logo} alt="Logo Kinal" />
        </div>
    </nav>
  )
}

