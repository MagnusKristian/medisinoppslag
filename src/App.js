import logo from './logo.svg';
import './App.css';
import Search from './pages/Search';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Medisinoppslag.no?
          {/* TODO:lage logo? finne ut navn. pluss sjekk notater på telefonen, implementer.*/}
        </p>
      </header>
      <Search/>

    </div>
  );
}

export default App;
