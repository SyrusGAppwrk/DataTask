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
import Project from './Component/Lookup/Project';
import ProjectCor from './Component/Lookup/ProjectCor';
import ProjectManger from './Component/Lookup/ProjectManger';
import User from './Component/Lookup/User';

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
      <Route path="Project" element={<Project />}/> 
      <Route path="Pc" element={<ProjectCor />}/> 
      <Route path="Pm" element={<ProjectManger />}/> 
      <Route path="user" element={<User />}/> 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
