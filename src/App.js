import logo from './logo.svg';
import Intro from './components/Intro';
import './App.css';

function App() {
  const state = {
    series: []
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TV Series List</h1>
        <Intro message='Here you can find all of your most loved series' />
        The length of series array = {state.series.length}
      </header>
    </div>
  );
}

export default App;
