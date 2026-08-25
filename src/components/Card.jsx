function Card(data) {
  
  return (
    <main>
      <h1>{data.nome}</h1>
      <img src={data.logo} alt={data.nome} /> 
      <h4>teste</h4>
    </main>
  ) 
}

export default Card 