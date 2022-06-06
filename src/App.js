import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, route, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import ProductList from './component/ProductList';
import ProductDetail from './component/ProductDetail';

function App() {
  return (
    <div className="container">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/productdetail' element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
