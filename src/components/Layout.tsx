import { Menu, MessageCircle, Sparkles, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Treatments', href: '/treatments' },
  { label: 'Skin Test', href: '/skin-test' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
];

export function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#f1cbc8_0,#fffaf6_26%,#f7eee7_70%,#fffaf6_100%)]">
      <header className="sticky top-0 z-50 border-b border-white/70 bg-ivory/85 backdrop-blur-xl">
        <nav className="page-shell flex h-20 items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid h-11 w-11 place-items-center rounded-full bg-cocoa text-white shadow-lg shadow-cocoa/20">
              <Sparkles size={21} />
            </span>
            <span>
              <span className="block text-lg font-semibold tracking-normal text-cocoa">Beautopia</span>
              <span className="block text-xs font-bold uppercase tracking-[0.24em] text-gold">Skin Lab</span>
            </span>
          </NavLink>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive ? 'bg-cocoa text-white' : 'text-mocha hover:bg-white/70 hover:text-cocoa'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <NavLink className="gold-button hidden lg:inline-flex" to="/contact">
            Book Appointment
          </NavLink>

          <button
            type="button"
            aria-label="Toggle menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-cocoa/10 bg-white/75 text-cocoa lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <div className="page-shell pb-5 lg:hidden">
            <div className="premium-card grid gap-2 p-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-semibold ${
                      isActive ? 'bg-cocoa text-white' : 'text-mocha hover:bg-linen'
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-white/70 bg-cocoa text-white">
        <div className="page-shell grid gap-8 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="text-xl font-semibold">Beautopia Skin Lab</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/70">
              Premium facial care, thoughtful skin analysis, and ritual-level relaxation for skin that feels calm,
              bright, and beautifully supported.
            </p>
          </div>
          <div>
            <p className="font-semibold text-gold">Studio</p>
            <p className="mt-3 text-sm leading-7 text-white/70">Kuching<br />Open daily by appointment</p>
          </div>
          <div>
            <p className="font-semibold text-gold">Consultation</p>
            <a className="mt-3 inline-flex text-sm text-white/80 hover:text-white" href="https://wa.me/60123456789">
              WhatsApp Beautopia
            </a>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/60123456789"
        aria-label="Chat with Beautopia on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-cocoa/25 transition hover:-translate-y-1"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
