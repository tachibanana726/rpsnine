import GameCard, { CardType } from "./GameCard";
import { Card } from "@/components/ui/card";
import { Swords } from "lucide-react";
import { cn } from "@/lib/utils";

interface BattleArenaProps {
  player1Card: CardType | null;
  player2Card: CardType | null;
  isRevealed: boolean;
  result: "player1" | "player2" | "draw" | null;
  className?: string;
}

export default function BattleArena({
  player1Card,
  player2Card,
  isRevealed,
  result,
  className,
}: BattleArenaProps) {
  const getResultText = () => {
    if (!result) return "選擇你的牌並確認出牌";
    if (result === "draw") return "平手!";
    if (result === "player1") return "你贏了!";
    return "電腦贏了!";
  };

  const getResultColor = () => {
    if (!result) return "text-muted-foreground";
    if (result === "draw") return "text-game-draw";
    if (result === "player1") return "text-game-win";
    return "text-game-lose";
  };

  return (
    <Card data-testid="battle-arena" className={cn("p-6 md:p-8", className)}>
      <div className="flex items-center justify-center gap-4 md:gap-8 mb-6">
        <div className="flex-1 flex justify-center">
          {player1Card ? (
            <GameCard
              type={player1Card}
              isRevealed={isRevealed}
              size="lg"
            />
          ) : (
            <div className="w-32 h-44 md:w-40 md:h-56 border-2 border-dashed border-muted rounded-md flex items-center justify-center text-muted-foreground">
              <span className="text-sm">等待選擇</span>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center gap-2">
          <Swords className="w-8 h-8 md:w-12 md:h-12 text-muted-foreground" />
          <span className="text-xs md:text-sm text-muted-foreground">VS</span>
        </div>

        <div className="flex-1 flex justify-center">
          {player2Card ? (
            <GameCard
              type={player2Card}
              isRevealed={isRevealed}
              size="lg"
            />
          ) : (
            <div className="w-32 h-44 md:w-40 md:h-56 border-2 border-dashed border-muted rounded-md flex items-center justify-center text-muted-foreground">
              <span className="text-sm">等待選擇</span>
            </div>
          )}
        </div>
      </div>

      <div className="text-center">
        <p
          data-testid="text-battle-result"
          className={cn(
            "text-xl md:text-3xl font-display font-bold transition-all duration-300",
            getResultColor()
          )}
        >
          {getResultText()}
        </p>
      </div>
    </Card>
  );
}
