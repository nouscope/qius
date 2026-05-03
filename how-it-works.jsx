// How it works — 3 steps
const HowItWorks = () => {
  return (
    <section className="section" id="como-funciona" style={{paddingTop: 0}}>
      <div className="container">
        <div className="section-head reveal">
          <span className="tag">Como funciona</span>
          <h2>Três passos. Um fluxo só.</h2>
          <p>Do primeiro toque do cliente até o pedido organizado na operação — sem retrabalho.</p>
        </div>

        <div className="steps">
          <div className="step reveal">
            <div className="step-num">01</div>
            <h4>Cliente abre o cardápio</h4>
            <p>Acessa pelo link, navega pelas categorias, vê fotos e descrições — tudo no estilo da sua marca.</p>
            <div className="step-visual">
              <div style={{padding: '14px', height: '100%', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                <div style={{display:'flex', gap:'6px', marginBottom:'4px'}}>
                  <span style={{padding:'4px 10px', borderRadius:'999px', background:'var(--primary)', color:'#fff', fontSize:'10.5px', fontWeight:600}}>Pizzas</span>
                  <span style={{padding:'4px 10px', borderRadius:'999px', background:'var(--card)', border:'1px solid var(--line)', fontSize:'10.5px', color:'var(--muted)'}}>Bebidas</span>
                  <span style={{padding:'4px 10px', borderRadius:'999px', background:'var(--card)', border:'1px solid var(--line)', fontSize:'10.5px', color:'var(--muted)'}}>Sobremesas</span>
                </div>
                <div className="mock-row" style={{background:'var(--card)', borderRadius:'10px', border:'1px solid var(--line)'}}>
                  <div className="mock-thumb"></div>
                  <div style={{flex:1}}>
                    <div style={{fontWeight:600, fontSize:'11.5px'}}>Calabresa</div>
                    <div style={{fontSize:'10px', color:'var(--muted)'}}>R$ 60,00</div>
                  </div>
                </div>
                <div className="mock-row" style={{background:'var(--card)', borderRadius:'10px', border:'1px solid var(--line)'}}>
                  <div className="mock-thumb green"></div>
                  <div style={{flex:1}}>
                    <div style={{fontWeight:600, fontSize:'11.5px'}}>Margherita</div>
                    <div style={{fontSize:'10px', color:'var(--muted)'}}>R$ 58,00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="step reveal">
            <div className="step-num">02</div>
            <h4>Escolhe e finaliza</h4>
            <p>Adiciona itens, observações e adicionais. Define entrega ou retirada e segue para o checkout.</p>
            <div className="step-visual">
              <div style={{padding: '14px', height: '100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <div style={{display:'grid', gap:'8px'}}>
                  <div style={{display:'flex', justifyContent:'space-between', fontSize:'11.5px'}}>
                    <span>1× Pizza Calabresa</span>
                    <strong>R$ 60,00</strong>
                  </div>
                  <div style={{display:'flex', justifyContent:'space-between', fontSize:'11.5px'}}>
                    <span>1× Coca 2L</span>
                    <strong>R$ 14,00</strong>
                  </div>
                  <div style={{borderTop:'1px dashed var(--line)', paddingTop:'8px', display:'flex', justifyContent:'space-between', fontSize:'12.5px'}}>
                    <strong>Total</strong>
                    <strong style={{color:'var(--primary)'}}>R$ 74,00</strong>
                  </div>
                </div>
                <div style={{display:'flex', gap:'6px', marginTop:'10px'}}>
                  <button style={{flex:1, padding:'8px', borderRadius:'8px', background:'var(--primary)', color:'#fff', fontSize:'11px', fontWeight:600, border:0}}>Entrega</button>
                  <button style={{flex:1, padding:'8px', borderRadius:'8px', background:'var(--card)', border:'1px solid var(--line)', fontSize:'11px', fontWeight:500, color:'var(--ink-2)'}}>Retirada</button>
                </div>
              </div>
            </div>
          </div>

          <div className="step reveal">
            <div className="step-num">03</div>
            <h4>Operação recebe e gere</h4>
            <p>O pedido chega organizado para atendimento. A gestão acompanha tudo em um painel único.</p>
            <div className="step-visual">
              <div style={{padding: '14px', height: '100%', display:'flex', flexDirection:'column', gap:'6px'}}>
                <div className="mock-row" style={{background:'var(--card)', borderRadius:'8px', border:'1px solid var(--line)', padding:'8px 10px'}}>
                  <span style={{fontSize:'10.5px', fontWeight:600}}>#1287</span>
                  <span style={{fontSize:'10px', color:'var(--muted)'}}>Mesa 4</span>
                  <span className="mock-pill" style={{fontSize:'9.5px'}}>Em preparo</span>
                </div>
                <div className="mock-row" style={{background:'var(--card)', borderRadius:'8px', border:'1px solid var(--line)', padding:'8px 10px'}}>
                  <span style={{fontSize:'10.5px', fontWeight:600}}>#1286</span>
                  <span style={{fontSize:'10px', color:'var(--muted)'}}>Delivery</span>
                  <span className="mock-pill" style={{fontSize:'9.5px', background:'var(--primary-100)', color:'var(--primary-700)'}}>Saiu</span>
                </div>
                <div className="mock-row" style={{background:'var(--card)', borderRadius:'8px', border:'1px solid var(--line)', padding:'8px 10px'}}>
                  <span style={{fontSize:'10.5px', fontWeight:600}}>#1285</span>
                  <span style={{fontSize:'10px', color:'var(--muted)'}}>Retirada</span>
                  <span className="mock-pill" style={{fontSize:'9.5px'}}>Entregue</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.HowItWorks = HowItWorks;
