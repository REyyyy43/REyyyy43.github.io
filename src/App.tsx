import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/style.css'
import Home from './pages/Home'

function App() {
  return (
< BrowserRouter>
 < Routes>
  < Route path = '/' element = {<Home />}/>
 </Routes>
</BrowserRouter>
  );
}

export default App
