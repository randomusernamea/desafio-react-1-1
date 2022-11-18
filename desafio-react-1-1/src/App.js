import logo from './logo.svg';
import './App.css';
import FooterComp from './Componentes/FooterComp.jsx'
import MainComp from './Componentes/MainComp.jsx'
import HeadComp from './Componentes/HeadComp.jsx'


function App() {
  return (
    <div className="App">
     <HeadComp/>
     <MainComp/>
     <FooterComp/>
    </div>
  );
}

export default App;
