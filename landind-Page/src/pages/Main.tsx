import Frontend from "../templates/Frontend";
import * as S from './styles';
import Me from "../assets/eu2.jpg";
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';

const socialNetwork = [
  { name: "linkedin", icon: <FaLinkedinIn/>, url: "https://www.linkedin.com/"},
  { name: "github", icon: <FaGithub />, url: "https://github.com/" }
]

function Main() {
  return ( 
  <Frontend>
    <S.Container>
      <div className="coluna1">
      <img src={Me} className="img"></img>
      <h1>Márcia Escolastico</h1>
        <p className='title'>Estudante & Desenvolvedora</p>

        <section id="icons"> ICONS
        {socialNetwork.map((icon) => (
          <a href={icon.url} className="icon-btn" id={icon.name} target="_blank" rel="noopener noreferrer"></a> 
          
          //rel="noopener noreferrer": Usado por motivos de segurança ao abrir links em uma nova aba, evita possíveis ataques de tabbing (uma vulnerabilidade de segurança).
        ))}
        </section>
        
        </div>
    
      <div className="coluna2">
      <h2>Sobre Mim</h2>
    <p>
    Sou estudante de Análise e Desenvolvimento de Sistemas, com conhecimento em AWS e SQL, e atualmente estou dedicada a aprimorar minhas habilidades no desenvolvimento front-end. Tenho grande interesse tanto no back-end quanto no front-end, o que me motiva a buscar constantemente novas oportunidades para aprender e aplicar meus conhecimentos. Meu objetivo é me tornar uma desenvolvedora completa, capaz de enfrentar desafios e criar soluções inovadoras que façam a diferença.
    </p>
      </div>

    </S.Container>
  </Frontend>
  );
}

export default Main;
