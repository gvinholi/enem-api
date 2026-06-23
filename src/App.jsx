import { useEffect, useState } from "react";
import Questao from "./components/Questao";

function App() {
  const [ano, setAno] = useState(2023);
  const [questoes, setQuestoes] = useState([]);

  useEffect(() => {
    fetch(`/enem_${ano}.json`)
      .then((res) => res.json())
      .then(setQuestoes);
  }, [ano]);

  if (!questoes.length) return <p>Carregando...</p>;

  return (
    <div style={{ padding: 20 }}>
      <Questao questao={questoes[0]} />
    </div>
  );
}

export default App;
