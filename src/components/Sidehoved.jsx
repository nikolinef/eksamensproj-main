import { NavLink } from "react-router-dom";
import Mlogo from "../assets/combilogo.png";

export default function Sidehoved() {

    return(
        <>
        <nav className="nav">
        <NavLink to="/">
            <div className="headerlogo">
                <img src={Mlogo} alt="defaultpic" className="headerimg"/>
            </div>
        </NavLink>

            <div className="menu">
                <NavLink to="/products" className="NavLink">Pakker</NavLink>
                <NavLink to="/about" className="NavLink">Om Evergreen</NavLink>
                <NavLink to="/contact" className="NavLink">Kontakt</NavLink>
                <NavLink to="/memberpage" className="NavLink">Login for medarbejdere</NavLink>
            </div>
        </nav>
        </>
    )
}
