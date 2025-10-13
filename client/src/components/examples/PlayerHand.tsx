import { useState } from "react";
import PlayerHand from "../PlayerHand";
import { CardType } from "../GameCard";

export default function PlayerHandExample() {
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  
  const cards = [
    { type: "scissors" as CardType, played: false },
    { type: "scissors" as CardType, played: false },
    { type: "scissors" as CardType, played: true },
    { type: "rock" as CardType, played: false },
    { type: "rock" as CardType, played: false },
    { type: "rock" as CardType, played: false },
    { type: "paper" as CardType, played: false },
    { type: "paper" as CardType, played: true },
    { type: "paper" as CardType, played: false },
  ];

  return (
    <div className="space-y-6 p-8 bg-background">
      <PlayerHand
        cards={cards}
        selectedCard={selectedCard}
        onCardSelect={(type) => {
          setSelectedCard(type);
          console.log("Selected card:", type);
        }}
        playerNumber={1}
      />
      
      <PlayerHand
        cards={cards}
        selectedCard={null}
        onCardSelect={() => {}}
        playerNumber={2}
        isOpponent
      />
    </div>
  );
}
