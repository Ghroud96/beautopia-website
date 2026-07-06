import { ArrowRight, BadgeCheck, Droplets, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { treatments } from '../data/treatments';

const badges = [
  { label: 'Personalized Consultation', icon: BadgeCheck },
  { label: 'Professional Facial Care', icon: Sparkles },
  { label: 'Skin Barrier Focused', icon: ShieldCheck },
  { label: 'Relaxing Experience', icon: Heart },
];

const testimonials = [
  'My skin looked calm and luminous before I even left the studio.',
  'The consultation felt thoughtful, never rushed. I finally understood what my skin needed.',
  'Beautopia has the most serene treatment room and the gentlest hands.',
];

export function Home() {
  return (
    <>
      <section className="page-shell grid min-h-[calc(100vh-5rem)] items-center gap-10 py-12 lg:grid-cols-[1fr_0.9fr] lg:py-16">
        <div className="fade-in">
          <p className="section-kicker">Premium beauty clinic</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight tracking-normal text-cocoa sm:text-6xl lg:text-7xl">
            Reveal Your Healthiest, Most Radiant Skin
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-mocha">
            Personalized facial treatments and skincare solutions designed for your unique skin type.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="gold-button" to="/contact">Book Appointment <ArrowRight size={18} /></Link>
            <Link className="light-button" to="/skin-test">Take Skin Test <Sparkles size={18} /></Link>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {badges.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 rounded-3xl bg-white/65 p-4 shadow-sm">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-linen text-gold"><Icon size={19} /></span>
                <span className="text-sm font-semibold text-cocoa">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="premium-card overflow-hidden p-3">
          <img
            className="h-[560px] w-full rounded-[1.5rem] object-cover"
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85"
            alt="Calm facial treatment room"
          />
        </div>
      </section>

      <section className="page-shell py-16">
        <SectionHeader centered kicker="Featured treatments" title="Facials designed around your skin story" copy="From hydration to acne care and brightening, every service begins with a quiet skin conversation." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {treatments.slice(0, 3).map((item) => (
            <article key={item.name} className="premium-card p-6 transition hover:-translate-y-1">
              <Droplets className="text-gold" />
              <h3 className="mt-5 text-xl font-semibold text-cocoa">{item.name}</h3>
              <p className="mt-3 text-sm leading-7 text-mocha">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cocoa py-16 text-white">
        <div className="page-shell grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <p className="section-kicker">Skin MBTI</p>
            <h2 className="mt-3 text-4xl font-semibold">Meet your skin personality</h2>
            <p className="mt-4 text-base leading-8 text-white/70">
              Take a 20-question beauty consultation quiz and receive a personalized type, routine direction, and
              Beautopia treatment match.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white/10 p-6">
            <div className="grid grid-cols-4 gap-3 text-center">
              {['D/O', 'S/R', 'P/N', 'W/T'].map((code) => (
                <span key={code} className="rounded-2xl bg-white/10 px-4 py-5 text-lg font-semibold text-gold">{code}</span>
              ))}
            </div>
            <Link className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-cocoa" to="/skin-test">
              Start the test
            </Link>
          </div>
        </div>
      </section>

      <section className="page-shell py-16">
        <SectionHeader centered kicker="Client notes" title="Soft skin, beautifully understood" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((quote) => (
            <blockquote key={quote} className="premium-card p-6 text-base leading-8 text-mocha">
              "{quote}"
            </blockquote>
          ))}
        </div>
      </section>

      <section className="page-shell pb-16">
        <div className="premium-card grid gap-6 bg-[linear-gradient(135deg,#fff,#f1cbc8)] p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="section-kicker">Ready when you are</p>
            <h2 className="mt-3 text-3xl font-semibold text-cocoa">Book a consultation-led facial</h2>
          </div>
          <Link className="gold-button" to="/contact">Reserve your glow</Link>
        </div>
      </section>
    </>
  );
}
