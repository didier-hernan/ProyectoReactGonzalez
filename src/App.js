
import NavBar from './components/components/navbar/NavBar.js';
import ItemListContainer from './components/itemcontainer/ItemListConteiner.js';
import CartWidget from './components/component/cartwidget/CartWidget.js';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <ItemListContainer greeting = "Pagina En Construccion"/>    
      <CartWidget />
      </header>
    </div>
  );
}

export default App;
