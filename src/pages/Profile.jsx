import { useAuth } from '../contexts/AuthContext'

export default function Profile(){
  const { user } = useAuth()
  if(!user) return <div className="max-w-3xl mx-auto px-4 py-10">Please login to view your profile.</div>

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4">Your Profile</h1>
      <div className="bg-white border rounded-2xl p-6">
        <div className="font-medium">{user.displayName}</div>
        <div className="text-sm text-gray-600">{user.email}</div>
        <div className="text-sm text-gray-600 mt-2">Measurements: set during fitting</div>
        <div className="text-sm text-gray-600">Upcoming fittings: none</div>
      </div>
    </div>
  )
}
