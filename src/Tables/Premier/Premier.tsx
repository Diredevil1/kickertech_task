import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Scores {
  games: number;
  wins: number;
  draws: number;
  losses: number;
}

interface Team {
  name: string;
  scores: Scores;
}

export const Premier = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [newTeamName, setNewTeamName] = useState("");
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [homeScore, setHomeScore] = useState("");
  const [awayScore, setAwayScore] = useState("");

  const handleAddTeam = () => {
    if (
      newTeamName.trim() !== "" &&
      !teams.some((team) => team.name === newTeamName.trim())
    ) {
      const newTeam = {
        name: newTeamName.trim(),
        scores: {
          games: 0,
          wins: 0,
          draws: 0,
          losses: 0,
        },
      };
      setTeams([...teams, newTeam]);
      setNewTeamName("");
    }
  };

  const sum = (scores: Scores): number => {
    return scores.wins * 3 + scores.draws * 1 + scores.losses * 0;
  };

  const handleAddScore = () => {
    const newHomeScore = parseInt(homeScore);
    const newAwayScore = parseInt(awayScore);

    if (isNaN(newHomeScore) || isNaN(newAwayScore)) {
      alert("Please enter valid scores.");
      return;
    }

    setTeams((prevTeams) =>
      prevTeams.map((team) => {
        if (team.name === homeTeam) {
          const newGames = team.scores.games + 1;
          let newWins = team.scores.wins;
          let newDraws = team.scores.draws;
          let newLosses = team.scores.losses;

          if (newHomeScore > newAwayScore) {
            newWins++;
          } else if (newHomeScore < newAwayScore) {
            newLosses++;
          } else {
            newDraws++;
          }

          return {
            ...team,
            scores: {
              games: newGames,
              wins: newWins,
              draws: newDraws,
              losses: newLosses,
            },
          };
        } else if (team.name === awayTeam) {
          const newGames = team.scores.games + 1;
          let newWins = team.scores.wins;
          let newDraws = team.scores.draws;
          let newLosses = team.scores.losses;

          if (newAwayScore > newHomeScore) {
            newWins++;
          } else if (newAwayScore < newHomeScore) {
            newLosses++;
          } else {
            newDraws++;
          }

          return {
            ...team,
            scores: {
              games: newGames,
              wins: newWins,
              draws: newDraws,
              losses: newLosses,
            },
          };
        }
        return team;
      })
    );
    setHomeTeam("");
    setAwayTeam("");
    setHomeScore("");
    setAwayScore("");
  };

  return (
    <div className="max-w-md mx-auto my-10 bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-purple-800 text-white p-4">
        <h1 className="text-xl font-bold">Premier League</h1>
      </div>

      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <h2 className="font-bold text-lg">Add Team</h2>
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="Team Name"
              value={newTeamName}
              onChange={(e) => setNewTeamName(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <Button
              disabled={newTeamName === ""}
              onClick={handleAddTeam}
              className="px-4 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition-colors"
            >
              Add
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-lg">Add Score</h2>
          <div className="grid grid-cols-2 gap-2">
            <Select onValueChange={setHomeTeam} value={homeTeam}>
              <SelectTrigger disabled={teams.length === 0} className="w-full">
                <SelectValue placeholder="Home team" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {teams
                    .filter((team) => team.name !== awayTeam)
                    .map((team) => (
                      <SelectItem key={team.name} value={team.name}>
                        {team.name}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select onValueChange={setAwayTeam} value={awayTeam}>
              <SelectTrigger disabled={teams.length === 0} className="w-full">
                <SelectValue placeholder="Away team" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {teams
                    .filter((team) => team.name !== homeTeam)
                    .map((team) => (
                      <SelectItem key={team.name} value={team.name}>
                        {team.name}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="text"
              value={homeScore}
              onChange={(e) => setHomeScore(e.target.value)}
              placeholder="Home Score"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
              type="text"
              value={awayScore}
              onChange={(e) => setAwayScore(e.target.value)}
              placeholder="Away Score"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button
            disabled={
              !homeTeam || !awayTeam || homeScore === "" || awayScore === ""
            }
            onClick={handleAddScore}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition-colors mt-2"
          >
            Add Score
          </Button>
        </div>

        {/* Table Section */}
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
                  <td
                    colSpan={6}
                    className="py-4 px-4 text-center text-gray-500"
                  >
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
      </div>
    </div>
  );
};
