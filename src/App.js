import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Carrousel } from './components/Carousel/Carrousel';
import { NavBar } from "./components/NavBar/NavBar";
import { Router } from 'react-router-dom';




function App() {
  return (
    <div>
    <NavBar/>
    <Carrousel/>
    <ItemListContainer title="SOMOS UNA TIENDA 100% ONLINE. TE OFRECEMOS VARIEDAD Y CALIDAD ACORDE PARA LOS 
    USUARIOS MÁS EXIGENTES"/>
  
    
    </div>
  );
}

export default App;
