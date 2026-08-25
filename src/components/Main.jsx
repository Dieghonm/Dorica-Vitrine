import fabricasRaw  from '../data/data.json'
import Card from './card'


function Main() {

  return (
    <main>
      <h1>Main Content</h1>
      {fabricasRaw.map((fabrica) => (
        <Card key={fabrica.nome} data={fabrica} />
      ))}
    </main>
  ) 
}

export default Main 
  