
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
  <Navbar title="Portfolio"/>
  <div className="container my-3">
  <TextForm heading="Textform Heading"/>
  </div>
    </>
  );
}


export default App;
