import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import { BrowserRouter as Router, Switch, Route , Link } from 'react-router-dom';
import Checkout from './components/Checkout';
import Subtotal from './components/Subtotal';
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/checkout">
           <Checkout/>
          </Route>

          <Route  exact path="/">
             <Home/>
          </Route>  
        </Switch>  
      </div>
    </Router>
  );
}

export default App;
