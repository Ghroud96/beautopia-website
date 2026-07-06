import { CalendarHeart, RotateCcw, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { skinTypes } from '../data/skinTypes';
import type { SkinTypeCode } from '../types';

export function SkinResult() {
  const saved = localStorage.getItem('beautopiaSkinType') as SkinTypeCode | null;
  const result = saved ? skinTypes[saved] : undefined;

  if (!result) {
    return (
      <section className="page-shell py-16">
        <div className="premium-card mx-auto max-w-2xl p-8 text-center">
          <Sparkles className="mx-auto text-gold" size={34} />
          <h1 className="mt-5 text-3xl font-semibold text-cocoa">Your skin result is waiting</h1>
          <p className="mt-4 text-mocha">Take the Skin MBTI test to unlock your personalized Beautopia profile.</p>
          <Link className="gold-button mt-7" to="/skin-test">Take Skin Test</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-shell py-16">
      <div className="premium-card overflow-hidden">
        <div className="bg-[linear-gradient(135deg,#402e29,#6f544b)] p-8 text-white md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">Your Skin MBTI Type</p>
          <h1 className="mt-3 text-6xl font-semibold">{result.code}</h1>
          <p className="mt-4 text-2xl font-semibold">{result.personality}</p>
          <p className="mt-2 text-white/70">{result.name}</p>
        </div>
        <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <h2 className="text-2xl font-semibold text-cocoa">Full explanation</h2>
            <p className="mt-4 text-base leading-8 text-mocha">{result.explanation}</p>
            <Panel title="Main concerns" items={result.concerns} />
            <Panel title="Daily routine" items={result.routine} ordered />
          </div>
          <aside className="grid gap-5">
            <Panel title="Recommended treatments" items={result.treatments} />
            <Panel title="Recommended products" items={result.products} />
            <div className="rounded-[2rem] bg-linen p-6">
              <p className="text-sm leading-7 text-mocha">
                This skin test is for beauty consultation purposes only and does not replace professional dermatological advice.
              </p>
              <div className="mt-5 grid gap-3">
                <Link className="gold-button" to="/contact"><CalendarHeart size={18} />Book Consultation</Link>
                <Link className="light-button" to="/skin-test"><RotateCcw size={18} />Retake Test</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Panel({ title, items, ordered = false }: { title: string; items: string[]; ordered?: boolean }) {
  const List = ordered ? 'ol' : 'ul';
  return (
    <div className="mt-6 rounded-[2rem] bg-white/70 p-6 shadow-sm">
      <h3 className="font-semibold text-cocoa">{title}</h3>
      <List className={`mt-4 grid gap-3 text-sm leading-7 text-mocha ${ordered ? 'list-decimal pl-5' : ''}`}>
        {items.map((item) => <li key={item}>{item}</li>)}
      </List>
    </div>
  );
}
