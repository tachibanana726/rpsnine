import GameCard, { CardType } from "./GameCard";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PlayerHandProps {
  cards: { type: CardType; played: boolean }[];
  selectedCard: CardType | null;
  onCardSelect: (type: CardType) => void;
  playerNumber: 1 | 2;
  isOpponent?: boolean;
  className?: string;
}

export default function PlayerHand({
  cards,
  selectedCard,
  onCardSelect,
  playerNumber,
  isOpponent = false,
  className,
}: PlayerHandProps) {
  const playerColor = playerNumber === 1 ? "bg-player-1/10 border-player-1/30" : "bg-player-2/10 border-player-2/30";
  const playerName = isOpponent ? "電腦" : "你的手牌";

  return (
    <Card
      data-testid={`player-hand-${playerNumber}`}
      className={cn("p-4 md:p-6", playerColor, className)}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg md:text-xl font-display font-semibold" data-testid={`text-player-${playerNumber}-name`}>
          {playerName}
        </h3>
        <div className="text-sm text-muted-foreground" data-testid={`text-player-${playerNumber}-card-count`}>
          剩餘: {cards.filter(c => !c.played).length} 張
        </div>
      </div>
      
      <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
        {cards.map((card, index) => (
          <GameCard
            key={`${card.type}-${index}`}
            type={card.type}
            isSelected={!isOpponent && selectedCard === card.type && !card.played}
            isPlayed={card.played}
            onClick={!isOpponent && !card.played ? () => onCardSelect(card.type) : undefined}
            size="sm"
          />
        ))}
      </div>
    </Card>
  );
}
