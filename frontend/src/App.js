import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ReviewScreen from './Screens/ReviewScreen';
import ContactScreen from './Screens/ContactScreen';


function App() {
  return (
      <div className="App">
      <Router>
          <Navbar/>
        <Switch>
        <Route exact path="/"> <HomeScreen/> </Route>
        <Route  path="/reviews"> <ReviewScreen/> </Route>
        <Route  path="/contact"> <ContactScreen/> </Route>
        </Switch>
      </Router>
      </div>
  );
}

export default App;
