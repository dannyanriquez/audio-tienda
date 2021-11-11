import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Cart } from './components/Cart/Cart';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { CartContextProvider } from './context/CartContext'




function App() {
  
  return (
    <div>  

    <CartContextProvider>
    <BrowserRouter>
    <NavBar/>
        <Switch>
        <Route exact path="/" component={ItemListContainer}/>  
            <Route exact path="/categoria/:idCategoria" component={ItemListContainer}/>  
            <Route exact path="/details/:idItem" component={ItemDetailContainer}/> 
            <Route exact path="/Cart" component={Cart}/> 
        </Switch>
    </BrowserRouter> 
    </CartContextProvider>
    
    </div>
  );
}

export default App;
