import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListConteiner.js';


import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <ItemListContainer greeting = "Pagina En Construccion"/>    
      
      </header>
    </div>
  );
}

export default App;
