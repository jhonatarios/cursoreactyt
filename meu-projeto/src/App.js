import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';


function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <Frase />
      <Frase />
      <Pessoa 
      nome="Jhonata" 
      idade="22" 
      profissao="Programador" 
      foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
