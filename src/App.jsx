import { useEffect, useState } from "react";
import Questao from "./components/Questao";

function App() {
  const [ano, setAno] = useState(2023);
  const [questoes, setQuestoes] = useState([]);
  const [index, setIndex] = useState(0);
  const questaoAtual = questoes[index];

  useEffect(() => {
    fetch(`/enem_${ano}.json`)
      .then((res) => res.json())
      .then(setQuestoes);
  }, [ano]);

  if (!questoes.length) return <p>Carregando...</p>;

  return (
    <div style={{ padding: 20 }}>
      <div>
        <select onChange={(e) => setAno(Number(e.target.value))}>
          {Array.from({ length: 15 }, (_, i) => 2009 + i).map(a => (
            <option key={a} value={a}>
              {a}
            </option>
           ))}
        </select>
      </div>

      <Questao questao={questaoAtual} />

      <button onClick={() => setIndex(i => Math.max(0, i - 1))}>
        Anterior
      </button>
      <button onClick={() => setIndex(i => Math.min(questoes.length - 1, i + 1))}>
        Próxima
      </button>
    </div>
  );
}

export default App;
