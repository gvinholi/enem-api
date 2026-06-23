import ReactMarkdown from "react-markdown";

function Questao({ questao }) {
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
          <label key={alt.letter} style={{ display: "block" }}>
            <input type="radio" name={questao.id} />
            <strong>{alt.letter})</strong> {alt.text}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Questao;
