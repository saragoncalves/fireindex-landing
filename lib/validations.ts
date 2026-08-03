export type ContactData = {
  name: string;
  entity: string;
  email: string;
  phone?: string;
  entityType: string;
  territory: string;
  message: string;
  privacy: boolean;
  website?: string;
};

const entityTypes = [
  "Corpo de Bombeiros",
  "Município",
  "Serviço Municipal de Proteção Civil",
  "Entidade Florestal",
  "Associação",
  "Empresa",
  "Outra",
];

export function validateContact(input: unknown) {
  const data = input as Partial<ContactData>;
  const clean = (value: unknown, max: number) =>
    typeof value === "string" ? value.trim().slice(0, max) : "";
  const result: ContactData = {
    name: clean(data?.name, 100),
    entity: clean(data?.entity, 140),
    email: clean(data?.email, 180).toLowerCase(),
    phone: clean(data?.phone, 30),
    entityType: clean(data?.entityType, 80),
    territory: clean(data?.territory, 160),
    message: clean(data?.message, 3000),
    privacy: data?.privacy === true,
    website: clean(data?.website, 200),
  };
  const errors: string[] = [];
  if (result.name.length < 2) errors.push("Indique o seu nome.");
  if (result.entity.length < 2) errors.push("Indique a entidade.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(result.email)) errors.push("Indique um email válido.");
  if (!entityTypes.includes(result.entityType)) errors.push("Selecione o tipo de entidade.");
  if (result.territory.length < 2) errors.push("Indique o território.");
  if (result.message.length < 10) errors.push("A mensagem deve ter pelo menos 10 caracteres.");
  if (!result.privacy) errors.push("É necessário aceitar a política de privacidade.");
  return { success: errors.length === 0, errors, data: result };
}
