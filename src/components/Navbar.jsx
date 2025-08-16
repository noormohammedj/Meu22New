import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'

export default function Navbar(){
  const { user, logout, loginWithGoogle } = useAuth()
  const { items } = useCart()

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl2 bg-brand-600 grid place-items-center text-white font-semibold">m</div>
          <span className="text-xl font-semibold tracking-wide">meu22</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <NavLink to="/catalog" className={({isActive})=> isActive ? 'text-brand-700 font-semibold' : 'hover:text-brand-700'}>Catalog</NavLink>
          <a href="#wedding" className="hover:text-brand-700">Wedding Gowns</a>
          <a href="#aari" className="hover:text-brand-700">Aari Work</a>
          <a href="#duo" className="hover:text-brand-700">Mother & Daughter</a>
          <a href="#maternity" className="hover:text-brand-700">Maternity</a>
        </nav>
        <div className="flex items-center gap-4">
          <NavLink to="/cart" className="relative hover:opacity-80">
            <span>🛍️</span>
            {items.length>0 && <span className="absolute -top-2 -right-2 text-xs bg-brand-700 text-white rounded-full px-2">{items.length}</span>}
          </NavLink>
          {user ? (
            <div className="flex items-center gap-3">
              <NavLink to="/profile" className="hover:text-brand-700">{user.displayName || 'Profile'}</NavLink>
              <button onClick={logout} className="text-sm px-3 py-1.5 rounded-full border hover:bg-brand-50">Logout</button>
            </div>
          ) : (
            <button onClick={loginWithGoogle} className="text-sm px-3 py-1.5 rounded-full bg-brand-700 text-white hover:bg-brand-800">Login</button>
          )}
        </div>
      </div>
    </header>
  )
}
