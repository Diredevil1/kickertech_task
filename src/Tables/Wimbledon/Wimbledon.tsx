import { AddScore } from "@/components/molecules/AddScore";
import { AddTeam } from "@/components/molecules/AddTeam";
import { Table } from "@/components/molecules/Table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Team } from "@/types";
import { useEffect, useState } from "react";

const STORAGE_KEY_TEAMS = "wimbledon_teams";

export const Wimbledon = () => {
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

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_TEAMS, JSON.stringify(teams));
  }, [teams]);

  return (
    <div className="max-w-md min-w-sm mx-auto my-10 bg-white rounded-xl shadow-lg overflow-hidden flex-1 font-wimbledon">
      {/* Header */}
      <div className="flex items-center p-4 bg-green-600 text-white">
        <span className="text-xl mr-2">🎾</span>
        <h1 className="text-xl font-bold">Wimbledon</h1>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex justify-between space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex-1 px-4 py-2 bg-green-800 hover:bg-green-400 text-white rounded-lg font-semibold  transition-colors">
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
              <Button className="flex-1 px-4 py-2 bg-purple-800 hover:bg-purple-400 text-white rounded-lg font-semibold  transition-colors">
                + Add Score
              </Button>
            </DialogTrigger>
            <DialogContent aria-describedby={undefined}>
              <DialogTitle className="sr-only">Add team</DialogTitle>
              <AddScore
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
        <Table variant="Wimbledon" teams={teams} />
      </div>
    </div>
  );
};
