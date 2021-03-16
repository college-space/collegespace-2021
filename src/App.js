import './App.css';
import { AppProvider } from './context/context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Sidenav from './components/Layout/Sidenav';
import Home from './pages/Home';
import Team from './pages/Team';
import ExamSpace from './pages/ExamSpace';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className='App'>
          <Header />
          <Sidenav />
          <main className='container'>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/team'>
                <Team />
              </Route>
              <Route exact path='/examspace/:branch'>
                <ExamSpace />
              </Route>
            </Switch>
          </main>

          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
