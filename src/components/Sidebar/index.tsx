import { useState } from "react";
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
                        <a href="#" className="active">
                            <HairIcon />
                            <span>Cabelo</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <BarbaIcon />
                            <span>Barba</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <SobrancelhaIcon />
                            <span>Barba</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <TelIcon />
                            <span>Contatos</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </Container>
    )
}