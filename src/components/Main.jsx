import fabricasRaw from '../data/data.json'
import Card from './Card'
import '../styles/Main.css'

function Main() {
  return (
    <main>
      <div className="section-heading">
        <h2>Fabricantes</h2>
        <span className="section-count">{fabricasRaw.length} vitrines</span>
      </div>

      <div className="catalogo-list">
        {fabricasRaw.map((fabrica, index) => (
          <Card key={fabrica.nome} data={fabrica} index={index} />
        ))}
      </div>
    </main>
  )
}

export default Main
