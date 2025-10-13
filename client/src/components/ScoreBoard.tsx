import { Card } from "@/components/ui/card";
import { Trophy, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScoreBoardProps {
  player1Stars: number;
  player2Stars: number;
  currentRound: number;
  totalRounds: number;
  className?: string;
}

export default function ScoreBoard({
  player1Stars,
  player2Stars,
  currentRound,
  totalRounds,
  className,
}: ScoreBoardProps) {
  return (
    <Card data-testid="scoreboard" className={cn("p-4 md:p-6", className)}>
      <div className="flex items-center justify-between gap-4 md:gap-8">
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <h3 className="text-base md:text-lg font-semibold" data-testid="text-player-1-label">你</h3>
            {player1Stars > player2Stars && currentRound === totalRounds && (
              <Trophy className="w-4 h-4 md:w-5 md:h-5 text-game-win" />
            )}
          </div>
          <div 
            data-testid="text-player-1-stars"
            className="flex items-center justify-center gap-1"
          >
            {Array.from({ length: player1Stars }).map((_, i) => (
              <Star 
                key={i} 
                className="w-6 h-6 md:w-8 md:h-8 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 px-4 md:px-6">
          <p className="text-xs md:text-sm text-muted-foreground">回合</p>
          <p data-testid="text-round-count" className="text-xl md:text-2xl font-display font-bold">
            {currentRound}/{totalRounds}
          </p>
        </div>

        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <h3 className="text-base md:text-lg font-semibold" data-testid="text-player-2-label">電腦</h3>
            {player2Stars > player1Stars && currentRound === totalRounds && (
              <Trophy className="w-4 h-4 md:w-5 md:h-5 text-game-win" />
            )}
          </div>
          <div
            data-testid="text-player-2-stars"
            className="flex items-center justify-center gap-1"
          >
            {Array.from({ length: player2Stars }).map((_, i) => (
              <Star 
                key={i} 
                className="w-6 h-6 md:w-8 md:h-8 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
