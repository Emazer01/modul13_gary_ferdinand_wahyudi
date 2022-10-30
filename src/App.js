import './App.css';
import logo from './logo.svg';
import Title from './Title';
import Body from './Body';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title />
      </header>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
