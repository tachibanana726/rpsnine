import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Sparkles, RotateCcw, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface GameResultsProps {
  player1Stars: number;
  player2Stars: number;
  onNewGame: () => void;
  className?: string;
}

export default function GameResults({
  player1Stars,
  player2Stars,
  onNewGame,
  className,
}: GameResultsProps) {
  const winner = player1Stars > player2Stars ? "player1" : player1Stars < player2Stars ? "player2" : "draw";
  
  const getTitle = () => {
    if (winner === "draw") return "平手!";
    if (winner === "player1") return "你贏了!";
    return "電腦贏了!";
  };

  const getTitleColor = () => {
    if (winner === "draw") return "text-game-draw";
    if (winner === "player1") return "text-game-win";
    return "text-game-lose";
  };

  return (
    <div className={cn("fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4", className)}>
      <Card data-testid="game-results" className="max-w-md w-full p-8 md:p-12 text-center space-y-6">
        <div className="flex justify-center">
          {winner === "draw" ? (
            <Sparkles className="w-16 h-16 md:w-20 md:h-20 text-game-draw" />
          ) : (
            <Trophy className="w-16 h-16 md:w-20 md:h-20 text-game-win" />
          )}
        </div>

        <div>
          <h2
            data-testid="text-game-result"
            className={cn(
              "text-4xl md:text-5xl font-display font-bold mb-4",
              getTitleColor()
            )}
          >
            {getTitle()}
          </h2>
          <p className="text-muted-foreground">遊戲結束</p>
        </div>

        <div className="flex justify-center gap-8 py-6">
          <div>
            <p className="text-sm text-muted-foreground mb-3">你</p>
            <div 
              data-testid="text-final-player-1-stars" 
              className="flex items-center justify-center gap-1"
            >
              {Array.from({ length: player1Stars }).map((_, i) => (
                <Star 
                  key={i} 
                  className="w-7 h-7 md:w-9 md:h-9 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
          <div className="flex items-center text-2xl text-muted-foreground">
            -
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-3">電腦</p>
            <div 
              data-testid="text-final-player-2-stars"
              className="flex items-center justify-center gap-1"
            >
              {Array.from({ length: player2Stars }).map((_, i) => (
                <Star 
                  key={i} 
                  className="w-7 h-7 md:w-9 md:h-9 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
        </div>

        <Button
          data-testid="button-new-game"
          onClick={onNewGame}
          size="lg"
          className="w-full"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          再玩一次
        </Button>
      </Card>
    </div>
  );
}
