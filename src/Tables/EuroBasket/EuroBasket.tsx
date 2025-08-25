import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import type { MatchHistory, Team } from "../../types";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Table } from "@/components/molecules/Table";

import { AddTeam } from "@/components/molecules/AddTeam";
import { AddScore } from "@/components/molecules/AddScore";

const STORAGE_KEY_TEAMS = "eurobasket_teams";
const STORAGE_KEY_HISTORY = "eurobasket_match_history";

export const EuroBasket = () => {
  const [teams, setTeams] = useState<Team[]>(() => {
    try {
      const storedTeams = localStorage.getItem(STORAGE_KEY_TEAMS);
      return storedTeams ? JSON.parse(storedTeams) : [];
    } catch (error) {
      console.error("Failed to load teams from localStorage", error);
      return [];
    }
  });

  const [playedMatches, setPlayedMatches] = useState<string[]>([]);
  const [newTeamName, setNewTeamName] = useState("");
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [homeScore, setHomeScore] = useState("");
  const [awayScore, setAwayScore] = useState("");
  const [matchHistory, setMatchHistory] = useState<MatchHistory[]>(() => {
    try {
      const storedHistory = localStorage.getItem(STORAGE_KEY_HISTORY);
      return storedHistory ? JSON.parse(storedHistory) : [];
    } catch (error) {
      console.error("Failed to load match history from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_TEAMS, JSON.stringify(teams));
  }, [teams]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(matchHistory));
  }, [matchHistory]);

  return (
    <div className="max-w-md min-w-sm mx-auto my-10 bg-gray-800 text-white rounded-xl shadow-lg overflow-hidden flex-1">
      <div className="flex items-center p-4">
        <span className="text-xl mr-2">🏀</span>
        <h1 className="text-xl font-bold">EUROBASKET</h1>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex justify-between space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                + Add Team
              </Button>
            </DialogTrigger>
            <DialogContent aria-describedby={undefined}>
              <DialogTitle className="sr-only">Add team</DialogTitle>
              <AddTeam
                newTeamName={newTeamName}
                setNewTeamName={setNewTeamName}
                teams={teams}
                setTeams={setTeams}
              />
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                + Add Score
              </Button>
            </DialogTrigger>
            <DialogContent aria-describedby={undefined}>
              <DialogTitle className="sr-only">Add team</DialogTitle>
              <AddScore
                setMatchHistory={setMatchHistory}
                playedMatches={playedMatches}
                setPlayedMatches={setPlayedMatches}
                teams={teams}
                setTeams={setTeams}
                setAwayScore={setAwayScore}
                setHomeScore={setHomeScore}
                setAwayTeam={setAwayTeam}
                setHomeTeam={setHomeTeam}
                homeScore={homeScore}
                homeTeam={homeTeam}
                awayScore={awayScore}
                awayTeam={awayTeam}
              />
            </DialogContent>
          </Dialog>
        </div>

        <div className="space-y-2">
          {matchHistory.map((match, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 border-b border-gray-700 font-eurobasket"
            >
              <span className="flex items-center space-x-2">
                <span>{match.homeTeamName}</span>
                <span className="text-gray-400">vs</span>
                <span>{match.awayTeamName}</span>
              </span>
              <span className="font-bold text-lg">
                {match.homeScore} - {match.awayScore}
              </span>
            </div>
          ))}
        </div>

        <Table teams={teams} variant="Eurobasket" />
      </div>
    </div>
  );
};
