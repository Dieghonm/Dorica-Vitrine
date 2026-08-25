import fabricasRaw from '../data/data.json'
import DoricaRaw from '../data/Dorica.json'
import '../styles/Header.css'

function Header() {
  const dorica = DoricaRaw[0]
  const mensagem = encodeURIComponent(dorica.mensagem)
  const totalFabricas = fabricasRaw.length

  return (
    <header className="site-header">
      <div className="brand-bar">
        <img className="brand-logo" src={dorica.logo} alt={dorica.nome} />
        <span className="brand-name">{dorica.nome}</span>
      </div>

      <div className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Vitrine de fabricantes</span>
          <h1>Os campeões de venda, em um só lugar.</h1>
          <p className="hero-sub">
            Uma amostra rápida do que cada fabricante tem de mais forte —
            sem precisar abrir varios catálogos pra encontrar o que interessa.
          </p>

          <a
            className="hero-cta"
            href={`https://wa.me/${dorica.whatsapp}?text=${mensagem}`}
            target="_blank"
            rel="noreferrer"
          >
            Fale conosco no WhatsApp
          </a>
        </div>

      </div>
    </header>
  )
}

export default Header
