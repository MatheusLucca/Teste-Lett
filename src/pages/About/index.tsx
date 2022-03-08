import { Container } from "./style";
import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai'
export function About() {
    return (
        <Container>

            <img src="https://github.com/MatheusLucca.png" alt="" />
            <div>
                <h2>Sobre mim</h2>
                <p>Meu nome é Matheus Lucca Alves, tenho 19 anos, comecei a aprender programação em 2017,
                    quando entrei no ensino médio na ETEC de Tupâ
                    e fiz o ETIM(Ensino Técnico Integrado ao Médio) e ai
                    começou minha paixão por programação e pelos desafios que ela propõe.
                </p>
                <p>No ano de 2019 me formei e em 2020 entrei para UFMS no curso de Sistema de Informação, agora estou no quinto período e em busca de minha
                    primeira experiência profissional e evolução das minhas skills.</p>

                <h2>Motivos para querer entrar na Lett</h2>
                <p>
                    Desejo ser desenvolvedor full-stack e ter uma carreira sólida, vejo que a Lett tem muito a acrescentar ao meu desenvolvimento
                    profissional, assim como eu posso agregar minhas qualidades à empresa,
                    tenho interesse em fazer parte dessa história e participar de sua evolução, acredito em seus valores
                    e estou com muito ánimo para fazer parte da organização. </p>

                <h2>Contato</h2>
                <ul>
                    <li><a href="https://www.linkedin.com/in/matheus-alves-b1a22720a/"><span><AiOutlineLinkedin /></span></a></li>
                    <li><a href="mailto:mat.lualves@gmail.com"><span><AiOutlineMail /></span></a></li>
                </ul>
            </div>
        </Container >
    )
}