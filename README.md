# MINESWEEPER  💣 🚩

#1 in gamestack.

## Table of Contents

- [MINESWEEPER  💣 🚩](#minesweeper---)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Badges](#badges)
  - [Visuals](#visuals)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Building](#building)
  - [To do](#to-do)
  - [Support](#support)
  - [Contributing](#contributing)
  - [Authors and Acknowledgement](#authors-and-acknowledgement)
  - [License](#license)
  - [Project Status](#project-status)

## Description

This is a personal project to create a react MERN stack app which has a number of simple games. These were built with ChatGPT and trial and error.

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


## Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) 
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) 
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) 
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) 
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![FontAwesome](https://img.shields.io/badge/Font%20Awesome-538DD7.svg?style=for-the-badge&logo=Font-Awesome&logoColor=white) 
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Visuals

![minescreen3](https://github.com/sifzerda/minesweeper/assets/139626561/0d09ac37-ce4f-480c-ad35-8a1c61b1464c)
![minesweeper 5](https://github.com/sifzerda/minesweeper/assets/139626561/e1d21645-ff92-44ed-8bc4-57f8eb47ef13)

[Visit App deployed to Heroku](https://minesweeper10-611b154e8013.herokuapp.com/)

## Installation

```bash
git clone https://github.com/sifzerda/minesweeper.git
cd minesweeper
npm install
npm run start
```

## Usage

The game has 3 basic difficulty settings (‘easy’, ‘normal’, and ‘hard’) that are altered in app. 

To change the game difficulty manually, or customize difficulty, you can change:

GRID SIZE:
-         const rows = 10; const cols = 10 (change this to how big you want the grid to be)
SAFE CELL REVEAL:
-         const maxReveal: default '3', change to alter how many blocks of cells get revealed when a safe cell is clicked
MINES #:
- to edit number of mines change quantity in:
  -       const [nonBombCellsCount, setNonBombCellsCount] = useState(rows * cols - 5); <---- change the 5
  -       while (randomCells.length < 5) <----- change the 5

## Building

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

## To do

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
- [x] user can save score and view high scores through the game
- [x] user can view high scores on their profile page
- [x] point accumulation system in-play, + calc points per safe cells revealed, 
- [x] button to show high scores
- [x] if user logged in, can save high score (post to user array)
- [x] profile page where scores can be displayed
- [x] create a 'start game' landing screen with 'new game', 'set difficulty' and 'high scores' buttons
- [ ] have 8-bit chiptune stylized music play during game (with button that starts and stops music, maybe a speaker pic that gets struck through)
- [ ] volume increase/decrease for music
- [ ] play through and can play next song in list
- [ ] alter point accumulation system so time left is added to points where the less time taken = more points added
- [ ] Alternatively create a timer which counts down from e.g. 200 seconds, and adds the remaining time multiplied by 10 to score
  - [ ] May require altering models and how info is written and retrieved to user file 

## Support

For support, users can contact tydamon@hotmail.com. Links to my github and the app repo are also in the footer of the blog.

## Contributing

Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". 
1.	Fork the Project
2.	Create your Feature Branch (git checkout -b feature/NewFeature)
3.	Commit your Changes (git commit -m 'Add some NewFeature')
4.	Push to the Branch (git push origin feature/NewFeature)
5.	Open a Pull Request

## Authors and Acknowledgement

The author acknowledges and credits those who have contributed to this project. ChatGPT was used.

## License

Distributed under the MIT License. See LICENSE.txt for more information.

## Project Status

This project is completed.





















 





