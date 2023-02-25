import './App.css';
import { AllRoutes } from './Components/AllRoutes/AllRoutes';
import Home from './Home';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div style={{backgroundColor:"#373737"}}>
       <Navbar/>
     {/* <Home/> */}
     <AllRoutes/>
    </div>
  );
}

export default App;
