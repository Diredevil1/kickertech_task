import { useState } from "react";
import { AddScore } from "@/components/molecules/AddScore";
import { AddTeam } from "@/components/molecules/AddTeam";
import { Table } from "@/components/molecules/Table";

export interface Scores {
  games: number;
  wins: number;
  draws: number;
  losses: number;
}

export interface Team {
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
  const [playedMatches, setPlayedMatches] = useState<string[]>([]);

  return (
    <div className="max-w-md mx-auto my-10 bg-white rounded-xl shadow-lg overflow-hidden">
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
        <Table teams={teams} />
      </div>
    </div>
  );
};
