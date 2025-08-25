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

export interface MatchHistory {
  homeTeamName: string;
  awayTeamName: string;
  homeScore: number;
  awayScore: number;
}
