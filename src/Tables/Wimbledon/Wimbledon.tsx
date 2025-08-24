import { Button } from "@/components/ui/button";

export const Wimbledon = () => {
  return (
    <div className="max-w-md mx-auto my-10 bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center p-4 bg-green-600 text-white">
        <span className="text-xl mr-2">🎾</span>
        <h1 className="text-xl font-bold">Wimbledon</h1>
      </div>

      <div className="p-4 space-y-4">
        {/* Buttons */}
        <div className="flex justify-between space-x-4">
          <button className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors">
            + Add Player
          </button>
          <button className="flex-1 px-4 py-2 bg-purple-800 text-white rounded-lg font-semibold hover:bg-purple-900 transition-colors">
            + Add Score
          </button>
        </div>

        {/* Table Section */}
        <div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-sm text-gray-500 border-b border-gray-200">
                <th className="py-2 pr-4 font-normal">Player</th>
                <th className="py-2 px-2 font-normal">M</th>
                <th className="py-2 px-2 font-normal">W</th>
                <th className="py-2 px-2 font-normal">L</th>
                <th className="py-2 pl-2 font-normal">Pts</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-4 font-semibold">Djokovic</td>
                <td className="py-2 px-2">9</td>
                <td className="py-2 px-2">
                  <span className="text-green-500">5 ✅</span>
                </td>
                <td className="py-2 px-2">
                  <span className="text-red-500">4 ❌</span>
                </td>
                <td className="py-2 pl-2 font-semibold">15</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-4 font-semibold">Alcaraz</td>
                <td className="py-2 px-2">7</td>
                <td className="py-2 px-2">
                  <span className="text-green-500">4 ✅</span>
                </td>
                <td className="py-2 px-2">
                  <span className="text-red-500">3 ❌</span>
                </td>
                <td className="py-2 pl-2 font-semibold">12</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-4 font-semibold">Nadal</td>
                <td className="py-2 px-2">6</td>
                <td className="py-2 px-2">
                  <span className="text-green-500">3 ✅</span>
                </td>
                <td className="py-2 px-2">
                  <span className="text-red-500">3 ❌</span>
                </td>
                <td className="py-2 pl-2 font-semibold">9</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-4 font-semibold">Murray</td>
                <td className="py-2 px-2">5</td>
                <td className="py-2 px-2">
                  <span className="text-green-500">2 ✅</span>
                </td>
                <td className="py-2 px-2">
                  <span className="text-red-500">3 ❌</span>
                </td>
                <td className="py-2 pl-2 font-semibold">6</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold">Zverev</td>
                <td className="py-2 px-2">4</td>
                <td className="py-2 px-2">
                  <span className="text-green-500">1 ✅</span>
                </td>
                <td className="py-2 px-2">
                  <span className="text-red-500">3 ❌</span>
                </td>
                <td className="py-2 pl-2 font-semibold">3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
