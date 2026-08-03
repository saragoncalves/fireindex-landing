"use client";

import { ExternalLink } from "lucide-react";
import { PLATFORM_URL } from "@/lib/constants";
import { Logo } from "./logo";

export function Header() {
  return <header className="site-header">
    <div className="container header-inner">
      <Logo />
      <div className="header-actions">
        <a className="platform-link" href={PLATFORM_URL} target="_blank" rel="noreferrer">Aceder à plataforma <ExternalLink size={14} /></a>
      </div>
    </div>
  </header>;
}
