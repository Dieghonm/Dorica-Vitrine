import DoricaRaw from '../data/Dorica.json'
import '../styles/Footer.css'

function Footer() {
  const dorica = DoricaRaw[0]

  return (
    <footer className="site-footer">
      <p className="footer-empresa">{dorica.nome2}</p>
      <p>{dorica.CNPJ}</p>
      <p>{dorica.endereço}</p>
      <p>{dorica.cep}</p>
      <a
        className="footer-whatsapp"
        href={`https://wa.me/${dorica.whatsapp}`}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
    </footer>
  )
}

export default Footer
