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
      .then((data) => {
        setQuestoes(data);
        setIndex(0);
      });
  }, [ano]);

  return (
    <div className="min-h-screen bg-neutral-950 px-4 py-10 text-neutral-100 sm:px-6 lg:py-16">
      <div className="mx-auto w-full max-w-3xl">
        {/* Cabeçalho */}
        <header className="mb-10 border-b border-neutral-800 pb-8">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-300 [text-shadow:0_0_18px_rgba(34,211,238,0.5)]">
            // arquivo · enem
          </p>
          <h1 className="font-serif text-5xl font-bold leading-none text-neutral-100 sm:text-6xl">
            Questões do <span className="italic text-amber-300">ENEM</span>
          </h1>

          <div className="mt-7 flex items-center gap-3">
            <label
              htmlFor="ano"
              className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400"
            >
              Ano
            </label>
            <div className="relative">
              <select
                id="ano"
                value={ano}
                onChange={(e) => setAno(Number(e.target.value))}
                className="appearance-none rounded-md border border-neutral-700 bg-neutral-900 py-2 pl-4 pr-10 font-mono text-sm text-neutral-100 outline-none transition-colors hover:border-cyan-400 focus:border-cyan-400"
              >
                {Array.from({ length: 15 }, (_, i) => 2009 + i).map((a) => (
                  <option key={a} value={a} className="bg-neutral-900">
                    {a}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 font-mono text-cyan-300">
                ▾
              </span>
            </div>
          </div>
        </header>

        {/* Conteúdo */}
        {!questoes.length ? (
          <div className="flex items-center gap-3 font-mono text-sm uppercase tracking-[0.3em] text-neutral-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            Carregando...
          </div>
        ) : (
          <>
            <Questao
              key={questaoAtual.id}
              questao={questaoAtual}
            />

            {/* Navegação */}
            <nav className="mt-8 flex items-center justify-between gap-4">
              <button
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
                disabled={index === 0}
                className="rounded-md border border-neutral-700 bg-neutral-800/40 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-neutral-100 transition-all hover:border-cyan-400 hover:text-cyan-300 disabled:cursor-not-allowed disabled:opacity-30"
              >
                ← Anterior
              </button>

              <span className="font-mono text-xs tracking-[0.2em] text-neutral-400">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(questoes.length).padStart(2, "0")}
              </span>

              <button
                onClick={() =>
                  setIndex((i) => Math.min(questoes.length - 1, i + 1))
                }
                disabled={index === questoes.length - 1}
                className="rounded-md border border-neutral-700 bg-neutral-800/40 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-neutral-100 transition-all hover:border-cyan-400 hover:text-cyan-300 disabled:cursor-not-allowed disabled:opacity-30"
              >
                Próxima →
              </button>
            </nav>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
