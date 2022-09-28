import React, { useContext, useState } from  'react';
import FormContext from '../context/FormContext';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [module, setModule] = useState();
  const { addData } = useContext(FormContext);

  const handleClick = (event) => {
    event.preventDefault();
    const personalInfo = { name, email, module, };
    addData(personalInfo);
  }

  return(
    <div>
    <form>
      <fieldset>
        <legend>
          Dados pessoais
        </legend>
        <label htmlFor="name">
          Nome completo
          <input type="text" id="name" 
          value={name}
          onChange={ ({ target }) => setName(target.value) } />
        </label>
        <label htmlFor="email">
          Digite seu email
          <input type="email" id="email" 
          value={email}
          onChange={ ({ target }) => setEmail(target.value) } />
        </label>
      </fieldset>

      <fieldset>
        <legend>
          Módulo
        </legend>
        <label htmlFor="fundamentals">
          Fundamentos
          <input
            type="radio"
            id="fundamentals"
            name="module"
            value="Fundamentos"
            checked={ module === 'Fundamentos' }
            onChange={ ({ target }) => setModule(target.value) }
          />
        </label>
        <br />
        <label htmlFor="frontend">
          Front-end
          <input
            type="radio"
            id="frontend"
            name="module"
            value="Front-end"
            checked={ module === 'Front-end' }
            onChange={ ({ target }) => setModule(target.value) }
          />
        </label>
        <br />
        <label htmlFor="backend">
          Back-end
          <input
            type="radio"
            id="backend"
            name="module"
            value="Back-end"
            checked={ module === 'Back-end' }
            onChange={ ({ target }) => setModule(target.value) }
          />
        </label>
        <br />
        <label htmlFor="cs">
          Ciência da computação
          <input
            type="radio"
            id="cs"
            name="module"
            value="Ciência da computação"
            checked={ module === 'Ciência da computação' }
            onChange={ ({ target }) => setModule(target.value) }
          />
        </label>
      </fieldset>
    <button type="submit"
    onClick={ handleClick }>
    Enviar dados
    </button>
    </form>
    <ul>

    </ul>
    </div>
  )
}

export default Form;
