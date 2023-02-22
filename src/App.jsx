import './App.css'
import Form from './components/Form'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [id, setID] = useState(0);
  const [people, setPeople] = useState(() => {
    const saved = localStorage.getItem("people");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
  }, [people])

  function addUser(user) {
    setPeople(current => [...current, user]);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home people={people} />} />
        <Route path="/form" element={<Form addUser={addUser} />} />
      </Routes>
    </div>
  )
}

export default App
