import type { MetadataRoute } from "next"; import { SITE_URL } from "@/lib/constants";
export default function sitemap():MetadataRoute.Sitemap{return ["","/sobre","/privacidade"].map((path,i)=>({url:`${SITE_URL}${path}`,lastModified:new Date(),changeFrequency:i===0?"monthly":"yearly",priority:i===0?1:.6}))}
