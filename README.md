# Minesweeper

This is a personal project to create a react MERN stack app which has a number of simple games. These were built from scratch (i.e. no code derived from elsewhere) with ChatGPT help. 

Games:
- [x] Minesweeper
- [ ] Solitaire
- [ ] Chess - would need an AI PC opponent
- [ ] Poker
- [ ] Slot Machine
- [ ] Pacman
- [ ] Frogger
- [ ] Flyswatting game
- [ ] Bad Toys 
- [ ] SideShow shooting gallery
- [ ] Go Fish, Uno, etc (would need AI PC opponent)


Others:

- solitaire
- chess
- poker
- slot machine
  - This would require points from other games to pay to play
- 'bad toys' type simple shooting game with reticule/flashpoint, 
  - Or sideshow type shooting gallery
- fly swat type game, 'gun' is a flyswatter
- pacman
- frogger

- pool (?)
- pinball (?)

Optional:
- type of virtual reward shop where you trade points for virtual stuff, e.g. user avatars, 'trophies'

# INDEX

# Minesweeper
# Solitaire
#
#
#

# MINESWEEPER 💣 🚩

Difficulty:

To change difficulty inside the game, you can change:
- GRID SIZE:
-         const rows = 10; const cols = 10 (change this to how big you want the grid to be)
- SAFE CELL REVEAL:
-         const maxReveal: default '3', change to alter how many blocks of cells get revealed when a safe cell is clicked
- MINE #:
- to edit number of mines change quantity in:
  -       const [nonBombCellsCount, setNonBombCellsCount] = useState(rows * cols - 5); <---- change the 5
  -       while (randomCells.length < 5) <----- change the 5


## Steps to creating Minesweeper:

1. <u>'const Grid'</u>: Create 5 x 5 grid
2. <u>'const generateInitialGrid'</u>: Give every cell a unique numerical id (in 5x5 from 1 - 25) displayed on each cell
3. <u>'const handleClick'</u>: Make every cell an event listener/clickable
4. <u>'const generateNewGrid'</u>: Make 3 random cells display 'X' instead of their numerical id (these will be the mines)
5. <u>'const updateAdjacentCells'</u>: Iterate through cell array again, check which # cell ids contain 'X's and attach an 'a' to cells that are X+1 or X-1 (e.g. if X is 15, then cells 14 and 16 will become 14a and 16a) these will be numerical 'proximity cells' 
   1. If cell is adjacent to two X/mines it will get two 'a's, i.e. 3 becomes 3aa
6. <u>'const updateAdjacentCells'</u>: For diagonal proximity cells
   1. Create diagonal relations  between cells and modify cell id based on diagonal link:
   -   ↖️ ⬆️ ↗️
   -   ⬅️ 💣 ➡️
   -   ↙️ ⬇️ ↘️
   -   All above directional cells will get update of proximity values once mines are randomly inserted into grid
7. <u>'const handleClick'</u>: check which cells hold 'X's (mines) and switch the X to a 💣 if clicked
8. <u>'const nonBombCells'</u>: Create a constant that holds all cells minus the X/mine cells 
9.  <u>' setTimeout ' </u>: create an alert one clicking a mine creating 'game over screen' and game restarts
10. <u>'const handleClick'</u>: if one mine cell is clicked, all mine cells are revealed
11. <u>'generateInitialGrid' [...] content: '' revealed: false:</u>cells blank and unclicked at game start, <u>newGrid[rowIndex][colIndex].revealed = true:</u> once clicked, cell reveals proximity value

## TO DO: 

- [x] Grid
- [x] Event listening
- [x] Mines
- [x] Proximity dynamic
- [x] Remove Xs from mine cells
- [x] Clicking a mine = game over
- [x] Remove id visibility, switch to single number
- [x] non value cells (currently blank) update with styling change when clicked
- [x] blocks of non value cells get selected if one is 
- [x] CSS styling (bomb cell red, button depressed)
- [x] 3 difficulties, or difficulty options:
  - mimic actual game difficulty options 
  - grid size
  - mine number
  - probably adjusted by user through radio switch (if 'easy' then render game with 6x6 and xx # bombs etc)
- [x] right click applies flag, another removes flag
- [x] win alert triggers when all cells (minus bomb cells) have been revealed
- [ ] user can save score and view high scores through the game
- [ ] user can view high scores on their profile page

# SOLITAIRE ♤ ♡ ♢ ♧ 

Parts of the game:
- Tableau: Main game cards in 7 cols, card number = col number
- Stock Pile: Remainder cards not in Tableau, cycles
- Foundations: 4 places where cards stack by suit 

(ONE) STOCKPILE COMPONENT
- make twin boxes (box 1 = facedown card stack, box 2 = face up card cycle)
- make box 1 an event listener, on-click box 2 cycles through max 52 values (i.e. click counter reset at 52)
- 


(TWO) FOUNDATIONS COMPONENT

- create 4 boxes which cards will go into
- configure to only accept ace cards
  - configure to only accept a 1 card if an ace present
    - configure 1s to accept only 2s
      - " " 2s to only accept 3s
        - " " 3s to only accept 4s
          - ["..."] queens to only accept kings

(THREE) TABLEAU

- 



Components:

SolitaireGame (Main Component):

Manages the overall state of the game.
Renders the tableau, foundations, and stock pile.
Tableau:

Represents the main playing area where cards are laid out in columns.
Contains multiple TableauColumn components.
TableauColumn:

Represents a single column in the tableau.
Can contain multiple Card components.
Foundations:

Represents the foundation piles where cards are built up by suit.
FoundationPile:

Represents a single foundation pile.
Can contain multiple Card components.
StockPile:

Represents the stock pile from which cards are drawn.
Can be clicked to draw cards into the waste pile.
Card:

Represents a single playing card.
Displays the card's suit, rank, and face status (face up or face down).


## FOR ALL GAMES
- [ ] point accumulation system in-play, + calc points per safe cells revealed, 
- [ ] button to show high scores
- [ ] if user logged in, can save high score (post to user array)
- [ ] profile page where scores can be displayed
- [ ] create a 'start game' landing screen with 'new game', 'set difficulty' and 'high scores' buttons
- [ ] have 8-bit chiptune stylized music play during game (with button that starts and stops music, maybe a speaker pic that gets struck through)
- [ ] volume increase/decrease for music
- [ ] play through DL (self-titled, FN, RO) albums as 8-bit, and can play next song in list