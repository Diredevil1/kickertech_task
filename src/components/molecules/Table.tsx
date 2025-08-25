import { sum } from "@/lib/utils";
import type { Team } from "@/types";

import type { FC } from "react";

interface Props {
  teams: Team[];
  variant: "Premier" | "Eurobasket" | "Wimbledon";
}

export const Table: FC<Props> = ({ teams, variant }) => {
  const sortedTeams = [...teams].sort((a, b) => sum(b.scores) - sum(a.scores));

  const renderTableBody = () => {
    if (teams.length === 0) {
      return (
        <tr>
          <td colSpan={6} className="py-4 px-4 text-center text-gray-500">
            No teams yet
          </td>
        </tr>
      );
    }

    return sortedTeams.map((team) => (
      <tr key={team.name} className="border-b border-gray-200">
        <td className="py-2 px-4 font-semibold">{team.name}</td>
        {variant === "Premier" && (
          <>
            <td className="py-2 px-2">{team.scores.games}</td>
            <td className="py-2 px-2">{team.scores.wins}</td>
            <td className="py-2 px-2">{team.scores.draws}</td>
            <td className="py-2 px-2">{team.scores.losses}</td>
            <td className="py-2 pl-2 font-semibold">{sum(team.scores)}</td>
          </>
        )}
        {variant === "Eurobasket" && (
          <>
            <td className="py-2 px-2">{team.scores.games}</td>
            <td className="py-2 px-2">{team.scores.wins}</td>
            <td className="py-2 px-2">{team.scores.losses}</td>
            <td className="py-2 pl-2 font-semibold">{sum(team.scores)}</td>
          </>
        )}
        {variant === "Wimbledon" && (
          <>
            <td className="py-2 px-2">{team.scores.games}</td>
            <td className="py-2 px-2">{team.scores.wins}</td>
          </>
        )}
      </tr>
    ));
  };

  return (
    <div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr
            className={`border-b-2 border-gray-200 ${
              variant === "Premier" ? "bg-gray-100" : "bg-transparent"
            }`}
          >
            <th className="py-2 px-4 font-bold">Team</th>
            {variant === "Premier" && (
              <>
                <th className="py-2 px-2 font-bold">P</th>
                <th className="py-2 px-2 font-bold">W</th>
                <th className="py-2 px-2 font-bold">D</th>
                <th className="py-2 px-2 font-bold">L</th>
                <th className="py-2 pl-2 font-bold">Pts</th>
              </>
            )}
            {variant === "Eurobasket" && (
              <>
                <th className="py-2 px-2 font-bold">W</th>
                <th className="py-2 px-2 font-bold">L</th>
                <th className="py-2 px-2 font-bold">D</th>
                <th className="py-2 pl-2 font-bold">PTS</th>
              </>
            )}
            {variant === "Wimbledon" && (
              <>
                <th className="py-2 px-2 font-bold">P</th>
                <th className="py-2 px-2 font-bold">Wins</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
    </div>
  );
};
