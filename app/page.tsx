import { ArrowRight, Flame, ShieldCheck } from "lucide-react";
import { CONTACT_EMAIL, PLATFORM_URL } from "@/lib/constants";

export default function Home() {
  return (
    <section className="simple-page">
      <div className="container simple-page__inner">
        <div className="simple-page__icon" aria-hidden="true"><Flame /></div>
        <span className="eyebrow">Prevenção e apoio à decisão</span>
        <h1>Informação clara para proteger o território.</h1>
        <p>O FireIndex reúne dados meteorológicos e índices de risco para apoiar decisões operacionais mais rápidas e informadas.</p>
        <div className="simple-page__actions">
          <a className="button button--primary" href={PLATFORM_URL} target="_blank" rel="noreferrer">Aceder à plataforma <ArrowRight size={17} /></a>
          <a className="button button--secondary" href={`mailto:${CONTACT_EMAIL}`}>Falar connosco</a>
        </div>
        <div className="simple-page__note"><ShieldCheck size={18} /><span>Desenvolvido em Portugal com os Bombeiros Voluntários de Albergaria-a-Velha.</span></div>
      </div>
    </section>
  );
}
