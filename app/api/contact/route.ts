import { NextResponse } from "next/server";
import { validateContact } from "@/lib/validations";

export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Pedido inválido." }, { status: 400 }); }
  const result = validateContact(body);
  if (result.data.website) return NextResponse.json({ ok: true });
  if (!result.success) return NextResponse.json({ error: result.errors[0], errors: result.errors }, { status: 400 });
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) return NextResponse.json({ error: "O serviço de envio ainda não está configurado." }, { status: 503 });
  const d = result.data;
  const text = `Novo pedido FireIndex\n\nNome: ${d.name}\nEntidade: ${d.entity}\nEmail: ${d.email}\nTelefone: ${d.phone || "Não indicado"}\nTipo: ${d.entityType}\nTerritório: ${d.territory}\n\nMensagem:\n${d.message}`;
  const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from, to: [to], reply_to: d.email, subject: `Pedido FireIndex — ${d.entity}`, text }) });
  if (!response.ok) return NextResponse.json({ error: "Não foi possível enviar a mensagem. Tente novamente ou contacte-nos por email." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
