import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchResultsPage from './Components/SearchResultsPage';


function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Switch>
          <Route path = "/search">
            <SearchResultsPage/>
          </Route>
          <Route path = "/">
            <HomePage/>
          </Route>
        </Switch>
        <Footer/>
      </Router>      
    </div>
  );
}

export default App;
