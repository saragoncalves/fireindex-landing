import Link from "next/link";
import { ExternalLink, Mail, MapPin } from "lucide-react";
import { CONTACT_EMAIL, PLATFORM_URL } from "@/lib/constants";
import { Logo } from "./logo";

export function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div><Logo light /><p>Informação meteorológica e índices técnicos preparados para apoiar a decisão operacional.</p><span className="portugal"><MapPin size={14} /> Desenvolvido em Portugal</span></div>
      <div><h3>Navegação</h3><Link href="/sobre">Sobre o FireIndex</Link><Link href="/#solucao">A solução</Link><Link href="/#bvaav">Implementação BVAAV</Link><Link href="/#contacto">Contacto</Link></div>
      <div><h3>Informação</h3><Link href="/privacidade">Política de privacidade</Link><Link href="/privacidade#nota-legal">Nota legal</Link><a href={PLATFORM_URL} target="_blank" rel="noreferrer">Plataforma operacional <ExternalLink size={14} /></a><a href={`mailto:${CONTACT_EMAIL}`}><Mail size={14} /> {CONTACT_EMAIL}</a></div>
      <div><h3>Entidade promotora</h3><p>Bombeiros Voluntários de Albergaria-a-Velha</p><p>Primeira entidade utilizadora do FireIndex.</p></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} FireIndex. Todos os direitos reservados.</span><span>Proteção do território através de informação clara.</span></div>
  </footer>;
}
