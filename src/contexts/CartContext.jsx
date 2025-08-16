import React, { createContext, useContext, useState, useMemo } from 'react'

const CartCtx = createContext()
export const useCart = () => useContext(CartCtx)

export function CartProvider({ children }){
  const [items, setItems] = useState([])

  const add = (product, qty=1, size='M') => {
    setItems(prev => {
      const existing = prev.find(p => p.id===product.id && p.size===size)
      if(existing){
        return prev.map(p => p.id===product.id && p.size===size ? { ...p, qty: p.qty + qty } : p)
      }
      return [...prev, { ...product, qty, size }]
    })
  }
  const remove = (id, size) => setItems(prev => prev.filter(p => !(p.id===id && p.size===size)))
  const clear = () => setItems([])
  const total = useMemo(()=> items.reduce((s,p)=> s + p.qty*p.price, 0), [items])

  return <CartCtx.Provider value={{ items, add, remove, clear, total }}>
    {children}
  </CartCtx.Provider>
}
