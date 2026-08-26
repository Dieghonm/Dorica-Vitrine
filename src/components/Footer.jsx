import DoricaRaw from '../data/Dorica.json'
import WhatsAppIcon from './WhatsAppIcon'
import '../styles/Footer.css'

function Footer() {
  const dorica = DoricaRaw[0]
  const ano = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <a
        className="footer-whatsapp"
        href={`https://wa.me/${dorica.whatsapp}`}
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppIcon size={15} />
        Falar no WhatsApp
      </a>

      <p className="footer-legal">© {ano} {dorica.nome2}. Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer
