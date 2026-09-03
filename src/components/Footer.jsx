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

      <div className="footer-dev">

        <span className="footer-dev-sep">·</span>
        <a
          href="https://github.com/Dieghonm"
          target="_blank"
          rel="noreferrer"
        >
          Desenvolvido por Dieghonm
        </a> 
        -
        <a
          href="https://github.com/doricarepresentacoes/Dorica-Vitrine"
          target="_blank"
          rel="noreferrer"
        >
          Manutenção
        </a>
      </div>
    </footer>
  )
}

export default Footer
