import 'bootstrap/dist/css/bootstrap.min.css';
import { Cards } from './components/Cards/Cards';
import { Carrousel } from './components/Carousel/Carrousel';
import { NavBar } from "./components/NavBar/NavBar";


function App() {
  return (
    <div>
    <NavBar/>
    <Carrousel/>
    <Cards/>
    </div>
  );
}

export default App;
