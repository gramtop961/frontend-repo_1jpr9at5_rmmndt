import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.2 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
      scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-white font-semibold tracking-wide text-lg">
          Mohith.dev
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className={`relative px-3 py-2 text-sm transition-colors ${
                  isActive ? 'text-white' : 'text-white/80 hover:text-white'
                }`}
              >
                {l.label}
                {isActive && (
                  <span className="absolute left-2 right-2 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 shadow-[0_0_12px_rgba(99,102,241,0.6)]" />
                )}
              </a>
            );
          })}
        </div>

        <button
          className="md:hidden text-white"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-black/70 backdrop-blur-md border-t border-white/10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className={`block py-2 ${active === l.href ? 'text-white' : 'text-white/90 hover:text-white'}`}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
