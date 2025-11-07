import Spline from '@splinetool/react-spline';

export default function Hero() {
  const handleContactClick = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0b12]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0b12]/30 to-[#0b0b12]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-violet-300 via-cyan-200 to-sky-300 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(124,58,237,0.3)]">
          Hi, I’m Mohith 👋
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
          Web Developer passionate about creating beautiful, responsive, and functional websites.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#contact"
            onClick={handleContactClick}
            className="relative inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-fuchsia-600 via-violet-600 to-sky-600 shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-shadow focus:outline-none focus:ring-2 focus:ring-sky-400/50"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-white/90 hover:text-white border border-white/20 hover:border-white/40 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
