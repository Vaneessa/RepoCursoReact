import './App.css';
import NavBar from './Components/Nav-bar/NavBar';
import FunctionalComponent  from './Components/functional-component/FunctionalComponent';
import ClassComponent from './Components/Class-component/ClassComponent';
import { Container } from 'react-bootstrap';
import ItemListContainer from './Components/container/ItemListContainer';

function App() {
  const Hello = "Por venir";

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi tienda!"></ItemListContainer>
      <FunctionalComponent Hello = {Hello}/>
      <ClassComponent Hello = {Hello}/>
    </div>
  );
}

export default App;
