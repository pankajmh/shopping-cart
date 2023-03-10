import './App.css';
import Header from './container/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListing from './container/ProductListing';
import ProductDetail from './container/ProductDetail';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={ProductListing} />
          <Route path='/product/:productId' component={ProductDetail} />
          <Route>404 Product Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
