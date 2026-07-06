import { CheckCircle2, MessageCircle } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { treatments } from '../data/treatments';

export function Contact() {
  const [sent, setSent] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section className="page-shell py-16">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <SectionHeader
            kicker="Contact / Booking"
            title="Reserve your Beautopia appointment"
            copy="Send your preferred timing and skin concern. The Beautopia team will confirm your appointment and recommend the best starting treatment."
          />
          <div className="premium-card mt-8 p-6">
            <p className="font-semibold text-cocoa">WhatsApp concierge</p>
            <p className="mt-2 text-sm leading-7 text-mocha">Prefer a quick chat? Message us directly for availability and treatment guidance.</p>
            <a className="gold-button mt-5" href="https://wa.me/60123456789"><MessageCircle size={18} />WhatsApp Beautopia</a>
          </div>
        </div>

        <form className="premium-card grid gap-5 p-6 md:p-8" onSubmit={submitForm}>
          {sent && (
            <div className="flex items-start gap-3 rounded-3xl bg-sage/15 p-4 text-sm leading-7 text-cocoa">
              <CheckCircle2 className="mt-1 text-sage" size={20} />
              <span>Your request has been received. Please use WhatsApp if you would like the fastest confirmation.</span>
            </div>
          )}
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Phone" name="phone" required />
            <Field label="Email" name="email" type="email" />
            <label className="grid gap-2 text-sm font-semibold text-cocoa">
              Preferred Treatment
              <select className="rounded-2xl border border-cocoa/10 bg-white px-4 py-3 text-mocha outline-none focus:ring-4 focus:ring-blush/30" name="treatment">
                {treatments.map((treatment) => <option key={treatment.name}>{treatment.name}</option>)}
              </select>
            </label>
            <Field label="Preferred Date" name="date" type="date" />
            <Field label="Preferred Time" name="time" type="time" />
          </div>
          <Field label="Skin Concern" name="concern" />
          <label className="grid gap-2 text-sm font-semibold text-cocoa">
            Message
            <textarea className="min-h-32 rounded-2xl border border-cocoa/10 bg-white px-4 py-3 text-mocha outline-none focus:ring-4 focus:ring-blush/30" name="message" />
          </label>
          <button className="gold-button justify-self-start" type="submit">Send Booking Request</button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-cocoa">
      {label}
      <input
        className="rounded-2xl border border-cocoa/10 bg-white px-4 py-3 text-mocha outline-none focus:ring-4 focus:ring-blush/30"
        name={name}
        required={required}
        type={type}
      />
    </label>
  );
}
