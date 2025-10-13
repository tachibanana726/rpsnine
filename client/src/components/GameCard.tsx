import { Scissors, Hand, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type CardType = "scissors" | "rock" | "paper";

interface GameCardProps {
  type: CardType;
  isSelected?: boolean;
  isPlayed?: boolean;
  isRevealed?: boolean;
  showIcon?: boolean;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const cardIcons = {
  scissors: Scissors,
  rock: Hand,
  paper: FileText,
};

const cardColors = {
  scissors: "bg-card-scissors text-card-scissors-foreground",
  rock: "bg-card-rock text-card-rock-foreground",
  paper: "bg-card-paper text-card-paper-foreground",
};

const cardSizes = {
  sm: "w-20 h-28",
  md: "w-24 h-32 md:w-32 md:h-44",
  lg: "w-32 h-44 md:w-40 md:h-56",
};

export default function GameCard({
  type,
  isSelected = false,
  isPlayed = false,
  isRevealed = false,
  showIcon = true,
  onClick,
  size = "md",
  className,
}: GameCardProps) {
  const Icon = cardIcons[type];
  const isClickable = !isPlayed && onClick;

  return (
    <Card
      data-testid={`card-${type}${isSelected ? "-selected" : ""}${isPlayed ? "-played" : ""}`}
      className={cn(
        "relative flex items-center justify-center transition-all duration-200 cursor-pointer select-none",
        cardSizes[size],
        isClickable && "hover-elevate active-elevate-2",
        isSelected && "ring-4 ring-primary -translate-y-2 shadow-xl",
        isPlayed && !isRevealed && "opacity-40 grayscale cursor-not-allowed",
        isRevealed && cardColors[type],
        !isRevealed && !isPlayed && "bg-card border-2",
        className
      )}
      onClick={isClickable ? onClick : undefined}
    >
      {showIcon ? (
        <Icon className={cn(
          "w-12 h-12 md:w-16 md:h-16",
          size === "sm" && "w-8 h-8",
          isRevealed && "transition-transform duration-300"
        )} />
      ) : (
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary/20" />
          <div className="w-12 h-2 md:w-16 md:h-3 rounded bg-primary/20" />
        </div>
      )}
      {isPlayed && !isRevealed && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-0.5 bg-foreground/30 rotate-45" />
        </div>
      )}
    </Card>
  );
}
