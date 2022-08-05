import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Please Install these dependencies</p>
        <table style={{textAlign: 'left'}}>
          <ul>
            <li>Feather for icon</li>
            <li>Reactstrap for componenet</li>
            <li>Bootstrap for styling</li>
          </ul>
        </table>
        <p>          After this ☝️
          Make Your Own Route & start Working</p>
      </header>
    </div>
  );
}

export default App;
