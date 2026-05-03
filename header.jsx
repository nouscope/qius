// Header
const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['Produto', '#produto'],
    ['Como funciona', '#como-funciona'],
    ['Benefícios', '#beneficios'],
    ['FAQ', '#faq']
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="logo">
          <span className="logo-mark">qs</span>
          <span>Qius</span>
          <span style={{ color: 'var(--muted)', fontWeight: 500, fontSize: '14px', marginLeft: '4px' }}>
            <span className="serif" style={{fontSize: '17px'}}>Food Service</span>
          </span>
        </a>
        <nav className="nav">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <div className="header-cta">
          <a href="#contato" className="btn btn-ghost" style={{ display: 'none' }}>Entrar</a>
          <a href="#contato" className="btn btn-primary">
            Pedir demonstração
            <Icon name="arrow-right" size={15} />
          </a>
        </div>
      </div>
    </header>
  );
};

window.Header = Header;
