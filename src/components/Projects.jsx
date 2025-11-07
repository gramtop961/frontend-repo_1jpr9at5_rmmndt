import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Project One',
      desc: 'A modern web app showcasing responsive UI patterns.',
      live: '#',
      github: '#',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Project Two',
      desc: 'Interactive dashboard with smooth animations.',
      live: '#',
      github: '#',
      img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Project Three',
      desc: 'API-driven product with robust frontend architecture.',
      live: '#',
      github: '#',
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
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all hover:border-white/20 hover:bg-white/10"
            >
              <div className="aspect-video overflow-hidden">
                <img src={p.img} alt="Project preview" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="text-white/70 mt-2 text-sm">{p.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/90 hover:text-white hover:border-white/30 hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm text-white/90 hover:text-white hover:border-white/30 transition-colors"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-fuchsia-600/10 via-violet-600/10 to-sky-600/10 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
