/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App; */
import Item from "./components/item"; //importando o arquivo 
import Card from "./components/card"; //importando o card

const App = () => {
  return(
    <>
    <h1>Minha primeira aplicação</h1>
    <ul>
        {/* <Item texto="Primeiro"/> 
        <Item texto="Segundo"/>
        <Item texto=""/> --rodando props.texto */}
        <Item>
          Primeiro
        </Item>
        <Item>
          Segundo
        </Item>
        <Item>
          Terceiro
        </Item>
    </ul>
    <Card/>
    </>
  )
}
export default App;
