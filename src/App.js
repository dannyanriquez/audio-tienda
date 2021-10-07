import 'bootstrap/dist/css/bootstrap.min.css';
import { Cards } from './components/Cards';
import { Carrousel } from './components/Carrousel';
import { NavBar } from "./components/NavBar";


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
