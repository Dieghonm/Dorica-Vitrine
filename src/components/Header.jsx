import fabricasRaw from '../data/data.json'
import DoricaRaw from '../data/dorica.json'
import '../styles/header.css'

function Header() {
  const mensagem = encodeURIComponent(DoricaRaw[0].mensagem)
  const totalFabricas = fabricasRaw.length
  
  return (
    <header className="site-header">
      <div className="brand-bar">
        <div className="brand-bar-logo"> 
          <img className="brand-logo" src={DoricaRaw[0].logo} alt={DoricaRaw[0].nome} />
          <span className="brand-name">{DoricaRaw[0].nome}</span>
        </div>
        <a
          className="hero-cta"
          href={`https://wa.me/${DoricaRaw[0].WHATSAPP}?text=${DoricaRaw[0].mensagem}`}
          target="_blank"
          rel="noreferrer"
        >
          Fale conosco no WhatsApp
        </a>
      </div>

      <div className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Vitrine de fabricantes</span>
          <h1>Os campeões de venda, em um só lugar.</h1>
          <p className="hero-sub">
            Uma amostra rápida do que cada fabricante tem de mais forte —
            sem precisar abrir 20 catálogos pra encontrar o que interessa.
          </p>

        </div>

        <div className="hero-stat">
          <span className="hero-stat-number">{totalFabricas}</span>
          <span className="hero-stat-label">fabricantes representados</span>
        </div>
      </div>
    </header>
  )
}

export default Header
