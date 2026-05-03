// Benefits, Trust, FAQ, Final CTA, Footer
const Benefits = () => {
  const items = [
    { ic: 'trend', t: 'Mais conversão', d: 'Jornada de pedido limpa, rápida e clara — do toque ao checkout sem fricção.' },
    { ic: 'shield', t: 'Menos erros', d: 'Pedido sai estruturado pelo cliente. Sem ruído entre canais e equipe.' },
    { ic: 'zap', t: 'Mais agilidade', d: 'Da escolha ao preparo, fluxo organizado que destrava o atendimento.' },
    { ic: 'eye', t: 'Mais controle', d: 'Visão centralizada do que está sendo vendido, atendido e entregue.' },
    { ic: 'layers', t: 'Padronização', d: 'Operação consistente mesmo com equipe rotativa e turnos diferentes.' },
    { ic: 'smile', t: 'Experiência melhor', d: 'Navegação simples, checkout objetivo, entrega ou retirada bem definidas.' },
  ];
  return (
    <section className="section" id="beneficios" style={{paddingTop: 0}}>
      <div className="container">
        <div className="section-head reveal">
          <span className="tag">Benefícios</span>
          <h2>O que muda na sua operação <span className="serif" style={{color:'var(--primary)'}}>desde o primeiro dia</span></h2>
        </div>
        <div className="benefits-grid">
          {items.map((it, i) => (
            <div key={i} className="benefit reveal">
              <div className="benefit-ic"><Icon name={it.ic} size={20}/></div>
              <h4>{it.t}</h4>
              <p>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const items = [
    { q: 'Pronto pra crescer com o seu negócio.', n: 'Solução escalável', r: 'Multi-loja e multi-equipe' },
    { q: 'Processos mais claros, do toque ao preparo.', n: 'Fluxo padronizado', r: 'Implantação acompanhada' },
    { q: 'Rotina simplificada — uma ferramenta no lugar de quatro.', n: 'Menos ferramentas', r: 'Menos retrabalho' },
  ];
  return (
    <section className="section" style={{paddingTop: 0}}>
      <div className="container">
        <div className="section-head reveal">
          <span className="tag">Por que Qius</span>
          <h2>Feito pra rotina real do <span className="serif" style={{color:'var(--primary)'}}>food service</span></h2>
        </div>
        <div className="trust-cards">
          {items.map((it, i) => (
            <div key={i} className="trust-card reveal">
              <div className="quote-mark">"</div>
              <p>{it.q}</p>
              <div className="who">
                <div className="avatar"><Icon name="star" size={15}/></div>
                <div>
                  <div className="name">{it.n}</div>
                  <div className="role">{it.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const items = [
    { q: 'Para quais tipos de negócio o Qius serve?', a: 'Restaurantes, lanchonetes, cafeterias, pizzarias, dark kitchens e qualquer operação de food service que faça delivery, retirada ou atendimento no salão.' },
    { q: 'Precisa instalar algum aplicativo?', a: 'Não. O cardápio digital roda no navegador do cliente — basta um link. A gestão também é web, acessível de qualquer computador.' },
    { q: 'Dá pra personalizar o cardápio com a cara da minha marca?', a: 'Sim. Cores, fotos, categorias, descrições, adicionais e variações são todos personalizáveis. O cardápio é uma extensão da sua marca, não um template genérico.' },
    { q: 'Como funciona entrega e retirada?', a: 'O cliente escolhe a opção no checkout, informa endereço quando for entrega, e o pedido entra na fila já com a modalidade definida pra equipe operacional.' },
    { q: 'Como é o suporte e a implantação?', a: 'Acompanhamento na implantação pra cadastrar produtos, configurar o cardápio e treinar a equipe. Suporte recorrente pelos canais combinados com você.' },
    { q: 'Posso usar só o cardápio ou só o ERP?', a: 'Sim, mas o valor real aparece quando os dois estão conectados — é aí que o pedido do cliente vira informação útil pra operação sem retrabalho.' },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section" id="faq" style={{paddingTop: 0}}>
      <div className="container">
        <div className="section-head reveal">
          <span className="tag">Perguntas frequentes</span>
          <h2>Tudo que você quer saber.</h2>
          <p>Não achou sua dúvida? Fale com a gente — a gente responde sem rodeio.</p>
        </div>
        <div className="faq-list">
          {items.map((it, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                {it.q}
                <span className="faq-q-icon"><Icon name="plus" size={14} stroke={2.2}/></span>
              </button>
              <div className="faq-a"><p style={{margin:0, paddingTop:'2px'}}>{it.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    nome: '', empresa: '', contato: '', cidade: '', volume: ''
  });
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <section className="section" id="contato">
      <div className="container">
        <div className="cta-final reveal">
          <div className="cta-grid">
            <div>
              <span className="tag" style={{color:'#c4b5fd', fontSize:'12px', textTransform:'uppercase', letterSpacing:'0.14em', fontWeight:600}}>
                Próximo passo
              </span>
              <h2>Veja o Qius rodando na <span className="serif">sua operação.</span></h2>
              <p>Demo guiada de ~30 minutos: a gente entende seu fluxo, mostra o que faz sentido e te ajuda a decidir sem pressão.</p>
              <ul className="ic-list">
                <li><span className="check"><Icon name="check" size={12} stroke={2.5}/></span> Demonstração personalizada por tipo de negócio</li>
                <li><span className="check"><Icon name="check" size={12} stroke={2.5}/></span> Sem compromisso — você decide depois</li>
                <li><span className="check"><Icon name="check" size={12} stroke={2.5}/></span> Resposta em até 1 dia útil</li>
              </ul>
            </div>
            <div>
              <div className="form-card">
                {submitted ? (
                  <div className="form-success">
                    <div className="check-big"><Icon name="check" size={28} stroke={2.5}/></div>
                    <h3>Recebido!</h3>
                    <p>Em breve um especialista entra em contato pelo canal informado.</p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit}>
                    <h3>Pedir demonstração</h3>
                    <p className="sub">Preencha pra falar com um especialista.</p>
                    <div className="form-row">
                      <div className="field">
                        <label>Nome</label>
                        <input required value={form.nome} onChange={e => setForm({...form, nome: e.target.value})} placeholder="Seu nome"/>
                      </div>
                      <div className="form-row two">
                        <div className="field">
                          <label>Empresa</label>
                          <input required value={form.empresa} onChange={e => setForm({...form, empresa: e.target.value})} placeholder="Nome da loja"/>
                        </div>
                        <div className="field">
                          <label>Cidade</label>
                          <input value={form.cidade} onChange={e => setForm({...form, cidade: e.target.value})} placeholder="Sua cidade"/>
                        </div>
                      </div>
                      <div className="field">
                        <label>WhatsApp ou Email</label>
                        <input required value={form.contato} onChange={e => setForm({...form, contato: e.target.value})} placeholder="(11) 99999-0000"/>
                      </div>
                      <div className="field">
                        <label>Volume de pedidos por mês <span style={{color:'var(--muted-2)', fontWeight:400}}>(opcional)</span></label>
                        <select value={form.volume} onChange={e => setForm({...form, volume: e.target.value})}>
                          <option value="">Selecione</option>
                          <option>Até 500</option>
                          <option>500 — 2.000</option>
                          <option>2.000 — 5.000</option>
                          <option>Mais de 5.000</option>
                        </select>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-lg" type="submit">
                      Quero ver o Qius rodando
                      <Icon name="arrow-right" size={15}/>
                    </button>
                    <p className="legal">Ao enviar você concorda com nossos termos e política de privacidade.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#top" className="logo">
              <span className="logo-mark">qs</span>
              <span>Qius</span>
            </a>
            <p className="footer-tagline">Solução completa de Digital Menu + ERP para food service.</p>
          </div>
          <div>
            <h5>Produto</h5>
            <ul>
              <li><a href="#modulos">Digital Menu</a></li>
              <li><a href="#modulos">ERP</a></li>
              <li><a href="#como-funciona">Como funciona</a></li>
              <li><a href="#beneficios">Benefícios</a></li>
            </ul>
          </div>
          <div>
            <h5>Empresa</h5>
            <ul>
              <li><a href="#">Sobre</a></li>
              <li><a href="#contato">Contato</a></li>
              <li><a href="#">Suporte</a></li>
            </ul>
          </div>
          <div>
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Termos de uso</a></li>
              <li><a href="#">Privacidade</a></li>
              <li><a href="#">LGPD</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Qius Solutions. Todos os direitos reservados.</span>
          <span>CNPJ 00.000.000/0001-00</span>
        </div>
      </div>
    </footer>
  );
};

window.Benefits = Benefits;
window.TrustSection = TrustSection;
window.FAQ = FAQ;
window.FinalCTA = FinalCTA;
window.Footer = Footer;
