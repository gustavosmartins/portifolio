import { BrowserRouter } from "react-router-dom";
import Inicio from "./pages/inicio/Inicio"
import Inicio from "./pages/sobre/Sobre"
import Inicio from "./pages/projetos/Projetos"

export default function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
    
    <Header/>
    <Routes>
        <Route path="/" element=""{<Inicio/>}/>
        <Route path="/sobre" element=""{<Sobre/>}/>
        <Route path="/projetos" element=""{<Projetos/>}/>
    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}
