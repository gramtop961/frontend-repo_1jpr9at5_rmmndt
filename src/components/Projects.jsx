export default function Projects() {
  const projects = [
    {
      title: 'Project One',
      desc: 'A modern web app showcasing responsive UI patterns.',
      link: '#',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Project Two',
      desc: 'Interactive dashboard with smooth animations.',
      link: '#',
      img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Project Three',
      desc: 'API-driven product with robust frontend architecture.',
      link: '#',
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <section id="projects" className="relative py-24 bg-[#0b0b12]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img src={p.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="text-white/70 mt-2 text-sm">{p.desc}</p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-fuchsia-600/20 via-violet-600/20 to-sky-600/20" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
