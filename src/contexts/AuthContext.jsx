import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, googleProvider } from '../firebase'
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'

const AuthCtx = createContext()
export const useAuth = () => useContext(AuthCtx)

export function AuthProvider({ children }){
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, (u)=>{
      setUser(u)
      setLoading(false)
    })
    return () => unsub()
  }, [])

  const loginWithGoogle = () => signInWithPopup(auth, googleProvider)
  const logout = () => signOut(auth)

  return <AuthCtx.Provider value={{ user, loginWithGoogle, logout }}>
    {!loading && children}
  </AuthCtx.Provider>
}
