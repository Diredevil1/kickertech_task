import { useEffect, useState } from "react";
import { AddScore } from "@/components/molecules/AddScore";
import { AddTeam } from "@/components/molecules/AddTeam";
import { Table } from "@/components/molecules/Table";
import type { Team } from "../../types";

const STORAGE_KEY_TEAMS = "premier_teams";

export const Premier = () => {
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
    <div className="max-w-md min-w-sm mx-auto my-10 bg-white rounded-xl shadow-lg overflow-hidden flex-1 font-premier">
      <div className="bg-purple-800 text-white p-4">
        <h1 className="text-xl font-bold">Premier League</h1>
      </div>

      <div className="p-4 space-y-4">
        <AddTeam
          newTeamName={newTeamName}
          setNewTeamName={setNewTeamName}
          teams={teams}
          setTeams={setTeams}
        />

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
        <Table teams={teams} variant="Premier" />
      </div>
    </div>
  );
};
