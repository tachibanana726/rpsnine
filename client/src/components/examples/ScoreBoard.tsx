import ScoreBoard from "../ScoreBoard";

export default function ScoreBoardExample() {
  return (
    <div className="space-y-6 p-8 bg-background">
      <ScoreBoard
        player1Score={3}
        player2Score={2}
        currentRound={5}
        totalRounds={9}
      />
      
      <ScoreBoard
        player1Score={5}
        player2Score={4}
        currentRound={9}
        totalRounds={9}
      />
    </div>
  );
}
