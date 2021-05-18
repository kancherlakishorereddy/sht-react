import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Tweets from './components/Tweets'
import Trends from './components/Trends'
import ScrollTop from './components/ScrollTop'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App min-vh-100 d-flex flex-column">
        <Navbar/>
        <div className="flex-grow-1">
          <Route exact path="/">
            <Redirect to="/tweets" />
          </Route>
          <Route path="/tweets" component={Tweets}></Route>
          <Route path="/trends" component={Trends}></Route>
        </div>
        <ScrollTop/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
