import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import PetCard from './components/Petcard';
import Search from './components/Search';
import Mypets from './views/Mypets';
import AllPets from './views/Allpets';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";



function App() {
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/mypets" element={<Mypets/>}/>
    <Route exact path="/allpets" element={<AllPets/>}/>
    </Routes>
    </Router>
  );
}

export default App;
