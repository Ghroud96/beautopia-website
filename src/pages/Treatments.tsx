import { CalendarHeart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { treatments } from '../data/treatments';

export function Treatments() {
  return (
    <section className="page-shell py-16">
      <SectionHeader centered kicker="Treatment menu" title="Professional facial care, softly customized" copy="Choose a starting point. Your therapist can refine the service after your consultation." />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {treatments.map((treatment) => (
          <article key={treatment.name} className="premium-card flex flex-col p-6 transition hover:-translate-y-1">
            <CalendarHeart className="text-gold" />
            <h3 className="mt-5 text-xl font-semibold text-cocoa">{treatment.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-mocha">{treatment.description}</p>
            <dl className="mt-5 grid gap-3 text-sm">
              <div><dt className="font-semibold text-cocoa">Duration</dt><dd className="text-mocha">{treatment.duration}</dd></div>
              <div><dt className="font-semibold text-cocoa">Suitable for</dt><dd className="text-mocha">{treatment.suitable}</dd></div>
              <div><dt className="font-semibold text-cocoa">Price</dt><dd className="text-mocha">{treatment.price}</dd></div>
            </dl>
            <Link className="light-button mt-6" to="/contact">Book This Treatment</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
