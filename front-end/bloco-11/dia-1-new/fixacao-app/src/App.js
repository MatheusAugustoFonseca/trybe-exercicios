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
        this.setState((prevState) => ({
          buttonUm: prevState.buttonUm +1
        }), () => {
          console.log(`Clicou no botão UM! ${this.buttonColorChange(this.state.buttonUm)}`);
        })
      }
  
      handleClickTwo = () => {
        console.log('Clicou no botão DOIS!');
      }
  
      handleClickThree = () => {
        console.log('Clicou no botão TRÊS!');
      }

      buttonColorChange = (num) => {
        return num % 2 === 0 ? 'green' : 'white';
      }
      
      render() {
        return (
        <div>
        <button
         onClick={ this.handleClickOne}
         style={{backgroundColor: this.buttonColorChange(this.state.buttonUm)}}
        >
          Botão UM | How many times you clicked = {this.state.buttonUm}</button>
        <button onClick={ this.handleClickTwo }>Botão</button>
        <button onClick={ this.handleClickThree }>Botão</button>

        </div>)
      }
    }

    export default App;
