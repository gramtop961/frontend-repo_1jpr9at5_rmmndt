export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0b0b12]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
        <p className="mt-6 text-white/80 max-w-3xl">
          I’m a dedicated Web Developer with a passion for crafting user-friendly and visually appealing websites. I enjoy combining clean code with creative design to deliver seamless digital experiences.
        </p>
      </div>
    </section>
  );
}
