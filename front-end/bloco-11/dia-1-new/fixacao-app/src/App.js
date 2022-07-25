    import React from 'react';

    
    class App extends React.Component {
      constructor() {
        super()
        this.state = {
          buttonUm: 0,
          buttonDois: 0,
          buttonTres: 0,
        }
      }
      handleClickOne = () => {
        console.log('Clicou no botão UM!');
        this.setState((prevState) => ({
          buttonUm: prevState.buttonUm +1
        }))
      }
  
      handleClickTwo = () => {
        console.log('Clicou no botão DOIS!');
      }
  
      handleClickThree = () => {
        console.log('Clicou no botão TRÊS!');
      }
      
      render() {
        return (
        <div>
        <button onClick={ this.handleClickOne }>Botão UM | How many times you clicked = {this.state.buttonUm}</button>
        <button onClick={ this.handleClickTwo }>Botão</button>
        <button onClick={ this.handleClickThree }>Botão</button>

        </div>)
      }
    }

    export default App;
