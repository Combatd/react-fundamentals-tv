import logo from './logo.svg';
import Intro from './components/Intro';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TV Series List</h1>
        <Intro message='Here you can find all of your most loved series' />
      </header>
    </div>
  );
}

export default App;
