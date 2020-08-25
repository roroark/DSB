## Hanabi: A Dominant Strategy Bot for an M,N,4-Game with Non-Playable Cells
Refer to the <a href="https://en.wikipedia.org/wiki/M,n,k-game" target="_blank"> wikipedia page</a> for more information about M,N,4-Games. `index.html` is a demo hosted by GitHub Pages [here](https://roroark.github.io/Hanabi/index.html).
### The algorithm
Assign a weight to each playable cell on the board with decreasing priority for: a win, stopping an opponent's win, forking (a move leading to 2 winning moves on the next turn), preventing the opponent's fork and the number lines-of-4 possible (which makes more sense in the early game). Mark the cell with the largest weight. If there is a tie, pick randomly among them.<br><br>

<img width="302" alt="Screenshot 2020-08-25 at 9 42 18 AM" src="https://user-images.githubusercontent.com/18059416/91122210-5eacad80-e6b7-11ea-8690-8c330c4461fa.png">

<p><b>Trivia:</b> Hanabi is Japanese for 'Fireworks'. The algorithm has been named so because it traces a firework-with-8-arms shape at each cell. Should I have called it Octopus? Or Tako?</p>
