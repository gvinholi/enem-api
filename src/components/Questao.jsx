import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Questao({ questao }) {
  const [resposta, setResposta] = useState(null);
  const [corrigido, setCorrigido] = useState(false);

  if (!questao) return null;

  return (
    <article className="rounded-xl border border-neutral-700 bg-neutral-900 p-6 shadow-2xl sm:p-8">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
        {questao.disciplina && (
          <span className="rounded-sm border border-neutral-700 px-2 py-1 text-amber-300">
            {questao.disciplina}
          </span>
        )}

        <span className="rounded-sm border border-neutral-700 px-2 py-1">
          {questao.ano}
        </span>

        <span className="rounded-sm border border-neutral-700 px-2 py-1 text-cyan-300">
          Q.{String(questao.numero).padStart(2, "0")}
        </span>
      </div>

      {/* Enunciado */}
      <div className="space-y-8">
        {questao.contexto && (
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown>{questao.contexto}</ReactMarkdown>
          </div>
        )}

        {questao.introducao_alternativas && (
          <div className="rounded-lg border border-cyan-900/40 bg-cyan-950/10 p-5">
            <p className="text-lg font-medium leading-relaxed text-neutral-100">
              {questao.introducao_alternativas}
            </p>
          </div>
        )}
      </div>

      {/* Imagens da questão */}
      {questao.imagens?.length > 0 && (
        <div className="mt-6 flex flex-col gap-4">
          {questao.imagens.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Imagem ${index + 1}`}
              className="rounded-lg border border-neutral-700"
            />
          ))}
        </div>
      )}

      {/* Alternativas */}
      <div className="mt-8 flex flex-col gap-3">
        {questao.alternativas?.map((alt, i) => {
          const letra = alt.letter ?? alt.letra ?? String.fromCharCode(65 + i);

          const texto = alt.text ?? alt.texto ?? "";

          const correta = letra === questao.gabarito;

          return (
            <label key={letra} className="cursor-pointer">
              <input
                type="radio"
                name={questao.id}
                className="hidden"
                checked={resposta === letra}
                onChange={() => {
                  setResposta(letra);
                  setCorrigido(false);
                }}
              />

              <div
                className={`
                  flex items-start gap-4 rounded-lg border p-4 transition-all duration-200
                  ${
                    corrigido && correta
                      ? "border-green-500 bg-green-950/30"
                      : resposta === letra
                        ? "border-cyan-400 bg-cyan-950/30"
                        : "border-neutral-700 bg-neutral-800/40 hover:border-cyan-400 hover:bg-neutral-800"
                  }
                `}
              >
                <span
                  className={`
                    flex h-8 w-8 shrink-0 items-center justify-center rounded-md border bg-neutral-900 font-mono text-sm font-semibold
                    ${
                      corrigido && correta
                        ? "border-green-500 text-green-400"
                        : "border-neutral-700 text-cyan-300"
                    }
                  `}
                >
                  {letra}
                </span>

                <div className="flex flex-col gap-3">
                  <span className="text-neutral-200">{texto}</span>

                  {alt.file && (
                    <img
                      src={alt.file}
                      alt={`Alternativa ${letra}`}
                      className="max-w-full rounded-lg border border-neutral-700"
                    />
                  )}
                </div>
              </div>
            </label>
          );
        })}
      </div>

      {/* Botão corrigir */}
      <div className="mt-6">
        <button
          onClick={() => setCorrigido(true)}
          disabled={!resposta}
          className="rounded-md border border-cyan-400 px-5 py-2 font-mono text-sm text-cyan-300 transition hover:bg-cyan-400 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
        >
          Corrigir
        </button>
      </div>

      {/* Resultado */}
      {corrigido && (
        <div className="mt-4">
          {resposta === questao.gabarito ? (
            <p className="font-semibold text-green-400">✔ Resposta correta</p>
          ) : (
            <p className="font-semibold text-red-400">
              ❌ Resposta incorreta. Gabarito: {questao.gabarito}
            </p>
          )}
        </div>
      )}
    </article>
  );
}
