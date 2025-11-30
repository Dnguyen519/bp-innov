export default function CommandesPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Commandes</h1>
        <div className="bg-white rounded-lg shadow border p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Liste des commandes</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left">N° Code</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Client</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Date</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Statut</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">2473</td>
                  <td className="border border-gray-200 px-4 py-2">
                    <div>
                      <div className="font-medium">Matthias et Stéphanie GOUIGNARD</div>
                      <div className="text-sm text-gray-500">49260 MAZÉ</div>
                    </div>
                  </td>
                  <td className="border border-gray-200 px-4 py-2">10/01/2023</td>
                  <td className="border border-gray-200 px-4 py-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Validée</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">2472</td>
                  <td className="border border-gray-200 px-4 py-2">
                    <div>
                      <div className="font-medium">Jonathan et emmanuelle BONDT</div>
                      <div className="text-sm text-gray-500">37190 Rivarennes</div>
                    </div>
                  </td>
                  <td className="border border-gray-200 px-4 py-2">28/02/2023</td>
                  <td className="border border-gray-200 px-4 py-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Enregistrée</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}