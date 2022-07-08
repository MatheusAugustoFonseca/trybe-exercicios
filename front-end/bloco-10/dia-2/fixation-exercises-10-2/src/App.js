import logo from './logo.svg';
import './App.css';
import Image from './Image';
import staringCat from './cat.jpg';


function App() {
  return (
    <div>
      <Image source={staringCat} alt='Cute cat staring' />
    </div>
  );
}

export default App;
