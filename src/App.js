import logo from './logo.svg';
import './App.css';

function App() {
  let name="Nishant sharma";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{name}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React<br/><br/> with {name}
        </a>
      </header>
    </div>
  );
}

export default App;
