import fabricasRaw from '../data/data.json'
import Card from './card.jsx'
import '../styles/main.css'

function Main() {
  return (
    <main>
      <div className="section-heading">
        <h2>Fabricantes</h2>
        <span className="section-count">{fabricasRaw.length} vitrines</span>
      </div>

      <div className="catalogo-grid">
        {fabricasRaw.map((fabrica) => (
          <Card key={fabrica.nome} data={fabrica} />
        ))}
      </div>
    </main>
  )
}

export default Main
