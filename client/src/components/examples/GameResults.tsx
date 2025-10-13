import GameResults from "../GameResults";

export default function GameResultsExample() {
  return (
    <div className="space-y-6">
      <GameResults
        player1Score={5}
        player2Score={4}
        onNewGame={() => console.log("New game started")}
      />
    </div>
  );
}
