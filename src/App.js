import './App.css';
import Home from './Component/Home';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Development from './Component/Department/Development';
import Designing from './Component/Department/Designing';
import Contentteam from './Component/Department/Contentteam';
import Digitalteam from './Component/Department/Digitalteam';
import Contractors from './Component/Department/Contractors';
import QATeam from './Component/Department/QATeam';
import NavbarLayout from './NavbarLayout';

function App() {
  return (
    <BrowserRouter>
    <NavbarLayout/>
    
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="Development" element={<Development />}/> 
      <Route path="Designing" element={<Designing />}/> 
      <Route path="Contentteam" element={<Contentteam />}/> 
      <Route path="Digitalteam" element={<Digitalteam />}/> 
      <Route path="Contractors" element={<Contractors />}/> 
      <Route path="QATeam" element={<QATeam />}/> 
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
