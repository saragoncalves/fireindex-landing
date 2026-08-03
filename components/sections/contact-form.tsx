"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle, Mail } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/constants";

type Status = { type: "idle" | "loading" | "success" | "error" | "fallback"; message?: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus({ type: "loading" });
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      ...Object.fromEntries(formData),
      privacy: formData.get("privacy") === "on",
    };
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json();
      if (response.status === 503) return setStatus({ type: "fallback", message: result.error });
      if (!response.ok) throw new Error(result.error || "Não foi possível enviar a mensagem.");
      form.reset(); setStatus({ type: "success" });
    } catch (error) { setStatus({ type: "error", message: error instanceof Error ? error.message : "Ocorreu um erro inesperado." }); }
  }
  if (status.type === "success") return <div className="form-success" role="status"><CheckCircle2/><h3>Pedido recebido.</h3><p>Obrigado pelo seu interesse no FireIndex. Entraremos em contacto assim que possível.</p><button type="button" onClick={()=>setStatus({type:"idle"})}>Enviar outro pedido</button></div>;
  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="form-grid"><label>Nome <span>*</span><input name="name" autoComplete="name" required minLength={2} /></label><label>Entidade <span>*</span><input name="entity" autoComplete="organization" required /></label><label>Email <span>*</span><input type="email" name="email" autoComplete="email" required /></label><label>Telefone <small>(opcional)</small><input type="tel" name="phone" autoComplete="tel" /></label><label>Tipo de entidade <span>*</span><select name="entityType" required defaultValue=""><option value="" disabled>Selecione uma opção</option>{["Corpo de Bombeiros","Município","Serviço Municipal de Proteção Civil","Entidade Florestal","Associação","Empresa","Outra"].map(x=><option key={x}>{x}</option>)}</select></label><label>Território ou área geográfica <span>*</span><input name="territory" required placeholder="Ex.: Município de..." /></label></div>
    <label>Mensagem <span>*</span><textarea name="message" rows={5} required minLength={10} placeholder="Descreva brevemente as necessidades da sua entidade." /></label>
    <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
    <label className="consent"><input type="checkbox" name="privacy" required/><span>Li e aceito a <Link href="/privacidade">Política de Privacidade</Link> e autorizo o tratamento dos dados para resposta a este pedido. <b>*</b></span></label>
    {status.type === "error" && <p className="form-error" role="alert">{status.message}</p>}
    {status.type === "fallback" && <div className="form-fallback" role="alert"><Mail/><span><strong>Envio automático indisponível.</strong> Pode enviar o seu pedido diretamente para <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</span></div>}
    <button className="button button--primary submit-button" disabled={status.type === "loading"}>{status.type === "loading" ? <><LoaderCircle className="spin"/> A enviar…</> : <>Enviar pedido <ArrowRight size={17}/></>}</button>
    <small className="required-note">* Campos de preenchimento obrigatório</small>
  </form>;
}
