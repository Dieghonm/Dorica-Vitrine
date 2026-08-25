import DoricaRaw from '../data/dorica.json'
import '../styles/footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <p>{DoricaRaw[0].nome2} — catálogo completo de cada fabricante sob consulta.</p>
      <p>{DoricaRaw[0].CNPJ}</p>
      <p>{DoricaRaw[0].endereço}</p>
      <p>{DoricaRaw[0].cep}</p>
      <p>{DoricaRaw[0].WHATSAPP}</p>
    </footer>
  )
}

export default Footer
