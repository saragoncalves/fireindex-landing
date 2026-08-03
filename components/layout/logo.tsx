import Link from "next/link";
export function Logo({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`logo ${light ? "logo--light" : ""}`} aria-label="FireIndex — página inicial">
    <span className="logo-mark" aria-hidden="true"><i /><i /><i /></span>
    <span>Fire<span>Index</span></span>
  </Link>;
}
