import { Link } from "react-router-dom";
import * as S from "./styled"
import linkedin from "../../assets/.linkedin.png"
import git from "../../assets/.git.png"
import insta from "../../assets/.insta.png"

export default function Header() {
  return (
    
    
    <S.Header>
    
      
      <S.boxlogo>
     <img src="https://yt3.googleusercontent.com/G1zp8_yGUoq5spcEjPP04HJRq8BFLi2LzBtbJnR9fQvy-4ifyReoxrW0nRSU1HKuipSHi1fqULA=s900-c-k-c0x00ffffff-no-rj" alt="" />
     
     <h2>guto</h2>
     <p>Front-end Developer</p>
        
      </S.boxlogo.boxlogo>
      
      
      <S.BoxMenu>
        <ul>
            <li><link to="/">Inicio</link></li>
            <li><link to="/sobre">Sobre</link></li>
            <li><link to="/Projetos">Projetos</link></li>
        </ul>
      </S.BoxMenu.BoxMenu>
    

    <S.BoxIcon>


      <a href=""><img src={linkedin} alt="" /></a>
      <a href=""><img src={git} alt="" /></a>
      <a href=""><img src={insta} alt="" /></a>
    
    
    </S.BoxIcon>
    
    
    </S.Header.Header>
  )
}
