import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizQuestions } from '../data/quizQuestions';
import type { Dimension, SkinTypeCode } from '../types';

const answerOptions = [
  { label: 'Strongly A', value: -2 },
  { label: 'Slightly A', value: -1 },
  { label: 'Slightly B', value: 1 },
  { label: 'Strongly B', value: 2 },
];

const firstLetter: Record<Dimension, string> = { DO: 'D', SR: 'S', PN: 'P', WT: 'W' };
const secondLetter: Record<Dimension, string> = { DO: 'O', SR: 'R', PN: 'N', WT: 'T' };

export function SkinQuiz() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const question = quizQuestions[current];
  const selected = answers[question.id];
  const progress = ((current + 1) / quizQuestions.length) * 100;

  const scores = useMemo(() => {
    return quizQuestions.reduce<Record<Dimension, number>>(
      (total, item) => {
        total[item.dimension] += answers[item.id] ?? 0;
        return total;
      },
      { DO: 0, SR: 0, PN: 0, WT: 0 },
    );
  }, [answers]);

  function choose(value: number) {
    setAnswers((existing) => ({ ...existing, [question.id]: value }));
  }

  function finish() {
    const code = (Object.keys(scores) as Dimension[])
      .map((dimension) => (scores[dimension] <= 0 ? firstLetter[dimension] : secondLetter[dimension]))
      .join('') as SkinTypeCode;
    localStorage.setItem('beautopiaSkinType', code);
    navigate('/skin-result');
  }

  function next() {
    if (selected === undefined) return;
    if (current === quizQuestions.length - 1) {
      finish();
      return;
    }
    setCurrent((value) => value + 1);
  }

  function reset() {
    setAnswers({});
    setCurrent(0);
    localStorage.removeItem('beautopiaSkinType');
  }

  return (
    <section className="page-shell py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="section-kicker">Skin MBTI Test</p>
            <h1 className="mt-2 text-3xl font-semibold text-cocoa">Your skin personality quiz</h1>
          </div>
          <button className="light-button px-4" type="button" onClick={reset} aria-label="Restart quiz">
            <RotateCcw size={18} />
          </button>
        </div>

        <div className="premium-card overflow-hidden">
          <div className="h-2 bg-linen">
            <div className="h-full rounded-r-full bg-gold transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
          <div className="fade-in p-6 md:p-9" key={question.id}>
            <p className="text-sm font-semibold text-rose">Question {current + 1} of {quizQuestions.length}</p>
            <h2 className="mt-4 text-2xl font-semibold leading-snug text-cocoa">{question.question}</h2>
            <div className="mt-6 grid gap-3">
              {answerOptions.map((option) => {
                const isA = option.value < 0;
                const answerText = isA ? question.a : question.b;
                const active = selected === option.value;
                return (
                  <button
                    key={option.label}
                    className={`rounded-3xl border p-4 text-left transition hover:-translate-y-0.5 ${
                      active ? 'border-gold bg-linen shadow-soft' : 'border-cocoa/10 bg-white/70 hover:border-gold/40'
                    }`}
                    type="button"
                    onClick={() => choose(option.value)}
                  >
                    <span className="block text-sm font-bold uppercase tracking-[0.16em] text-gold">{option.label}</span>
                    <span className="mt-1 block font-semibold text-cocoa">{answerText}</span>
                  </button>
                );
              })}
            </div>
            <p className="mt-6 rounded-3xl bg-white/70 p-4 text-sm leading-7 text-mocha">
              This skin test is for beauty consultation purposes only and does not replace professional dermatological advice.
            </p>
            <div className="mt-7 flex justify-between gap-3">
              <button className="light-button" disabled={current === 0} type="button" onClick={() => setCurrent((value) => Math.max(0, value - 1))}>
                <ArrowLeft size={18} />Back
              </button>
              <button className="gold-button disabled:cursor-not-allowed disabled:opacity-50" disabled={selected === undefined} type="button" onClick={next}>
                {current === quizQuestions.length - 1 ? 'See Result' : 'Next'}<ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
