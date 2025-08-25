import { type FC } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { sum } from "@/lib/utils";
import type { MatchHistory, Team } from "@/types";

interface Props {
  teams: Team[];
  setHomeTeam: React.Dispatch<React.SetStateAction<string>>;
  setAwayTeam: React.Dispatch<React.SetStateAction<string>>;
  setHomeScore: React.Dispatch<React.SetStateAction<string>>;
  setAwayScore: React.Dispatch<React.SetStateAction<string>>;
  setTeams: React.Dispatch<React.SetStateAction<Team[]>>;
  setPlayedMatches: React.Dispatch<React.SetStateAction<string[]>>;
  setMatchHistory?: React.Dispatch<React.SetStateAction<MatchHistory[]>>;
  playedMatches: string[];
  homeTeam: string;
  awayTeam: string;
  homeScore: string;
  awayScore: string;
}

export const AddScore: FC<Props> = ({
  teams,
  setAwayScore,
  setHomeScore,
  setHomeTeam,
  setAwayTeam,
  setTeams,
  setPlayedMatches,
  setMatchHistory,
  playedMatches,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
}) => {
  const handleAddScore = () => {
    if (!homeTeam || !awayTeam || homeScore === "" || awayScore === "") {
      alert("Please select both teams and enter scores.");
      return;
    }

    const newHomeScore = parseInt(homeScore);
    const newAwayScore = parseInt(awayScore);

    if (isNaN(newHomeScore) || isNaN(newAwayScore)) {
      alert("Please enter valid scores.");
      return;
    }

    const matchKey = [homeTeam, awayTeam].sort().join("-");
    if (playedMatches.includes(matchKey)) {
      alert(
        "This match has already been played. Please select different teams."
      );
      return;
    }

    const homeTeamDetails = teams.find((t) => t.name === homeTeam);
    const awayTeamDetails = teams.find((t) => t.name === awayTeam);

    if (homeTeamDetails && awayTeamDetails && setMatchHistory) {
      const newMatch: MatchHistory = {
        homeTeamName: homeTeam,
        awayTeamName: awayTeam,
        homeScore: newHomeScore,
        awayScore: newAwayScore,
      };
      setMatchHistory((prevHistory) => [newMatch, ...prevHistory]); // Add the new match to the top
    }

    setPlayedMatches([...playedMatches, matchKey]);
    setTeams((prevTeams) =>
      prevTeams.map((team) => {
        if (team.name === homeTeam) {
          const updatedScores = {
            ...team.scores,
            games: team.scores.games + 1,
          };
          if (newHomeScore > newAwayScore) {
            updatedScores.wins++;
          } else if (newHomeScore < newAwayScore) {
            updatedScores.losses++;
          } else {
            updatedScores.draws++;
          }

          return {
            ...team,
            scores: updatedScores,
            points: sum(updatedScores),
          };
        } else if (team.name === awayTeam) {
          const updatedScores = {
            ...team.scores,
            games: team.scores.games + 1,
          };
          if (newAwayScore > newHomeScore) {
            updatedScores.wins++;
          } else if (newAwayScore < newHomeScore) {
            updatedScores.losses++;
          } else {
            updatedScores.draws++;
          }
          return {
            ...team,
            scores: updatedScores,
            points: sum(updatedScores),
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
  );
};
