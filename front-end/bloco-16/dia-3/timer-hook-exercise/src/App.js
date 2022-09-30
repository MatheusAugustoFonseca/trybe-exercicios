import logo from './logo.svg';
import './App.css';
import useTimer from './hooks/useTimer';

function App() {
  const { timer, randomNumber, isMultiple } =  useTimer();
  return (
    <div className="App">
      <h1>{`Timer: ${timer}`}</h1>
      <h2>{`Número da sorte criado: ${randomNumber}`}</h2>
      <h2>{isMultiple && 'BINGO!!'}</h2>
    </div>
  );
}

export default App;
