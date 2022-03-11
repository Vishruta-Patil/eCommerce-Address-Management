import './App.css';
import Form from "./Components/Form"
import Header from "./Components/header"
import FormCantroller from "./Components/formCantroller"
import AddressContainer from "./Components/addressContainer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <AddressContainer/>      
    </div>
  );
}

export default App;
