import type { Metadata, Viewport } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const heading = Manrope({ subsets:["latin"], variable:"--font-heading", display:"swap" });
const body = Source_Sans_3({ subsets:["latin"], variable:"--font-body", display:"swap" });
export const viewport: Viewport = { themeColor: "#183c32", colorScheme: "light" };
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "FireIndex — Informação meteorológica para proteção do território", template: "%s — FireIndex" },
  description: "Plataforma de apoio à decisão para gestão do risco meteorológico e de incêndio rural, desenvolvida a partir das necessidades operacionais dos Bombeiros Voluntários de Albergaria-a-Velha.",
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg" },
  openGraph: { type:"website", locale:"pt_PT", url:SITE_URL, siteName:"FireIndex", title:"FireIndex — Informação meteorológica para proteção do território", description:"Informação meteorológica e índices de risco preparados para apoiar a decisão operacional.", images:[{url:"/opengraph-image",width:1200,height:630,alt:"FireIndex"}] },
  twitter: { card:"summary_large_image", title:"FireIndex — Informação meteorológica para proteção do território", description:"Informação meteorológica e índices de risco preparados para apoiar a decisão operacional.", images:["/opengraph-image"] },
};
export default function RootLayout({children}:{children:React.ReactNode}) { const structured={"@context":"https://schema.org","@type":"SoftwareApplication",name:"FireIndex",applicationCategory:"BusinessApplication",operatingSystem:"Web",url:SITE_URL,description:"Plataforma portuguesa de apoio à decisão para gestão operacional do risco meteorológico e de incêndio rural.",provider:{"@type":"Organization",name:"Bombeiros Voluntários de Albergaria-a-Velha"}}; return <html lang="pt-PT" className={`${heading.variable} ${body.variable}`}><body><a className="skip-link" href="#conteudo">Saltar para o conteúdo</a><Header/><main id="conteudo">{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structured).replace(/</g,"\\u003c")}}/></body></html> }
