"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
interface NavbarProps {
  campus: string;
}
export function Navbar({ campus }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="header relative z-10">
      <div className="nav-wrap">
        <Link href="/" className="brand">
          <span className="brand-icon">
            c<span>f</span>
          </span>
          CampusFind<span className="campus-label">{campus}</span>
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          Menu {open ? "−" : "+"}
        </button>
        <nav
          id="main-nav"
          className={open ? "nav open" : "nav"}
          aria-label="Main navigation"
        >
          {[
            ["/items", "Browse items"],
            ["/saved", "Saved items"],
            ["/about", "How it works"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/report"
            className="button small"
            onClick={() => setOpen(false)}
          >
            ＋ Report an item
          </Link>
        </nav>
      </div>
    </header>
  );
}
