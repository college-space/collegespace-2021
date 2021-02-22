import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ExamSpace from './pages/ExamSpace';
import Internships from './pages/Internships';
import Placements from './pages/Placements';
import SingleExperience from './pages/SingleExperience';
import Team from './pages/Team';
import Sidenav from './components/Sidenav';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Sidenav />

        <main className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/team' component={Team} />
            <Route exact path='/examspace/:branch' component={ExamSpace} />
            <Route
              exact
              path='/learnspace/internships'
              component={Internships}
            />
            <Route exact path='/learnspace/placements' component={Placements} />
            <Route
              path='/learnspace/:type/:id(\d+)'
              component={SingleExperience}
            />
            <Route exact path='/examspace/midsem' component={ExamSpace} />
            <Route exact path='/examspace/endsem' component={ExamSpace} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
