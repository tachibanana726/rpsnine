import BattleArena from "../BattleArena";

export default function BattleArenaExample() {
  return (
    <div className="space-y-6 p-8 bg-background">
      <div>
        <p className="text-sm text-muted-foreground mb-4">等待出牌</p>
        <BattleArena
          player1Card={null}
          player2Card={null}
          isRevealed={false}
          result={null}
        />
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-4">已選擇未開牌</p>
        <BattleArena
          player1Card="scissors"
          player2Card="rock"
          isRevealed={false}
          result={null}
        />
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-4">開牌 - 玩家1贏</p>
        <BattleArena
          player1Card="scissors"
          player2Card="paper"
          isRevealed={true}
          result="player1"
        />
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-4">開牌 - 平手</p>
        <BattleArena
          player1Card="rock"
          player2Card="rock"
          isRevealed={true}
          result="draw"
        />
      </div>
    </div>
  );
}
