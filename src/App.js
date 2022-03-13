import './App.css';
import Form from "./Components/Form"
import Header from "./Components/header"
import AddressContainer from "./Components/addressContainer"
import { useState } from 'react';
import dataList from './data';

function App() {
  const [data, setData] = useState(dataList)
  const [editFormVisibility, setEditFormVisibility] = useState(false)

  return (
    <div className="App">
      <Header/>
      <Form data={data} setData={setData} editFormVisibility={editFormVisibility}/>
      <AddressContainer data={data} setData={setData} editFormVisibility={editFormVisibility} setEditFormVisibility={setEditFormVisibility}/>  
    </div>
  );
}

export default App;
