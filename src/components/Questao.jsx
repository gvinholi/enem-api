import ReactMarkdown from "react-markdown";

function Questao({ questao }) {
  return (
    <div style={{ marginTop: 20 }}>
      <h2>
        {questao.ano} - Questão {questao.numero}
      </h2>

      <ReactMarkdown>
        {questao.contexto}
      </ReactMarkdown>
    </div>
  );
}

export default Questao;
