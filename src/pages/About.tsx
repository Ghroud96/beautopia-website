import { Microscope, Sparkles, Waves } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';

export function About() {
  return (
    <section className="page-shell py-16">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center">
        <div className="premium-card overflow-hidden p-3">
          <img
            className="h-[520px] w-full rounded-[1.5rem] object-cover"
            src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=85"
            alt="Elegant skincare products"
          />
        </div>
        <div>
          <SectionHeader
            kicker="About Beautopia"
            title="A skin lab for calm confidence"
            copy="Beautopia Skin Lab is a premium skincare and facial studio focused on personalized skin analysis, professional facial treatments, skin barrier repair, acne care, hydration, brightening, and long-term skin improvement."
          />
          <div className="mt-8 grid gap-4">
            {[
              { icon: Microscope, title: 'Analysis before action', copy: 'We begin with your skin behavior, lifestyle, comfort level, and goals.' },
              { icon: Waves, title: 'Barrier-first rituals', copy: 'Treatments are designed to respect the skin barrier while improving texture and glow.' },
              { icon: Sparkles, title: 'Beautiful long-term progress', copy: 'Your plan can evolve from calming and repairing to brightening, refining, and firming.' },
            ].map(({ icon: Icon, title, copy }) => (
              <div key={title} className="rounded-3xl bg-white/70 p-5 shadow-sm">
                <Icon className="text-gold" />
                <h3 className="mt-3 font-semibold text-cocoa">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-mocha">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
