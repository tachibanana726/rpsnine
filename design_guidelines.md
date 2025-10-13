# Rock-Paper-Scissors Card Game - Design Guidelines

## Design Approach: Reference-Based Gaming UI
Drawing inspiration from modern digital card games (Hearthstone, Clash Royale) combined with clean Japanese game aesthetics for this traditional game. Focus on playful yet sophisticated visual design that makes the game feel premium despite its simplicity.

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary):**
- Background: 220 20% 12% (deep navy-gray)
- Surface: 220 18% 18% (card backgrounds)
- Primary: 200 95% 55% (bright cyan for player 1)
- Secondary: 340 90% 60% (vibrant pink for player 2)
- Success: 142 76% 45% (win state)
- Warning: 45 93% 55% (draw state)
- Danger: 0 84% 60% (lose state)

**Card-Specific Colors:**
- Scissors: 260 65% 60% (purple accent)
- Rock: 30 60% 55% (warm brown)
- Paper: 200 70% 60% (cool blue)

### B. Typography
- Primary: "Inter" (Google Fonts) - Clean, modern, excellent for UI
- Display: "Fredoka" (Google Fonts) - Playful for game elements, scores
- Weights: 400 (regular), 600 (semibold), 700 (bold)
- Scale: text-sm for labels, text-base for body, text-2xl/3xl for scores, text-4xl+ for results

### C. Layout System
- Spacing: Tailwind units 2, 4, 6, 8, 12, 16, 20 (p-4, m-8, gap-6)
- Container: max-w-7xl centered with px-4/6
- Game Area: max-w-6xl for optimal card visibility
- Card Grid: Responsive flex/grid with gap-4

### D. Component Library

**1. Game Cards (Core Element):**
- Size: w-24 h-32 on mobile, w-32 h-44 on desktop
- Shape: Rounded-2xl with subtle shadow-xl
- States: 
  - Unplayed: Full opacity with hover:scale-105 transform
  - Selected: ring-4 ring-primary with translate-y-[-8px]
  - Played: opacity-40 grayscale with slash through
- Card Face: Large centered icon (scissors/rock/paper) using Heroicons
- Back Design: Gradient pattern with game logo/icon

**2. Battle Arena:**
- Center stage for card reveals
- Split design: Player 1 left (cyan theme) | VS indicator center | Player 2 right (pink theme)
- Animated card flip reveal (transform rotateY)
- Result indicator with color-coded outcome (win/lose/draw)

**3. Score Display:**
- Fixed top bar: Player names, current score, round counter
- Large readable numbers using Fredoka font
- Visual win indicators (crown icons, streak badges)

**4. Hand Management:**
- Bottom area for player's cards
- Horizontal scrollable on mobile, full spread on desktop
- Clear visual separation between available and used cards

**5. Game Controls:**
- "Confirm Selection" button: Large, primary colored, disabled until card selected
- "New Game" button after completion
- Round history sidebar (optional, collapsible)

**6. Results Screen:**
- Full-screen overlay with backdrop blur
- Large winner announcement with confetti animation (canvas-confetti library)
- Final score breakdown
- Rematch button prominent

### E. Animations & Interactions

**Card Interactions:**
- Select: spring animation (scale + translate)
- Reveal: 3D flip transform (500ms duration)
- Win/Lose: Pulse animation on winner, shake on loser

**Transitions:**
- Page transitions: fade + slide (300ms)
- Card movements: transform with ease-out (200ms)
- Score updates: count-up animation with number morphing

**Visual Effects:**
- Particle effects on win using lightweight particles library
- Glow effects on selected cards (box-shadow with primary color)
- Smooth color transitions for state changes

## Game-Specific Features

**Visual Feedback System:**
- Color-coded rounds: Each battle outcome gets colored border (green win, red lose, yellow draw)
- Card strength indicators: Subtle glow/border when card would win against last opponent card
- Turn timer: Circular progress indicator (optional)

**Accessibility:**
- High contrast between card types
- Clear iconography (scissors ✂️, rock 🪨, paper 📄)
- Screen reader labels for all game states
- Keyboard navigation: Tab through cards, Enter to select/confirm

**Responsive Strategy:**
- Mobile (<768px): Vertical layout, cards stacked, larger touch targets
- Desktop (≥768px): Horizontal battlefield, side-by-side players
- Card sizes scale proportionally: text-base on mobile → text-lg on desktop

## Visual Hierarchy
1. **Primary Focus:** Selected cards + battle arena (highest contrast, largest size)
2. **Secondary:** Available hand cards (medium prominence)
3. **Tertiary:** Score, used cards, controls (supporting elements)

## Layout Structure
```
┌─────────────────────────────────────┐
│  Score Bar (Player 1 | Round | P2)  │
├─────────────────────────────────────┤
│                                     │
│         Battle Arena                │
│   [P1 Card] [VS] [P2 Card]         │
│                                     │
├─────────────────────────────────────┤
│  Player 1 Hand (bottom)             │
│  [💜] [🟤] [🔵] [💜] [🟤]...       │
└─────────────────────────────────────┘
```

**No Images Needed:** This game relies on iconography and solid color design rather than photographic imagery. All visual elements are icon-based using Heroicons for scissors/rock/paper symbols.