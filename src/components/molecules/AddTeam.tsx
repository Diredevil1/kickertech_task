import type { FC } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import type { Team } from "@/Tables/Premier/Premier";

interface Props {
  teams: Team[];
  setTeams: React.Dispatch<React.SetStateAction<Team[]>>;
  setNewTeamName: React.Dispatch<React.SetStateAction<string>>;
  newTeamName: string;
}

export const AddTeam: FC<Props> = ({
  teams,
  newTeamName,
  setTeams,
  setNewTeamName,
}) => {
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

  return (
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
  );
};
