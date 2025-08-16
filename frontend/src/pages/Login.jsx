import { useAuth } from '../contexts/AuthContext'

export default function Login(){
  const { loginWithGoogle } = useAuth()
  return (
    <div className="max-w-md mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-semibold">Login or Sign up</h1>
      <p className="text-gray-600 mt-2">Use Google to continue</p>
      <button onClick={loginWithGoogle} className="mt-6 px-5 py-3 rounded-full bg-brand-700 text-white">Continue with Google</button>
    </div>
  )
}
