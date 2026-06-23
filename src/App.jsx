import { useEffect, useState } from "react";

function App() {
  const [ano, setAno] = useState(2023);
  const [questoes, setQuestoes] = useState([]);

  useEffect(() => {
    fetch(`/enem_${ano}.json`)
      .then((res) => res.json())
      .then((data) => setQuestoes(data));
  }, [ano]);

  return (
    <div style={{ padding: 20 }}>
      <h1>ENEM API</h1>
      <p>Total: {questoes.length}</p>
    </div>
  );
}

export default App;
