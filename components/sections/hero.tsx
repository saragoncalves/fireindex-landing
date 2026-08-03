import { ArrowDown, ArrowUpRight, CloudSun, Droplets, MapPin, Navigation, Wind } from "lucide-react";
import { PLATFORM_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Hero() {
  return <section className="hero">
    <div className="hero-orbit hero-orbit--one" aria-hidden="true" /><div className="hero-orbit hero-orbit--two" aria-hidden="true" />
    <div className="container hero-grid">
      <div className="hero-copy">
        <span className="hero-kicker"><i /> Plataforma portuguesa de apoio à decisão</span>
        <h1>Informação meteorológica preparada para a <em>decisão operacional.</em></h1>
        <p>O FireIndex reúne previsões e índices de risco numa plataforma localizada, criada para apoiar bombeiros, proteção civil e entidades responsáveis pela gestão do território.</p>
        <div className="hero-buttons"><Button href="#solucao">Conhecer a solução <ArrowDown size={17} /></Button><Button href="#bvaav" variant="secondary">Ver implementação nos BVAAV</Button></div>
        <div className="hero-proof"><span><i>01</i> Solução funcional</span><span><i>02</i> Utilização no terreno</span><span><i>03</i> Configurável por território</span></div>
      </div>
      <div className="dashboard-wrap" aria-label="Demonstração visual de um painel operacional FireIndex">
        <div className="dashboard-glow" /><div className="dashboard">
          <div className="dash-top"><div><span className="dash-logo">FI</span><strong>Painel operacional</strong></div><span className="demo-label">Demonstração</span></div>
          <div className="dash-place"><div><MapPin size={17} /><span><small>Localização</small><strong>Albergaria-a-Velha</strong></span></div><span>Atualizado agora</span></div>
          <div className="weather-row"><div className="temperature"><CloudSun size={42} /><span><strong>27°</strong><small>Céu pouco nublado</small></span></div><div className="weather-stat"><Wind /><strong>14 km/h</strong><small>Vento NW</small></div><div className="weather-stat"><Droplets /><strong>42%</strong><small>Humidade</small></div></div>
          <div className="risk-grid"><div className="risk-main"><div><span>Índice FWI</span><b>Risco elevado</b></div><strong>31.8</strong><div className="risk-scale"><i /><i /><i /><i className="active" /><i /></div><small>Baixo <span>Muito elevado</span></small></div><div className="mini-index"><span>ISI</span><strong>10.4</strong><small>Propagação inicial</small></div><div className="mini-index"><span>BUI</span><strong>52.1</strong><small>Combustível disponível</small></div></div>
          <div className="trend"><div className="trend-head"><span>Tendência de risco</span><small>Próximos 5 dias</small></div><svg viewBox="0 0 500 90" role="img" aria-label="Gráfico demonstrativo de tendência de risco"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#d84b30" stopOpacity=".28"/><stop offset="1" stopColor="#d84b30" stopOpacity="0"/></linearGradient></defs><path d="M0 75 C55 68 80 48 130 55 S220 15 280 37 S370 8 500 18 V90 H0Z" fill="url(#area)"/><path d="M0 75 C55 68 80 48 130 55 S220 15 280 37 S370 8 500 18" fill="none" stroke="#e35e3a" strokeWidth="3"/><circle cx="280" cy="37" r="5" fill="#fff" stroke="#e35e3a" strokeWidth="3"/></svg><div className="days"><span>Hoje</span><span>Amanhã</span><span>Qua.</span><span>Qui.</span><span>Sex.</span></div></div>
          <a className="dash-link" href={PLATFORM_URL} target="_blank" rel="noreferrer">Abrir plataforma BVAAV <ArrowUpRight size={15} /></a>
        </div>
        <div className="floating-card"><Navigation size={17} /><span><small>Várias localizações</small><strong>Uma visão territorial</strong></span></div>
      </div>
    </div>
    <div className="trust-strip"><div className="container"><span>Desenvolvido a partir da experiência operacional de</span><strong><span className="crest">B</span> Bombeiros Voluntários<br/>de Albergaria-a-Velha</strong><i /><span>Informação localizada</span><i /><span>Leitura operacional</span><i /><span>Acesso por navegador</span></div></div>
  </section>;
}
