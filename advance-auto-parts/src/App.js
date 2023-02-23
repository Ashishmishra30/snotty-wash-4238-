import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Navbar from './Components/Navbar';
import NavigationMenu from './Components/NavigationMenu';
import { ProductPage } from './Components/Productpage/ProductPage';

function App() {
  return (
    <div style={{backgroundColor:"#373737"}}>
     <Navbar/>
     <NavigationMenu/>
     <HomePage/>
     <ProductPage/>
    </div>
  );
}

export default App;
