import { useParams } from 'react-router-dom'
import data from '../data/products.json'
import { useCart } from '../contexts/CartContext'

export default function ProductDetail(){
  const { id } = useParams()
  const product = data.products.find(p => p.id===id)
  const { add } = useCart()

  if(!product) return <div className="max-w-5xl mx-auto px-4 py-10">Product not found.</div>

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
      <img src={product.image} alt={product.title} className="rounded-2xl border w-full object-cover"/>
      <div>
        <div className="text-sm text-gray-600">{data.categories.find(c=>c.id===product.category)?.name}</div>
        <h1 className="text-3xl font-semibold">{product.title}</h1>
        <div className="text-2xl text-brand-800 font-semibold mt-2">₹ {product.price.toLocaleString('en-IN')}</div>
        <p className="text-gray-600 mt-4">{product.description}</p>
        <div className="mt-4">
          <div className="text-sm text-gray-600 mb-1">Size</div>
          <div className="flex gap-2">
            {product.sizes.map(s => <span key={s} className="px-3 py-1.5 rounded-full border">{s}</span>)}
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <button onClick={()=>add(product,1,product.sizes[0]||'M')} className="px-5 py-3 rounded-full bg-brand-700 text-white">Add to Cart</button>
          <a href="/checkout" className="px-5 py-3 rounded-full border">Buy Now</a>
        </div>
        <div className="mt-8 text-sm text-gray-600">
          <div>Made-to-measure • First fitting free • Alterations included</div>
        </div>
      </div>
    </div>
  )
}
