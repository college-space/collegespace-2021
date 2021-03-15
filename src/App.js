import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Sidenav from './components/Layout/Sidenav';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Sidenav />
        <main className='container'>Main</main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
