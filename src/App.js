
import './App.css';
import Adduser from './components/Adduser';
import Alluser from './components/Alluser';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
  return (
  <BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<Alluser/>}/> 
  <Route path="/Add" element={<Adduser/>}/> 
</Routes>

</BrowserRouter>
  );
}

export default App;
