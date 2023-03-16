import './App.css';
import './components/CartWidget.css';
import './components/ItemListContainer.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'} />

    </>
  );
}

export default App;