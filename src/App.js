import './App.css';
import Search from './pages/Search';
import Results from './components/Results/Results';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          TEST STUFF/USER SEARCH
          {/* Medisinoppslag.no? */}
          {/* TODO:lage logo? finne ut navn. pluss sjekk notater på telefonen, implementer.*/}
        </p>
      </header>
      <Results/>
      {/* <Search/> */}

    </div>
  );
}

export default App;
