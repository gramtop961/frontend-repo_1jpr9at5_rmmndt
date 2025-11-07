import { Code2, Brackets } from 'lucide-react';

const skills = [
  {
    name: 'HTML',
    color: 'from-orange-500 to-amber-500',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    name: 'CSS',
    color: 'from-sky-500 to-cyan-500',
    icon: <Brackets className="w-6 h-6" />,
  },
  {
    name: 'Python',
    color: 'from-indigo-500 to-violet-500',
    icon: <Code2 className="w-6 h-6" />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-[#0b0b12]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.15),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s) => (
            <div
              key={s.name}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] hover:shadow-[0_0_40px_rgba(124,58,237,0.35)] transition-all"
            >
              <div className={`absolute -inset-1 opacity-0 group-hover:opacity-100 blur-2xl bg-gradient-to-r ${s.color} transition-opacity`} />
              <div className="relative flex items-center gap-4">
                <div className="text-white/90">{s.icon}</div>
                <div>
                  <p className="text-lg font-semibold text-white">{s.name}</p>
                  <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                    <div className={`h-2 rounded-full bg-gradient-to-r ${s.color} shadow-[0_0_15px_rgba(56,189,248,0.4)] w-4/5`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
