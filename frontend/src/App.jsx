
import './App.css';
import Navbar from './components/Navbar';
import Options from './pages/Options';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom"

function App() {
  

  return (
    <div>
      <Navbar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/options" element={<Options />}/>
      </Routes>
    </main>
    </div>
   
  );
}



export default App
