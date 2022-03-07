import React from 'react';
import './App.css';

function App() {
  
  const [resul, setResult] =  React.useState(0);

  const handleSubmit = (evt) =>{
    evt.preventDefault();
    const {firstNumber, secondNumber, operator} = evt.target.elements;

    const firstNum = firstNumber.value -0
    const secondNum = secondNumber.value -0
    const opera = operator.value 

    if(opera === '+'){
      setResult(firstNum + secondNum);    
    }

    if(opera === '-'){
      setResult(firstNum - secondNum);    
    }

    if(opera === '*'){
      setResult(firstNum * secondNum);    
    }

    if(opera === '/'){
      setResult(firstNum / secondNum);    
    }

  };

  return (
    <main>

        <form onSubmit={handleSubmit}>
           <input type="number" name='firstNumber' />
            <select name="operator" >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
           <input type="number" name='secondNumber' />

            <div>{resul}</div>

             <button type='submit'>Check</button>
        </form>
      
    </main>)
  }
  
  export default App;
  