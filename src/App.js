import logo from './logo.svg';
import './App.css';
import Photo from './Components/Photo/Photo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h5>Photo Cabin</h5>
        <Photo></Photo>
      </header>
    </div>
  );
}

export default App;
