import '../styles/card.css'

function Card({ data }) {
  const { nome, logo, cor, produtos = [] } = data

  return (
    <article className="card" style={{ '--cor-fabrica': cor }}>
      <header className="card-header">
        <img className="card-logo" src={logo} alt={`Logo ${nome}`} />
        <h3>{nome}</h3>
      </header>

      <div className="card-produtos">
        {produtos.slice(0, 2).map((produto) => (
          <div className="produto" key={produto.nome}>
            <img src={produto.imagem} alt={produto.nome} />
            <div className="produto-info">
              <strong>{produto.nome}</strong>
              {produto.descricao && <span>{produto.descricao}</span>}
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default Card