//Create the Game Board
// var golem = '77';
// var 
function createGrid(response) {
	$('.griditem').remove();
	var xcount=1, ycount=1, tcount=0;
	var nrows=response.substring(0, 1); rows=nrows;
	var ncols=response.substring(1, 2); cols=ncols;
	$('be').before(response.substring(2, response.length));
	$('#gameboard').css('width',ncols*dim+1);
	$('#gameboard').css('height',nrows*dim+1);
	while (tcount<nrows*ncols) {
		$('#g' + xcount + ycount).css('left', (xcount-1) * dim);
		$('#g' + xcount + ycount).css('top', (ycount-1) * dim);
		$('#g' + xcount + ycount).css('z-index', 2);
		if (xcount==ncols) {
			ycount+=1;
			xcount=0;
		}
		xcount+=1;
		tcount+=1;
	}
	// turn = $('#pt1').val();
	// $('#turn1').css('border-left-color', "#0bb");
	// $('#turn2').css('border-left-color', "transparent");
	reform();
	if (offline_vs_AI == true && offline_AI_turn_number == 1) {
		hanabi(4);
	}
	$('.griditem').click(function() {
 		if ($(this).text()=="") {
			if ((offline_vs_AI==false || (offline_AI_turn_number == 1 && turn==$('#pt2').val()) || (offline_AI_turn_number == 2 && turn==$('#pt1').val())) && turn!="None") {
				$(this).text(turn);
			}
			if (judge(4, turn) || turn=="None") {
				//Player Win Algorithm
				turn = 'None';
			} else {
				if(turn==$('#pt1').val()) {
					$('#turn1').css('border-left-color', "transparent");
					$('#turn2').css('border-left-color', "#0bb");
					turn=$('#pt2').val();
					if (offline_vs_AI == true && offline_AI_turn_number == 2) {
						hanabi(4);
					}
				}
				else if(turn==$('#pt2').val()) {
					$('#turn1').css('border-left-color', "#0bb");
					$('#turn2').css('border-left-color', "transparent");
					turn=$('#pt1').val();
					if (offline_vs_AI == true && offline_AI_turn_number == 1) {
						hanabi(4);
					}
				}
			}
		}
 	});
	$('#gameboard').css('left', +10);
}



//Common Code : Reform a Created Grid
function reform() {
	var xcount=1, ycount=1;
	while(xcount<rows+1) {
		while(ycount<cols+1) {
			if($('#g' + xcount + ycount).attr('type')=="hide"){
				$('#g' + xcount + ycount).css('display', "none");
			}
			ycount+=1;
		}
		xcount+=1;
		ycount=1;
	}
	while(xcount<rows+1) {
		while(ycount<cols+1) {
			if($('#g' + xcount + ycount).attr('type')=="deac"){
				$('#g' + xcount + ycount).css('background', dcolor);
				$('#g' + xcount + ycount).css('z-index', "1");
			}
			ycount+=1;
		}
		xcount+=1;
		ycount=1;
	}
	console.log('Grid Reformed.');
}
function judge(lineLength, currentToken) {
	var tX = 1, tY = 1;
	while(tX<=cols) {
		while(tY<=rows) {
			//Horizontal Line
				if (tX < cols - lineLength + 2) {
					if (getText(tX, tY) == currentToken && getText(tX+1, tY) == currentToken && getText(tX+2, tY) == currentToken && getText(tX+3, tY) == currentToken) {
						enlighten(tX, tX+1, tX+2, tX+3, tY, tY, tY, tY);
						return true;
					}
				}
			//Vertical Line
				if (tY < rows - lineLength + 2) {
					if (getText(tX, tY) == currentToken && getText(tX, tY+1) == currentToken && getText(tX, tY+2) == currentToken && getText(tX, tY+3) == currentToken) {
						enlighten(tX, tX, tX, tX, tY, tY+1, tY+2, tY+3);
						return true;
					}
				}
			//Diagonal Down Line
				if (tX < cols - lineLength + 2 && tY < rows - lineLength + 2) {
					if (getText(tX, tY) == currentToken && getText(tX+1, tY+1) == currentToken && getText(tX+2, tY+2) == currentToken && getText(tX+3, tY+3) == currentToken) {
						enlighten(tX, tX+1, tX+2, tX+3, tY, tY+1, tY+2, tY+3);
						return true;
					}
				}
			//Diagonal Up Line
				if (tX < cols - lineLength + 2 && tY > lineLength - 1) {
					if (getText(tX, tY) == currentToken && getText(tX+1, tY-1) == currentToken && getText(tX+2, tY-2) == currentToken && getText(tX+3, tY-3) == currentToken) {
						enlighten(tX, tX+1, tX+2, tX+3, tY, tY-1, tY-2, tY-3);
						return true;
					}					
				}
			tY++;
		}
		tY=1;
		tX++;
	}
	return false;
}
function enlighten(x1, x2, x3, x4, y1, y2, y3, y4) {
	$('#g' + x1 + y1).css('color', "#099");
	$('#g' + x2 + y2).css('color', "#099");
	$('#g' + x3 + y3).css('color', "#099");
	$('#g' + x4 + y4).css('color', "#099");
}
function getText(x, y) {
	return $('#g' + x + y).text();
}
function getType(x, y) {
	return $('#g' + x + y).attr('type');
}
//	T3 Evolution : HANABI Artificial Intelligence Module v. 1.2.2
//	October 2014
//	Ryan Dsouza

