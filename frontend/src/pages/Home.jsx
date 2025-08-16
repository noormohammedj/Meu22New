import { Link } from 'react-router-dom'
import data from '../data/products.json'

export default function Home(){
  return (
    <div>
      <section className="bg-gradient-to-b from-brand-50 to-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Tailored elegance for your story.</h1>
            <p className="text-gray-600 mt-4">meu22 crafts women’s bespoke outfits — from bridal gowns to heirloom aari ensembles and maternity-friendly silhouettes.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/catalog" className="px-5 py-3 rounded-full bg-brand-700 text-white">Shop Catalog</Link>
              <a href="#wedding" className="px-5 py-3 rounded-full border">Explore Wedding</a>
            </div>
          </div>
          <img src="/assets/hero.jpg" alt="meu22 hero" className="rounded-2xl shadow-md"/>
        </div>
      </section>
      <section id="categories" className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Signature Categories</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.categories.map(c => (
            <Link to={`/catalog?cat=${c.id}`} key={c.id} className="group block">
              <div className="overflow-hidden rounded-2xl border bg-white">
                <img src={c.image} alt={c.name} className="aspect-[4/5] w-full object-cover group-hover:scale-[1.03] transition"/>
              </div>
              <div className="mt-2 font-medium">{c.name}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
