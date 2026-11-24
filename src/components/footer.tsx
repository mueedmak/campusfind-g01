import Link from "next/link";
interface FooterProps {
  group: string;
}
export function Footer({ group }: FooterProps) {
  return (
    <footer>
      <div className="footer-inner w-full">
        <div>
          <Link href="/" className="brand">
            CampusFind<span className="dot">.</span>
          </Link>
          <p>A little help. A happy reunion.</p>
        </div>
        <div className="footer-links">
          <Link href="/items">Browse items</Link>
          <Link href="/report">Report an item</Link>
          <Link href="/contact">Contact us</Link>
        </div>
        <p className="fine">
          Built for our campus community.
          <br />
          CS4032 · {group} · Frontend demo
        </p>
      </div>
    </footer>
  );
}
