## Hanabi: A Dominant Strategy Bot for an M,N,4-Game with Non-Playable Cells
Refer to the <a href="https://en.wikipedia.org/wiki/M,n,k-game" target="_blank"> wikipedia page</a> for more information about M,N,4-Games. `index.html` is a demo hosted by GitHub Pages [here](https://roroark.github.io/Hanabi/index.html).
## Functionality
<big><b>In one line:</b></big><br>
Assign a weight to each playable cell on the board and mark the cell with the largest weight.<br><br>

<img width="302" alt="Screenshot 2020-08-25 at 9 42 18 AM" src="https://user-images.githubusercontent.com/18059416/91122210-5eacad80-e6b7-11ea-8690-8c330c4461fa.png">

<big><b>In more than one line:</b></big><br>
The weight depends on (In increasing priority. More weight for attacking than defending in the same tier):
<ul>
<li>Can you make a line-of-4 by placing a mark here? How many such lines can you make?</li>
<li>Are you 'legally connecting' with one of your previous marks? Are you 'obstructing' an effort by your opponent?</li>
<li>Can you fork from this cell? Can you block the opponent's fork?</li>
<li>Finally, does placing a mark here give me a line-of-4? Does placing a mark here stop the opponent's line-of-4?</li>
</ul>

<p><b>Note:</b> At no point has the assumption been made that the board is a rectangle. This automatically accommodates non-playable cells.</p>
<p><b>Trivia:</b> Hanabi is Japanese for 'Fireworks'. The algorithm has been named so because it traces a firework-with-8-arms shape at each cell. Should I have called it Octopus? Or Tako?</p>
