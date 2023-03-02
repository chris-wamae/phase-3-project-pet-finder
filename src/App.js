import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import PetCard from './components/Petcard';
import Search from './components/Search';
import Mypets from './views/Mypets';
import AllPets from './views/Allpets';


function App() {
  return (
    <>
    <Mypets/>
    <AllPets/>
    </>
  );
}

export default App;
