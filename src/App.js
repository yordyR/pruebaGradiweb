import logo from './logo.svg';
import './App.scss';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Product from './views/product/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Product />} >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
