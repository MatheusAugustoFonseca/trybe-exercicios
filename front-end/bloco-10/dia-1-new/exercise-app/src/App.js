//questão 1 + 2
import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compr = ['estudar', 'comer', 'limpar casa', 'diversão']

function App() {
  return (
    <div>
      {compr.map((element)=> Task(element))}      
    </div>
  );
}

export default App;
