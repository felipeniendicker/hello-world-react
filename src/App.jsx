import './App.css'

function App() {
  return (
    <main className="page">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <section className="content" aria-labelledby="greeting">
        <div className="eyebrow">
          <span className="dot" aria-hidden="true" />
          Meu primeiro projeto React
        </div>
        <div className="symbol" aria-hidden="true">
          <span>&lt;/&gt;</span>
        </div>
        <p className="kicker">Aplicação de exemplo</p>
        <div className="heading-wrap">
          {/* Mensagem solicitada na atividade: */}
          <h1 id="greeting">Hello World, Felipe Rafael Niendicker</h1>
        </div>
        <p className="description">Uma página criada com React e Vite, pronta para publicação na Vercel.</p>
        <div className="tech" aria-label="Tecnologias utilizadas">
          <span>React</span><span>Vite</span><span>Vercel</span>
        </div>
      </section>
    </main>
  )
}

export default App
