<h3>Hanabi: A Dominant Strategy Bot for an M,N,4-Game with Non-Playable Cells</h3>
<p>Refer to the <a href="https://en.wikipedia.org/wiki/M,n,k-game" target="_blank"> wikipedia page</a> for more information.</p>
<big><b>To describe the functionality in one line:</b></big>
<p>Assign a weight to each playable cell on the board and mark the cell with the largest weight.</p>
<big><b>In more than one line:</b></big>
<p>The weight depends on (Increasing Priority. More weight for attacking than defending at same tier):</p>
<ul>
<li>Can you make a line-of-4 by placing a mark here? How many such lines can you make?</li>
<li>Are you 'legally connecting' with one of your previous marks? Are you 'obstructing' an effort by your opponent?</li>
<li>Can you fork from this cell? Can you block the opponent's fork?</li>
<li>Finally, does placing a mark here give me a line-of-4? Does placing a mark here stop the opponent's line-of-4?</li>
</ul>

<p><b>Note:</b> At no point has the assumption been made that the board is a rectangle. This automatically accommodates non-playable cells.</p>
