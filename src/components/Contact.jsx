import { Mail, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been noted.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0b0b12]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.14),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Contact</h2>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-white/80">
              Have an idea or opportunity? Let’s build something great together.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="mailto:mohithpandiri2222@gmail.com" className="inline-flex items-center gap-2 text-sky-300 hover:text-sky-200 transition-colors">
                <Mail className="w-5 h-5" /> mohithpandiri2222@gmail.com
              </a>
              <div className="flex items-center gap-4">
                <a href="#" aria-label="GitHub" className="text-white/80 hover:text-white"><Github /></a>
                <a href="#" aria-label="LinkedIn" className="text-white/80 hover:text-white"><Linkedin /></a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div>
              <label className="block text-sm text-white/70">Your Name</label>
              <input required className="mt-2 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500/50" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm text-white/70">Email</label>
              <input type="email" required className="mt-2 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500/50" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm text-white/70">Message</label>
              <textarea required rows={4} className="mt-2 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500/50" placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="inline-flex items-center justify-center px-5 py-2 rounded-md font-medium text-white bg-gradient-to-r from-fuchsia-600 via-violet-600 to-sky-600 shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-shadow">
              Send Message
            </button>
            {status && <p className="text-emerald-300 text-sm">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
