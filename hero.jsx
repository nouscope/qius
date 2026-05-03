// Hero section
const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div className="reveal in">
            <span className="eyebrow">
              <span className="dot"></span>
              Digital Menu + ERP em uma só plataforma
            </span>
            <h1>
              Do toque no cardápio<br/>
              ao <span className="serif accent">balcão da cozinha</span>,<br/>
              tudo conectado.
            </h1>
            <p className="lede">
              A Qius Food Service unifica o pedido digital do seu cliente com a gestão do seu restaurante. Menos retrabalho, menos erro, mais controle — em cada etapa.
            </p>
            <div className="hero-ctas">
              <a href="#contato" className="btn btn-primary btn-lg">
                Quero uma demonstração
                <Icon name="arrow-right" size={16} />
              </a>
              <a href="#contato" className="btn btn-outline btn-lg">
                Falar com um especialista
              </a>
            </div>
            <div className="hero-meta">
              <span><span className="check-ic"><Icon name="check" size={11} stroke={2.5}/></span> Sem instalar nada</span>
              <span><span className="check-ic"><Icon name="check" size={11} stroke={2.5}/></span> Cardápio personalizável</span>
              <span><span className="check-ic"><Icon name="check" size={11} stroke={2.5}/></span> Suporte na implantação</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-blob"></div>
            <div className="dash-frame">
              <img src="assets/metrics.png" alt="Dashboard Qius" />
            </div>
            <div className="float-toast">
              <div className="ic"><Icon name="check" size={14} stroke={2.5}/></div>
              <div>
                <strong>Novo pedido</strong>
                <em>Mesa 12 · R$ 87,50</em>
              </div>
            </div>
            <div className="phone-card">
              <div className="phone-card-header">
                <div className="phone-thumb"></div>
                <div>
                  <h4>Pizza Calabresa</h4>
                  <div className="meta">Tradicionais</div>
                </div>
              </div>
              <div className="row">
                <span className="price">R$ 60,00</span>
                <span className="qty">
                  <span className="qty-btn">−</span>
                  1
                  <span className="qty-btn">+</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="trust-strip" style={{marginTop: '72px'}}>
          <div className="trust-strip-inner">
            <div className="trust-label">Feito para a rotina real do food service</div>
            <div className="trust-segs">
              <span>Restaurantes</span><span className="sep">·</span>
              <span>Lanchonetes</span><span className="sep">·</span>
              <span>Cafeterias</span><span className="sep">·</span>
              <span>Pizzarias</span><span className="sep">·</span>
              <span>Dark Kitchens</span><span className="sep">·</span>
              <span>Delivery & Retirada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.Hero = Hero;
