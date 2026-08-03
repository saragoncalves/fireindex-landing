"use client";

import { ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_ITEMS, PLATFORM_URL } from "@/lib/constants";
import { Logo } from "./logo";

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="container header-inner">
      <Logo />
      <nav className="desktop-nav" aria-label="Navegação principal">
        {NAV_ITEMS.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <div className="header-actions">
        <a className="platform-link" href={PLATFORM_URL} target="_blank" rel="noreferrer">Plataforma BVAAV <ExternalLink size={14} /></a>
        <a className="button button--primary button--small" href="/#solucao">Conhecer o FireIndex</a>
      </div>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</button>
    </div>
    <div id="mobile-menu" className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}>
      <nav className="container" aria-label="Navegação móvel">
        {NAV_ITEMS.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        <a href={PLATFORM_URL} target="_blank" rel="noreferrer">Aceder à plataforma BVAAV <ExternalLink size={15} /></a>
      </nav>
    </div>
  </header>;
}
