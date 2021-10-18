import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi there, my name is Helen Dao ^ ^.
          I'm currently learning about Software Engineer at FPTU.HCMC
        </p>
        <p>
          Contact me via:
        </p>
        <a
          className="App-link"
          href="https://github.com/HelenDao1501"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="App-link"
          href="https://www.facebook.com/bao.tram.1501/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </header>
    </div>
  );
}

export default App;
