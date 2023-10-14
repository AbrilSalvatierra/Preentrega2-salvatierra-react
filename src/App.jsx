import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
const App = () => {

  return (
    <Router>
    <NavBar/>

    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path='/category/:categoryId' element={<ItemListContainer/>} />
      <Route path='/contact' element={<ContactPage/> } />
    </Routes>
    </Router>
    
  )
}

export default App;
