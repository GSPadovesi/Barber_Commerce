import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./styles";
import { ReactComponent as HairIcon } from "../../assets/barbearia.svg";
import { ReactComponent as BarbaIcon } from "../../assets/barba.svg";
import { ReactComponent as SobrancelhaIcon } from "../../assets/sobrancelha.svg";
import { ReactComponent as TelIcon } from "../../assets/telefone.svg";
import logo from "../../assets/menu.svg";

export function Sidebar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return( 
        <Container isMenuOpen={menuOpen}>
            <button type="button" onClick={handleToggleMenu}>
                <img src={logo} alt="Abrir e fechar sidebar" />
            </button>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" >
                            <HairIcon />
                            <span>Cabelo</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="beard">
                            <BarbaIcon />
                            <span>Barba</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="eyebrow">
                            <SobrancelhaIcon />
                            <span>Sobrancelhas</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="contact">
                            <TelIcon />
                            <span>Contatos</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </Container>
    )
}