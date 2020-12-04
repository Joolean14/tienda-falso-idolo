import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import HeaderLinks from './HeaderLinks';
import Footer from './Footer';
import Producto from './Producto';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/'>
            <Header />
            <HeaderLinks />
            <Producto
            url='./scorpio.png' nombre='Camiseta YML' precio='$50.000' />
            <Producto
            url='./scorpio.png' nombre='Camiseta Yo Me Lanzo' precio='$60.000' />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
    );
}

export default App;
