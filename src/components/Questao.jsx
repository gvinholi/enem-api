import { useState } from "react"
import ReactMarkdown from "react-markdown";

function Questao({ questao }) {
    const [resposta, setResposta] = useState(null);
    const [corrigido, setCorrigido] = useState(false);

  return (
    <div>
      <h2>
        {questao.ano} - Questão {questao.numero}
      </h2>

      <ReactMarkdown>
        {questao.contexto}
      </ReactMarkdown>

      <div>
        {questao.alternativas.map((alt) => (
          <label key={alt.letter}
           style={{ display: "block" }}>
            <input 
                type="radio" 
                name={questao.id}
                onChange={() => setResposta(alt.letter)}
            />
            <strong>{alt.letter})</strong> {alt.text}
          </label>
        ))}

        <button onClick={() => setCorrigido(true)}>
            Corrigir
        </button>

        {corrigido && (
            <p>
                {resposta === questao.gabarito
                ? "✔ Correto"
                : "❌ Errado"}
            </p>
        )}
      </div>
    </div>
  );
}

export default Questao;
