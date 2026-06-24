# 📚 ENEM API – Plataforma de Estudos

Uma aplicação web desenvolvida em React que consome questões reais do ENEM (2009–2023), permitindo navegação, visualização e correção automática das respostas.

---

## 🚀 Demonstração

👉 Acesse o projeto online:  
https://enemonline.vercel.app

---

## 🎯 Objetivo do projeto

Este projeto tem como objetivo:

- Consumir e estruturar dados reais de questões do ENEM
- Criar uma interface moderna para estudo
- Permitir navegação entre questões por ano
- Implementar sistema de respostas e correção automática
- Simular uma plataforma de estudos estilo QConcursos

---

## 🧠 Funcionalidades

✔ Seleção de ano (2009–2023)  
✔ Carregamento dinâmico de questões  
✔ Renderização de enunciados com Markdown (GFM)  
✔ Exibição de imagens das questões e alternativas  
✔ Sistema de múltipla escolha interativo  
✔ Correção automática de respostas  
✔ Destaque de resposta correta/incorreta  
✔ Navegação entre questões (anterior/próxima)

---

## 🛠️ Tecnologias utilizadas

- React
- Vite
- Tailwind CSS
- React Markdown
- remark-gfm
- JavaScript (ES6+)

---

## 📁 Estrutura do projeto

```
enem-api/
├── public/
│   ├── enem_2009.json
│   ├── enem_2010.json
│   ├── ...
│   └── enem_2023.json
│
├── src/
│   ├── components/
│   │   └── Questao.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
└── tailwind.config.js
```

---

## ⚙️ Como rodar localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU_USUARIO/enem-api.git
cd enem-api
```

---

### 2. Instalar dependências

```bash
npm install
```

---

### 3. Rodar o projeto

```bash
npm run dev
```

Acesse:
http://localhost:5173

---

## 📦 Build para produção

```bash
npm run build
```

---

## 🌐 Deploy (Vercel)

1. Acesse https://vercel.com  
2. Importe o repositório do GitHub  
3. Configure automaticamente (Vite detectado)  
4. Clique em Deploy  

---

## 📌 Formato dos dados

```json
{
  "id": "2023-1",
  "ano": 2023,
  "numero": 1,
  "disciplina": "linguagens",
  "lingua": "espanhol",
  "contexto": "Texto base...",
  "introducao_alternativas": "Pergunta...",
  "imagens": [],
  "alternativas": [
    {
      "letter": "A",
      "text": "Alternativa A"
    }
  ],
  "gabarito": "A"
}
```

---

## 📈 Melhorias futuras

- Sistema de login
- Salvamento de progresso
- Modo simulado com timer
- Filtro por disciplina
- Backend com banco de dados

---

## 🧑‍💻 Autor

Gabriel Vinholi
