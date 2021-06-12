import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Edit from './components/Edit';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NotFoundPage from './components/NotFoundPage';
function App() {
  return (
    <Router>
      <div className='grid-container'>
        <Route component={NavBar} />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/edit' component={Edit} />
            <Route exact path='/about' component={About} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <Route component={Footer} />
      </div>
    </Router>
  );
}

export default App;
