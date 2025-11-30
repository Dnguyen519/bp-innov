export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">BP Innov - Modern Dashboard</h1>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow border p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Welcome to BP Innov CMS</h2>
            <p className="text-gray-600">Modern design variations for your business management system.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow border p-4">
              <h3 className="font-medium mb-2 text-gray-900">Nouveaux messages</h3>
              <div className="text-2xl font-bold text-blue-600">0</div>
            </div>
            <div className="bg-white rounded-lg shadow border p-4">
              <h3 className="font-medium mb-2 text-gray-900">Interventions en attente</h3>
              <div className="text-2xl font-bold text-orange-600">0</div>
            </div>
            <div className="bg-white rounded-lg shadow border p-4">
              <h3 className="font-medium mb-2 text-gray-900">Demandes d'absence</h3>
              <div className="text-2xl font-bold text-green-600">0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}