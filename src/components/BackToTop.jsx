import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 to-sky-600 text-white shadow-[0_0_18px_rgba(56,189,248,0.45)] hover:shadow-[0_0_28px_rgba(56,189,248,0.65)] transition-shadow"
      aria-label="Back to top"
    >
      <ArrowUp />
    </button>
  );
}
