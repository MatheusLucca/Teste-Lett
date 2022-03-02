import { Container, Content } from "./style";
import githubIcon from '../../assets/img/github.svg'
export function Header() {
    return (
        <Container>
            <Content>
                <div>
                    <a href="">Lista de Repositórios</a>
                    <a href="">Sobre</a>
                </div>
                <a href=""><img src={githubIcon} alt="" />/MatheusLucca</a>
            </Content>
        </Container>
    )
}