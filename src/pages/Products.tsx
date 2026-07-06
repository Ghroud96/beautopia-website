import { MessageCircle, PackageCheck } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { products } from '../data/products';

export function Products() {
  return (
    <section className="page-shell py-16">
      <SectionHeader centered kicker="Skincare edit" title="Beautopia routine essentials" copy="A curated product shelf for cleansing, comfort, brightness, refinement, protection, and bounce." />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <article key={product.name} className="premium-card flex flex-col p-6">
            <PackageCheck className="text-gold" />
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-rose">{product.category}</p>
            <h3 className="mt-2 text-xl font-semibold text-cocoa">{product.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-mocha">{product.description}</p>
            <p className="mt-5 text-sm text-mocha"><span className="font-semibold text-cocoa">Suitable:</span> {product.suitable}</p>
            <p className="mt-2 text-sm font-semibold text-cocoa">{product.price}</p>
            <a className="light-button mt-6" href="https://wa.me/60123456789"><MessageCircle size={17} />Ask Beautopia</a>
          </article>
        ))}
      </div>
    </section>
  );
}
