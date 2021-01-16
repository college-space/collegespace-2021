import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import Home from './components/Home';
import Footer from './components/Footer';
import ExamSpace from './components/ExamSpace';
import LearnSpace from './components/LearnSpace';

function App() {
  return (
    <Router>
      <div className='App'>
        <SideBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/examspace' component={ExamSpace} />
          <Route exact path='/learnspace' component={LearnSpace} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
