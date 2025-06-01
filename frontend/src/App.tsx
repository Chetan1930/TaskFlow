import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Register from './components/Register';

function App() {
  
  
  return (
    <>
    <Routes>
 <Route index element={<StepOne />} />
 <Route path="step-2" element={<Register />} />
 <Route path="step-3" element={<Login />}>
</Routes>
    </>
  );
}

export default App;