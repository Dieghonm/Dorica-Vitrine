const LOGO = 'https://res.cloudinary.com/dfkebb4ds/image/upload/v1773094598/Captura_de_tela_de_2026-03-09_19-11-03_agakbo.png'

function Header() {
  return (
    <header>
      <h1>Dorica representacoes</h1>
      <h4>Mini catalogo - So os Top de vendas de cada fabricante</h4>
      <img src={LOGO} alt="Logo" />
    </header>
  ) 
  
}

export default Header
