import DoricaRaw from '../data/Dorica.json'
import WhatsAppIcon from './WhatsAppIcon'
import '../styles/Card.css'

function Card({ data, index }) {
  const { nome, logo, cor, produtos = [] } = data
  const dorica = DoricaRaw[0]
  const mensagem = encodeURIComponent(dorica.catalogoMensagem + nome)
  const reverse = index % 2 === 1

  return (
    <article
      // className={`card${reverse ? ' card--reverse' : ''}`}
      className='card'
      style={{ '--cor-fabrica': cor }}
    >
      <header className="card-header">
        <img className="card-logo" src={logo} alt={`Logo ${nome}`} />
        <h3>{nome}</h3>
      </header>

      <div className="card-produtos">
        {produtos.map((produto) => (
          <div className="produto" key={produto.nome}>
            <div className="produto-imagem">
              <img src={produto.imagem} alt={produto.nome} loading="lazy" />
            </div>
            <div className="produto-info">
              <strong>{produto.nome}</strong>
              {produto.descricao && <p>{produto.descricao}</p>}
            </div>
          </div>
        ))}
      </div>
      <a
      
        className="card-cta"
        href={`https://wa.me/${dorica.whatsapp}?text=${mensagem}`}
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppIcon size={15} />
        Solicitar catálogo completo
      </a>
    </article>
  )
}

export default Card