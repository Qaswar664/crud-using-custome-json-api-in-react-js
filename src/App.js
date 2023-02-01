import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllData from './component/AllData';
import AddUser from './component/AddUser';
import EditUser from './component/EditUser';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
       
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<AllData/>} />
        <Route path='/add' element={<AddUser/>} />
        <Route path="/edit/:id" element={<EditUser/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;