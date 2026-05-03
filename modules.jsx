// Modules — tabbed
const Modules = () => {
  const [tab, setTab] = React.useState('menu');

  const modules = {
    menu: {
      label: 'Digital Menu',
      icon: 'phone',
      title: 'Cardápio digital com cara da sua marca',
      desc: 'A vitrine do seu restaurante online. Clara, rápida e pensada pra converter — sem fricção até o checkout.',
      features: [
        'Categorias, fotos, descrições e adicionais personalizáveis',
        'Observações por item e variações de produto',
        'Checkout objetivo com entrega ou retirada',
        'Funciona em qualquer celular, sem instalar app',
      ],
      img: 'assets/register-a-product.png',
    },
    erp: {
      label: 'ERP',
      icon: 'grid',
      title: 'Gestão centralizada da sua loja',
      desc: 'Cadastros, organização e controle do que é vendido — tudo num lugar só, com o que importa pra rotina real.',
      features: [
        'Gerenciador de categorias, produtos e adicionais',
        'Etapas e personalizações por item',
        'Status, edição e organização em tempo real',
        'Multi-loja: gerencie várias unidades sem sair do painel',
      ],
      img: 'assets/manage-category-product.png',
    },
    integration: {
      label: 'Integração',
      icon: 'link',
      title: 'Cardápio e operação no mesmo fluxo',
      desc: 'O que muda no menu reflete na operação. O que sai como pedido vira informação pra gestão. Sem retrabalho.',
      features: [
        'Pedido do cliente entra direto na fila do atendimento',
        'Cadastros sincronizados entre menu e ERP',
        'Visão consolidada do que vende e do que sai',
        'Padronização que sobrevive à equipe rotativa',
      ],
      img: 'assets/metrics.png',
    },
  };

  const m = modules[tab];

  return (
    <section className="section" id="modulos" style={{paddingTop: 0}}>
      <div className="container">
        <div className="section-head reveal">
          <span className="tag">Módulos do produto</span>
          <h2>Dois produtos. <span className="serif" style={{color:'var(--primary)'}}>Um ecossistema.</span></h2>
          <p>Use só o cardápio digital, só o ERP, ou os dois conectados — como faz mais sentido pra sua operação.</p>
        </div>

        <div className="modules-tabs">
          {Object.entries(modules).map(([key, v]) => (
            <button
              key={key}
              className={`tab ${tab === key ? 'active' : ''}`}
              onClick={() => setTab(key)}
            >
              <Icon name={v.icon} size={15} />
              {v.label}
            </button>
          ))}
        </div>

        <div className="module-panel" key={tab}>
          <div>
            <span className="tag" style={{color:'var(--primary)', fontSize:'12px', textTransform:'uppercase', letterSpacing:'0.14em', fontWeight:600}}>
              {m.label}
            </span>
            <h3>{m.title}</h3>
            <p className="desc">{m.desc}</p>
            <ul className="module-features">
              {m.features.map((f, i) => (
                <li key={i}>
                  <span className="check-ic" style={{width:'20px', height:'20px'}}>
                    <Icon name="check" size={12} stroke={2.5}/>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contato" className="btn btn-primary">Ver na demonstração <Icon name="arrow-right" size={14}/></a>
          </div>
          <div className="module-visual">
            <img src={m.img} alt={m.title} />
          </div>
        </div>
      </div>
    </section>
  );
};

window.Modules = Modules;
