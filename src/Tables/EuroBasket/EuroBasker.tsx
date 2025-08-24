import { Button } from "@/components/ui/button";

export const EuroBasket = () => {
  return (
    <div className="max-w-md mx-auto my-10 bg-gray-800 text-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center p-4">
        <span className="text-xl mr-2">🏀</span>
        <h1 className="text-xl font-bold">EUROBASKET</h1>
      </div>

      <div className="p-4 space-y-4">
        {/* Buttons */}
        <div className="flex justify-between space-x-4">
          <button className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors">
            + Add Team
          </button>
          <button className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors">
            + Add Score
          </button>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center p-2 border-b border-gray-700">
            <span className="flex items-center space-x-2">
              <span className="text-lg">🇱🇹</span>
              <span>Lithuania</span>
              <span className="text-gray-400">vs</span>
              <span className="text-lg">🇪🇸</span>
              <span>Spain</span>
            </span>
            <span className="font-bold text-lg">82-77</span>
          </div>
          <div className="flex justify-between items-center p-2 border-b border-gray-700">
            <span className="flex items-center space-x-2">
              <span className="text-lg">🇫🇷</span>
              <span>France</span>
              <span className="text-gray-400">vs</span>
              <span className="text-lg">🇩🇪</span>
              <span>Germany</span>
            </span>
            <span className="font-bold text-lg">71-71</span>
          </div>
        </div>

        {/* Score Table */}
        <div>
          <h2 className="font-bold text-lg mb-2">Score Table:</h2>
          <table className="w-full text-left text-sm border-collapse">
            <thead className="text-gray-400">
              <tr className="border-b border-gray-600">
                <th className="py-2 pr-4 font-normal">Team</th>
                <th className="py-2 px-2 font-normal">W</th>
                <th className="py-2 px-2 font-normal">L</th>
                <th className="py-2 px-2 font-normal">D</th>
                <th className="py-2 pl-2 font-normal">Pts</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-2 pr-4 flex items-center space-x-2 font-semibold">
                  <span className="text-lg">🇫🇷</span>
                  <span>France</span>
                </td>
                <td className="py-2 px-2">0</td>
                <td className="py-2 px-2">0</td>
                <td className="py-2 px-2">1</td>
                <td className="py-2 pl-2 font-semibold">1</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 pr-4 flex items-center space-x-2 font-semibold">
                  <span className="text-lg">🇱🇹</span>
                  <span>Lithuania</span>
                </td>
                <td className="py-2 px-2">1</td>
                <td className="py-2 px-2">0</td>
                <td className="py-2 px-2">0</td>
                <td className="py-2 pl-2 font-semibold">3</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 pr-4 flex items-center space-x-2 font-semibold">
                  <span className="text-lg">🇪🇸</span>
                  <span>Spain</span>
                </td>
                <td className="py-2 px-2">0</td>
                <td className="py-2 px-2">1</td>
                <td className="py-2 px-2">0</td>
                <td className="py-2 pl-2 font-semibold">0</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 flex items-center space-x-2 font-semibold">
                  <span className="text-lg">🇩🇪</span>
                  <span>Germany</span>
                </td>
                <td className="py-2 px-2">0</td>
                <td className="py-2 px-2">0</td>
                <td className="py-2 px-2">1</td>
                <td className="py-2 pl-2 font-semibold">1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
