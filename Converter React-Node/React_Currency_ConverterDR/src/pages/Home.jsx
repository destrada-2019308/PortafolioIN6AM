import { Navbar } from '../components/navbar/Navbar.jsx'
import { Converter } from '../components/converter/Converter.jsx'
import { AdicionalInfo } from '../components/aditionalInfo/AdiotionalInfor.jsx'

export const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <hr />
            <Converter></Converter>
            <hr />
            <AdicionalInfo></AdicionalInfo>
            <hr />
            <div>Este es la pagina principal</div>
        </>
    )
}
