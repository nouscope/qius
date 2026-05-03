// Problem → Solution
const ProblemSolution = () => {
  return (
    <section className="section" id="produto">
      <div className="container">
        <div className="section-head reveal">
          <span className="tag">O problema · a solução</span>
          <h2>O pedido começa em mil canais.<br/>
            <span className="serif" style={{color:'var(--primary)'}}>Termina em um lugar só.</span>
          </h2>
          <p>WhatsApp solto, papelzinho, planilha, ferramentas que não conversam. A Qius coloca o pedido digital e a operação no mesmo fluxo.</p>
        </div>

        <div className="ps-grid">
          <div className="ps-card before reveal">
            <span className="label">Hoje · sem Qius</span>
            <h3>Operação fragmentada</h3>
            <ul className="ps-list">
              <li><span className="ps-bullet"><Icon name="x" size={11} stroke={2.5}/></span>Pedidos chegam por canais dispersos e formatos diferentes</li>
              <li><span className="ps-bullet"><Icon name="x" size={11} stroke={2.5}/></span>Erros de comunicação entre atendimento, cozinha e entrega</li>
              <li><span className="ps-bullet"><Icon name="x" size={11} stroke={2.5}/></span>Pouca visibilidade do que vende, o que sai e o que demora</li>
              <li><span className="ps-bullet"><Icon name="x" size={11} stroke={2.5}/></span>Equipe rotativa precisa reaprender o processo a cada turno</li>
            </ul>
          </div>
          <div className="ps-card after reveal">
            <span className="label">Com Qius</span>
            <h3>Fluxo ponta a ponta</h3>
            <ul className="ps-list">
              <li><span className="ps-bullet"><Icon name="check" size={11} stroke={2.5}/></span>Cardápio digital integrado direto à gestão da loja</li>
              <li><span className="ps-bullet"><Icon name="check" size={11} stroke={2.5}/></span>Pedido sai do cliente já estruturado para o atendimento</li>
              <li><span className="ps-bullet"><Icon name="check" size={11} stroke={2.5}/></span>Visão clara do que está sendo vendido e atendido</li>
              <li><span className="ps-bullet"><Icon name="check" size={11} stroke={2.5}/></span>Processos padronizados, fáceis de operar no dia a dia</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

window.ProblemSolution = ProblemSolution;
