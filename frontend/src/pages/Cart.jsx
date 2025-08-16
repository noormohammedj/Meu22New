import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'

export default function Cart(){
  const { items, remove, total } = useCart()

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
      {items.length===0 ? (
        <div className="bg-white border rounded-2xl p-8 text-center">
          Your cart is empty. <Link to="/catalog" className="text-brand-700 underline">Browse catalog</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {items.map((p,idx)=>(
              <div key={idx} className="bg-white border rounded-2xl p-4 flex gap-4">
                <img src={p.image} className="w-28 h-32 object-cover rounded-xl border" />
                <div className="flex-1">
                  <div className="font-medium">{p.title}</div>
                  <div className="text-sm text-gray-600">Size: {p.size} • Qty: {p.qty}</div>
                  <div className="font-semibold mt-1">₹ {(p.qty*p.price).toLocaleString('en-IN')}</div>
                </div>
                <button onClick={()=>remove(p.id,p.size)} className="text-red-600">Remove</button>
              </div>
            ))}
          </div>
          <div className="bg-white border rounded-2xl p-5 h-fit">
            <div className="flex justify-between">
              <span>Subtotal</span><span>₹ {total.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>Fitting & Alterations</span><span>Free</span>
            </div>
            <hr className="my-3"/>
            <Link to="/checkout" className="block text-center px-5 py-3 rounded-full bg-brand-700 text-white">Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </div>
  )
}
