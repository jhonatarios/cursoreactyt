import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';


function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <SayMyName nome="Jhow" />
      <SayMyName nome="Jungle" />
      <SayMyName nome={nome} />
      <Pessoa 
      nome="Jhonata" 
      idade="22" 
      profissao="Programador" 
      foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
