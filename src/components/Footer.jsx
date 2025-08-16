export default function Footer(){
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="text-lg font-semibold mb-2">meu22</div>
          <p className="text-gray-600">Women-tailored boutique — exclusive wedding gowns, aari work, mother & daughter duo, maternity dresses.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Help</div>
          <ul className="space-y-1 text-gray-600">
            <li>Shipping & fittings</li>
            <li>Returns & alterations</li>
            <li>Contact: care@meu22.com</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Follow</div>
          <div className="flex gap-3 text-xl">
            <span>📷</span><span>🐦</span><span>📌</span>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-3">© {new Date().getFullYear()} meu22</div>
    </footer>
  )
}
