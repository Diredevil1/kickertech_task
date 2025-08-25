import { sum } from "@/lib/utils";
import type { Team } from "@/Tables/Premier/Premier";

import type { FC } from "react";

interface Props {
  teams: Team[];
}

export const Table: FC<Props> = ({ teams }) => {
  return (
    <div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b-2 border-gray-200 bg-gray-100">
            <th className="py-2 px-4 font-bold">Team</th>
            <th className="py-2 px-2 font-bold">P</th>
            <th className="py-2 px-2 font-bold">W</th>
            <th className="py-2 px-2 font-bold">D</th>
            <th className="py-2 px-2 font-bold">L</th>
            <th className="py-2 pl-2 font-bold">Pts</th>
          </tr>
        </thead>
        <tbody>
          {teams.length === 0 ? (
            <tr>
              <td colSpan={6} className="py-4 px-4 text-center text-gray-500">
                No teams yet
              </td>
            </tr>
          ) : (
            [...teams]
              .sort((a, b) => sum(b.scores) - sum(a.scores))
              .map((team, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-2 px-4 font-semibold">{team.name}</td>
                  <td className="py-2 px-2">{team.scores.games}</td>
                  <td className="py-2 px-2">{team.scores.wins}</td>
                  <td className="py-2 px-2">{team.scores.draws}</td>
                  <td className="py-2 px-2">{team.scores.losses}</td>
                  <td className="py-2 pl-2 font-semibold">
                    {sum(team.scores)}
                  </td>
                </tr>
              ))
          )}
        </tbody>
      </table>
    </div>
  );
};
