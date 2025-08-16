import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import data from '../data/products.json'

function useQuery(){
  const { search } = useLocation()
  return useMemo(()=> new URLSearchParams(search), [search])
}

export default function Catalog(){
  const q = useQuery()
  const cat = q.get('cat')
  const products = cat ? data.products.filter(p => p.category===cat) : data.products
  const title = cat ? data.categories.find(c => c.id===cat)?.name : 'All Designs'

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="text-sm text-gray-600">{products.length} styles</div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {products.map(p => (
          <Link to={`/product/${p.id}`} key={p.id} className="group block bg-white border rounded-2xl overflow-hidden">
            <img src={p.image} alt={p.title} className="aspect-[4/5] w-full object-cover group-hover:scale-[1.03] transition"/>
            <div className="p-3">
              <div className="text-sm text-gray-500">{data.categories.find(c=>c.id===p.category)?.name}</div>
              <div className="font-medium">{p.title}</div>
              <div className="text-brand-800 font-semibold mt-1">₹ {p.price.toLocaleString('en-IN')}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
