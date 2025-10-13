import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScoreBoardProps {
  player1Score: number;
  player2Score: number;
  currentRound: number;
  totalRounds: number;
  className?: string;
}

export default function ScoreBoard({
  player1Score,
  player2Score,
  currentRound,
  totalRounds,
  className,
}: ScoreBoardProps) {
  return (
    <Card data-testid="scoreboard" className={cn("p-4 md:p-6", className)}>
      <div className="flex items-center justify-between gap-4 md:gap-8">
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <h3 className="text-base md:text-lg font-semibold" data-testid="text-player-1-label">玩家 1</h3>
            {player1Score > player2Score && currentRound === totalRounds && (
              <Trophy className="w-4 h-4 md:w-5 md:h-5 text-game-win" />
            )}
          </div>
          <p
            data-testid="text-player-1-score"
            className="text-3xl md:text-5xl font-display font-bold text-player-1"
          >
            {player1Score}
          </p>
        </div>

        <div className="flex flex-col items-center gap-1 px-4 md:px-6">
          <p className="text-xs md:text-sm text-muted-foreground">回合</p>
          <p data-testid="text-round-count" className="text-xl md:text-2xl font-display font-bold">
            {currentRound}/{totalRounds}
          </p>
        </div>

        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <h3 className="text-base md:text-lg font-semibold" data-testid="text-player-2-label">玩家 2</h3>
            {player2Score > player1Score && currentRound === totalRounds && (
              <Trophy className="w-4 h-4 md:w-5 md:h-5 text-game-win" />
            )}
          </div>
          <p
            data-testid="text-player-2-score"
            className="text-3xl md:text-5xl font-display font-bold text-player-2"
          >
            {player2Score}
          </p>
        </div>
      </div>
    </Card>
  );
}
