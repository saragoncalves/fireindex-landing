export const PLATFORM_URL = "https://bvaav-meteo.vercel.app";
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@fireindex.pt";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://fireindex.pt"
).replace(/\/$/, "");

export const NAV_ITEMS = [
  { label: "Solução", href: "/#solucao" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Aplicações", href: "/#aplicacoes" },
  { label: "Impacto", href: "/#impacto" },
  { label: "Implementação BVAAV", href: "/#bvaav" },
  { label: "Contacto", href: "/#contacto" },
];
