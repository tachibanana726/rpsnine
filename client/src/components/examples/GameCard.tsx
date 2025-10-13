import GameCard from "../GameCard";

export default function GameCardExample() {
  return (
    <div className="flex flex-wrap gap-6 p-8 bg-background">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Unplayed</p>
        <div className="flex gap-4">
          <GameCard type="scissors" />
          <GameCard type="rock" />
          <GameCard type="paper" />
        </div>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Selected</p>
        <div className="flex gap-4">
          <GameCard type="scissors" isSelected />
        </div>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Revealed</p>
        <div className="flex gap-4">
          <GameCard type="scissors" isRevealed />
          <GameCard type="rock" isRevealed />
          <GameCard type="paper" isRevealed />
        </div>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Played (Used)</p>
        <div className="flex gap-4">
          <GameCard type="scissors" isPlayed />
          <GameCard type="rock" isPlayed />
        </div>
      </div>
    </div>
  );
}
