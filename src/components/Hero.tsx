import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

type Point = { x: number; y: number };

interface WaveConfig {
  offset: number;
  amplitude: number;
  frequency: number;
  color: string;
  opacity: number;
}

const highlightPills = ['Websites', 'Platforms & ERP', 'Mobile apps'] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<Point>({ x: 0, y: 0 });
  const targetMouseRef = useRef<Point>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    let animationId: number;
    let time = 0;

    const css = (name: string, fallback: string) => {
      const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
      return value || fallback;
    };

    const hexToRgba = (hex: string, alpha: number) => {
      const h = hex.replace('#', '');
      const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
      const r = parseInt(full.slice(0, 2), 16);
      const g = parseInt(full.slice(2, 4), 16);
      const b = parseInt(full.slice(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const blue = css('--brand-blue', '#134e7c');
    const green = css('--brand-green', '#17a06a');
    const bgTop = css('--bg', '#ffffff');
    const bgBottom = css('--bg-soft', '#f5f5f7');

    const wavePalette: WaveConfig[] = [
      { offset: 0, amplitude: 72, frequency: 0.003, color: hexToRgba(blue, 0.9), opacity: 0.4 },
      { offset: Math.PI / 2, amplitude: 92, frequency: 0.0026, color: hexToRgba(green, 0.85), opacity: 0.34 },
      { offset: Math.PI, amplitude: 60, frequency: 0.0034, color: hexToRgba(blue, 0.7), opacity: 0.26 },
      { offset: Math.PI * 1.5, amplitude: 82, frequency: 0.0022, color: hexToRgba(green, 0.6), opacity: 0.22 },
      { offset: Math.PI * 2, amplitude: 54, frequency: 0.004, color: hexToRgba(blue, 0.5), opacity: 0.16 },
    ];

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mouseInfluence = prefersReducedMotion ? 8 : 64;
    const influenceRadius = prefersReducedMotion ? 160 : 320;
    const smoothing = prefersReducedMotion ? 0.04 : 0.1;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    const recenterMouse = () => {
      const center = { x: canvas.width / 2, y: canvas.height / 2 };
      mouseRef.current = center;
      targetMouseRef.current = center;
    };
    const handleResize = () => {
      resizeCanvas();
      recenterMouse();
    };
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseRef.current = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    };
    const handleMouseLeave = () => recenterMouse();

    resizeCanvas();
    recenterMouse();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const drawWave = (wave: WaveConfig) => {
      ctx.save();
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 4) {
        const dx = x - mouseRef.current.x;
        const dy = canvas.height / 2 - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - distance / influenceRadius);
        const mouseEffect = influence * mouseInfluence * Math.sin(time * 0.001 + x * 0.01 + wave.offset);
        const y =
          canvas.height / 2 +
          Math.sin(x * wave.frequency + time * 0.002 + wave.offset) * wave.amplitude +
          Math.sin(x * wave.frequency * 0.4 + time * 0.003) * (wave.amplitude * 0.45) +
          mouseEffect;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = wave.color;
      ctx.globalAlpha = wave.opacity;
      ctx.shadowBlur = 32;
      ctx.shadowColor = wave.color;
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      time += 1;
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * smoothing;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * smoothing;

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, bgTop);
      gradient.addColorStop(1, bgBottom);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      wavePalette.forEach(drawWave);

      animationId = window.requestAnimationFrame(animate);
    };

    animationId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section
      className="relative isolate flex min-h-[calc(100vh-52px)] w-full items-center justify-center overflow-hidden bg-bg"
      aria-label="Hero"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-blue/[0.05] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-brand-green/[0.06] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-content flex-col items-center px-5 py-24 text-center sm:px-6 lg:px-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full">
          <motion.div
            variants={itemVariants}
            className="mb-7 inline-flex items-center gap-2 rounded-pill border border-line bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink2 backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-brand-green" aria-hidden="true" />
            EvoTech Innovations · Digital product studio
          </motion.div>

          <motion.h1 variants={itemVariants} className="display-1 mx-auto max-w-4xl text-balance">
            We build digital products businesses <span className="gradient-text">run on.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink2 sm:text-xl"
          >
            From school platforms to pharma websites and mobile apps, we design and ship fast,
            beautiful software people actually trust.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              to="/work"
              className="group inline-flex items-center justify-center gap-2 rounded-pill bg-brand-blue px-7 py-3.5 font-semibold text-white shadow-soft transition duration-300 ease-apple hover:-translate-y-0.5 hover:bg-brand-bluedeep"
            >
              View our work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-pill border border-line bg-white/70 px-7 py-3.5 font-semibold text-ink backdrop-blur transition duration-300 ease-apple hover:bg-white"
            >
              Start a project
            </Link>
          </motion.div>

          <motion.ul
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center justify-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-ink2"
          >
            {highlightPills.map((pill) => (
              <li
                key={pill}
                className="rounded-pill border border-line bg-white/70 px-4 py-2 backdrop-blur"
              >
                {pill}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-bg" />
    </section>
  );
};

export default Hero;
