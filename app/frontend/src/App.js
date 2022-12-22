import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const [people, setPeople] = useState([])

  useEffect(()=> {
    axios.get('./api').then(res => setPeople(res.data))
  }, [])

  return people
}

export default App;
