import OlaMundo from './components/OlaMundo';
import DigaMeuNome from './components/DigaMeuNome';
import Frases from './components/Frases';
import './App.css';


function App() {
  return (
    <div className="container">
      <h1>Qual é meu nome ?</h1>
      <DigaMeuNome nome='Camille' idade='16' profissao='Estudante'/>

    </div>
  );
}

export default App;
