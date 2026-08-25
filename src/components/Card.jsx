import DoricaRaw from '../data/Dorica.json'
import '../styles/Card.css'

function Card({ data }) {
  const { nome, logo, cor, produtos = [] } = data
  const dorica = DoricaRaw[0]
  const mensagem = encodeURIComponent(dorica.catalogoMensagem + nome)

  return (
    <article className="card" style={{ '--cor-fabrica': cor }}>
      <header className="card-header">
        <img className="card-logo" src={logo} alt={`Logo ${nome}`} />
        <h3>{nome}</h3>
      </header>

      <div className="card-produtos">
        {produtos.slice(0, 2).map((produto) => (
          <div className="produto" key={produto.nome}>
            <div className="produto-imagem">
              <img src={produto.imagem} alt={produto.nome} />
            </div>
            <div className="produto-info">
              <strong>{produto.nome}</strong>
              {produto.descricao && <span>{produto.descricao}</span>}
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
        Solicitar catálogo completo
      </a>
    </article>
  )
}

export default Card
