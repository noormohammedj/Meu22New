import { useEffect } from 'react'
import { useCart } from '../contexts/CartContext'

export default function Checkout(){
  const { total, items, clear } = useCart()

  useEffect(()=>{
    // Preload Razorpay
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    document.body.appendChild(script)
  }, [])

  const pay = async () => {
    // Create order on server
    const res = await fetch(import.meta.env.VITE_SERVER_BASE + '/create-order', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ amount: Math.max(1, Math.round(total))*100, currency: 'INR', notes: { items: JSON.stringify(items) } })
    })
    const order = await res.json()

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'meu22 Boutique',
      description: 'Tailored outfit',
      order_id: order.id,
      handler: function (response){
        alert('Payment successful: ' + response.razorpay_payment_id)
        clear()
        window.location.href = '/'
      },
      prefill: { name: 'meu22 Client', email: 'client@example.com', contact: '9999999999' },
      theme: { color: '#57377c' }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      <div className="bg-white border rounded-2xl p-6">
        <div className="flex justify-between">
          <span>Order Total</span>
          <span className="font-semibold">₹ {total.toLocaleString('en-IN')}</span>
        </div>
        <div className="text-sm text-gray-600 mt-2">Includes free first fitting & alterations.</div>
        <button onClick={pay} className="mt-6 px-5 py-3 rounded-full bg-brand-700 text-white">Pay with Razorpay</button>
      </div>
    </div>
  )
}
