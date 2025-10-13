import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import GameCard, { CardType } from "@/components/GameCard";
import PlayerHand from "@/components/PlayerHand";
import BattleArena from "@/components/BattleArena";
import ScoreBoard from "@/components/ScoreBoard";
import GameResults from "@/components/GameResults";

type GameCard = { type: CardType; played: boolean };

const INITIAL_CARDS: CardType[] = [
  "scissors", "scissors", "scissors",
  "rock", "rock", "rock",
  "paper", "paper", "paper"
];

function determineWinner(card1: CardType, card2: CardType): "player1" | "player2" | "draw" {
  if (card1 === card2) return "draw";
  
  if (
    (card1 === "scissors" && card2 === "paper") ||
    (card1 === "rock" && card2 === "scissors") ||
    (card1 === "paper" && card2 === "rock")
  ) {
    return "player1";
  }
  
  return "player2";
}

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default function Game() {
  const [player1Cards, setPlayer1Cards] = useState<GameCard[]>([]);
  const [player2Cards, setPlayer2Cards] = useState<GameCard[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const [player1PlayedCard, setPlayer1PlayedCard] = useState<CardType | null>(null);
  const [player2PlayedCard, setPlayer2PlayedCard] = useState<CardType | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [result, setResult] = useState<"player1" | "player2" | "draw" | null>(null);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const shuffledCards1 = shuffleArray(INITIAL_CARDS).map(type => ({ type, played: false }));
    const shuffledCards2 = shuffleArray(INITIAL_CARDS).map(type => ({ type, played: false }));
    
    setPlayer1Cards(shuffledCards1);
    setPlayer2Cards(shuffledCards2);
    setSelectedCard(null);
    setPlayer1PlayedCard(null);
    setPlayer2PlayedCard(null);
    setIsRevealed(false);
    setResult(null);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setCurrentRound(0);
    setGameEnded(false);
  };

  const handleCardSelect = (type: CardType) => {
    if (player1PlayedCard || isRevealed) return;
    setSelectedCard(type);
  };

  const handleConfirm = () => {
    if (!selectedCard) return;

    const availablePlayer2Cards = player2Cards.filter(c => !c.played);
    if (availablePlayer2Cards.length === 0) return;

    const randomPlayer2Card = availablePlayer2Cards[Math.floor(Math.random() * availablePlayer2Cards.length)];

    setPlayer1PlayedCard(selectedCard);
    setPlayer2PlayedCard(randomPlayer2Card.type);

    setPlayer1Cards(prev => {
      let found = false;
      return prev.map(c => {
        if (c.type === selectedCard && !c.played && !found) {
          found = true;
          return { ...c, played: true };
        }
        return c;
      });
    });
    setPlayer2Cards(prev => {
      let found = false;
      return prev.map(c => {
        if (c.type === randomPlayer2Card.type && !c.played && !found) {
          found = true;
          return { ...c, played: true };
        }
        return c;
      });
    });

    setTimeout(() => {
      setIsRevealed(true);
      const roundResult = determineWinner(selectedCard, randomPlayer2Card.type);
      setResult(roundResult);
      
      if (roundResult === "player1") {
        setPlayer1Score(prev => prev + 1);
      } else if (roundResult === "player2") {
        setPlayer2Score(prev => prev + 1);
      }
      
      setCurrentRound(prev => prev + 1);

      const newRound = currentRound + 1;
      if (newRound >= 9) {
        setTimeout(() => {
          setGameEnded(true);
        }, 2000);
      } else {
        setTimeout(() => {
          setSelectedCard(null);
          setPlayer1PlayedCard(null);
          setPlayer2PlayedCard(null);
          setIsRevealed(false);
          setResult(null);
        }, 2000);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <ScoreBoard
          player1Score={player1Score}
          player2Score={player2Score}
          currentRound={currentRound}
          totalRounds={9}
        />

        <BattleArena
          player1Card={player1PlayedCard}
          player2Card={player2PlayedCard}
          isRevealed={isRevealed}
          result={result}
        />

        <PlayerHand
          cards={player1Cards}
          selectedCard={selectedCard}
          onCardSelect={handleCardSelect}
          playerNumber={1}
        />

        <div className="flex justify-center">
          <Button
            data-testid="button-confirm-card"
            onClick={handleConfirm}
            disabled={!selectedCard || !!player1PlayedCard}
            size="lg"
            className="w-full md:w-auto px-12"
          >
            {player1PlayedCard ? "等待開牌..." : selectedCard ? "確認出牌" : "請選擇一張牌"}
          </Button>
        </div>
      </div>

      {gameEnded && (
        <GameResults
          player1Score={player1Score}
          player2Score={player2Score}
          onNewGame={initializeGame}
        />
      )}
    </div>
  );
}
