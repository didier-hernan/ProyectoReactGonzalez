import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner.js';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ItemListContainer greeting="Pagina En Construccion" />
      </header>
    </div>
  );
};

export default App;
