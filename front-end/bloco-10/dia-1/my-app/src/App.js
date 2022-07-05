import React from 'react';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}
const compromissos = ['Wake up', 'Breakfast', 'Gym'];

class App extends React.Component {
  render(){
    return(
      <div>
        <ul>
          { compromissos.map(tarefa => Task(tarefa)) }
        </ul>
      </div>
    )
  }
}

export default App;
