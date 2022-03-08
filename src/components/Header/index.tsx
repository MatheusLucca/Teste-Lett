import { Container, Content } from "./style";
import githubIcon from '../../assets/img/github.svg'
import folderIcon from '../../assets/img/folder.png'
import { useNavigate } from "react-router-dom";
export function Header() {
    const navigate = useNavigate();
    return (
        <Container>
            <Content>
                <img src={folderIcon} alt="" />

                <div>
                    <button onClick={() => navigate('/')
                    }>Lista de Repositórios</button>
                    <button onClick={() => navigate('/sobre')
                    }>Sobre</button>
                </div>
                <button onClick={() => window.open('https://github.com/MatheusLucca', '_blank')
                }><img src={githubIcon} alt="" />/MatheusLucca</button>

            </Content>
        </Container>
    )
}