var base = 4;
var fork = 50;
var dThreat = 2000;
var sMult = 1.7;
var eMult = 1.2;
var AI, EN;
function hanabi(lineLength) {
	var i = 1;
	var tx = 1, ty = 1, caw = 0, cbw = 0, ccw = 0, cdw = 0, cew = 0, cfw = 0, cgw = 0, chw = 0;
	//Reset Priority
	while(tx <= rows) {
		while(ty <= cols) {
			if ($('#g' + tx + ty).attr('type') == "norm" && $('#g' + tx + ty).text() == "") {
				$('#g' + tx + ty).attr('pr', 0);
			} else {
				$('#g' + tx + ty).attr('pr', -1);
			}
			ty++;
		}
		ty=1;
		tx++;
	}
	//Sweep Algorithm
	var x1, x2, x3, x4, y1, y2, y3, y4;
	while (i <= (lineLength + 1)/2) {
		tx = 1; ty = 1;
		while (tx <= cols) {
			while (ty <= rows) {
				if ($('#g' + tx + ty).attr('type') == "norm" && $('#g' + tx + ty).text() == "") {
					//Cycle A
					if (tx > lineLength - i) {
						caw = cycleCheck(tx+i-1, tx+i-2, tx+i-3, tx+i-4, ty, ty, ty, ty);
					}	
					//Cycle B
					if (tx > lineLength - i && ty > lineLength - i) {
						cbw = cycleCheck(tx+i-1, tx+i-2, tx+i-3, tx+i-4, ty+i-1, ty+i-2, ty+i-3, ty+i-4);
					}
					//Cycle C
					if (ty > lineLength - i) {
						ccw = cycleCheck(tx, tx, tx, tx, ty+i-1, ty+i-2, ty+i-3, ty+i-4);
					}
					//Cycle D
					if (ty > lineLength - i && tx < cols - lineLength + i + 1) {
						cdw = cycleCheck(tx-i+1, tx-i+2, tx-i+3, tx-i+4, ty+i-1, ty+i-2, ty+i-3, ty+i-4);
					}
					//Odd Line Half Cycle Limiter
					if (i != (lineLength + 1)/2) {
					//Cycle E
					if (tx < cols - lineLength + i + 1) {
						cew = cycleCheck(tx-i+1, tx-i+2, tx-i+3, tx-i+4, ty, ty, ty, ty);
					}
					//Cycle F
					if (tx < cols - lineLength + i + 1 && ty < rows - lineLength + i + 1) {
						cfw = cycleCheck(tx-i+1, tx-i+2, tx-i+3, tx-i+4, ty-i+1, ty-i+2, ty-i+3, ty-i+4);
					}
					//Cycle G
					if (ty < rows - lineLength + i + 1) {
						cgw = cycleCheck(tx, tx, tx, tx, ty-i+1, ty-i+2, ty-i+3, ty-i+4);
					}
					//Cycle H
					if (tx > lineLength - i && ty < rows - lineLength + i + 1) {
						chw = cycleCheck(tx+i-1, tx+i-2, tx+i-3, tx+i-4, ty-i+1, ty-i+2, ty-i+3, ty-i+4);
					}
					}
					//After all cycles
					$('#g' + tx + ty).attr('pr', parseFloat($('#g' + tx + ty).attr('pr')) + parseFloat(caw + cbw + ccw + cdw + cew + cfw + cgw + chw));
					 caw = 0; cbw = 0; ccw = 0; cdw = 0; cew = 0; cfw = 0; cgw = 0; chw = 0;
				}
				ty++;
			}
			ty=1;
			tx++;
		}
		i++;
	}
	i = 0;
	var p = new Array();
	p[0] = 11;
	tx = 1; ty = 1;
	//Prepare priority list
	while(tx <= 9) {
		while(ty <= 9) {
			if (parseFloat($('#g'+p[0]).attr('pr')) < parseFloat($('#g'+tx+ty).attr('pr'))) {
				p = new Array();
				i = 0;
				p[i] = parseInt($('#g'+tx+ty).attr('grid'));
			}
			if (parseFloat($('#g'+p[0]).attr('pr')) == parseFloat($('#g'+tx+ty).attr('pr'))) {
				i++;
				p[i] = parseInt($('#g'+tx+ty).attr('grid'));
			}
			ty++;
		}
		ty=1;
		tx++;
	}
	if (p[0] != -1) {
		var counter = 0;
		var delay = setInterval(function() {
			if (counter == 1) {
				//Fairly mark incase of tie
				$('#g'+p[parseInt((i+1)*Math.random())]).text(AI);
				//Other Events
				if (judge(4, AI)) {
					//Player Win Algorithm
					turn = 'None';
				} else {
					if (offline_AI_turn_number == 1) {
						$('#turn1').css('border-left-color', "transparent");
						$('#turn2').css('border-left-color', "#0bb");
					}
					if (offline_AI_turn_number ==2) {
						$('#turn2').css('border-left-color', "transparent");
						$('#turn1').css('border-left-color', "#0bb");
					}
					turn = EN;
				}
				counter = 0;
				clearInterval(delay);
			}
			counter++;
		}, 300);
	} else {
		if (offline_AI_turn_number == 1) {
			$('#turn1').css('border-left-color', "transparent");
			$('#turn2').css('border-left-color', "#0bb");
		}
		if (offline_AI_turn_number ==2) {
			$('#turn2').css('border-left-color', "transparent");
			$('#turn1').css('border-left-color', "#0bb");
		}
	}	
}
var cXw, q1, q2, q3, q4;
function cycleCheck(x1, x2, x3, x4, y1, y2, y3, y4) {
	if($('#g' + x1 + y1).length && $('#g' + x2 + y2).length && $('#g' + x3 + y3).length && $('#g' + x4 + y4).length) {
		q1 = $('#g' + x1 + y1).text();
		q2 = $('#g' + x2 + y2).text();
		q3 = $('#g' + x3 + y3).text();
		q4 = $('#g' + x4 + y4).text();
		if (isEmpty(q1, q2, q3, q4) && $('#g' + x1 + y1).attr('type') == "norm" && $('#g' + x2 + y2).attr('type') == "norm" && $('#g' + x3 + y3).attr('type') == "norm" && $('#g' + x4 + y4).attr('type') == "norm") {
			cXw = base;
		} else {
			if ((numberOf(q1, q2, q3, q4, EN) && numberOf(q1, q2, q3, q4, AI)) || (!($('#g' + x1 + y1).attr('type') == "norm" && $('#g' + x2 + y2).attr('type') == "norm" && $('#g' + x3 + y3).attr('type') == "norm" && $('#g' + x4 + y4).attr('type') == "norm"))) {
				cXw = 0;
			} else {
				cXw = base + eMult * numberOf(q1, q2, q3, q4, EN) + sMult * numberOf(q1, q2, q3, q4, AI);
				if (numberOf(q1, q2, q3, q4, EN) > 1) {
					cXw = eMult * fork;
				} 
				if (numberOf(q1, q2, q3, q4, AI) > 1) {
					cXw = sMult * fork;
				}
				if (numberOf(q1, q2, q3, q4, EN) > 2) {
					cXw = eMult * dThreat;
				}
				if (numberOf(q1, q2, q3, q4, AI) > 2) {
					cXw = sMult * dThreat;
				}
			}
		}
	} else {
		cXw = 0;
	}
	return cXw;
}
function isEmpty(t1, t2, t3, t4) {
	if (t1.length == 0  && t2.length == 0 && t3.length == 0 && t4.length == 0) {
		return true;
	} else {
		return false;
	}
}
function numberOf(t1, t2, t3, t4, text) {
	var count = 0;
	if (t1 == text) {
		count++;
	}
	if (t2 == text) {
		count++;
	}
	if (t3 == text) {
		count++;
	}
	if (t4 == text) {
		count++;
	}
	return count;
}