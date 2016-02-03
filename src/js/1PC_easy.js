var canvas = document.getElementById('gameSpace'); // fetching canvas as a variable
var context = canvas.getContext('2d'); // everything is drawn using context
var counter = 0;
var oncewin = false;
var sum = 0;

context.beginPath();
context.rect(0,0,300,300);
context.fillStyle = "#606060";
context.fill();
context.closePath();

context.beginPath();
context.moveTo(100,0);
context.lineTo(100,300);
context.lineWidth = "8";
context.stroke();
context.strokeStyle = "#101010";
context.moveTo(200,0);
context.lineTo(200,300);
context.lineWidth = "8";
context.stroke();
context.strokeStyle = "#101010";
context.moveTo(0,100);
context.lineTo(300,100);
context.lineWidth = "8";
context.stroke();
context.strokeStyle = "#101010";
context.moveTo(0,200);
context.lineTo(300,200);
context.lineWidth = "8";
context.stroke();
context.strokeStyle = "#101010";
context.closePath();
window.onload=function()
{
	alert("I start first with my favourite 'O'. Try beatin' me!");
}

var a = new Array(3);
for(var i=0;i<3;i++)
{
	a[i] = new Array(3);
}

for (var i=0;i<3;i++)
{
	for (var j=0;j<3;j++)
	{
		a[i][j]=0;
	}
}

canvas.addEventListener("click",clicker);

firstturn();

function firstturn()
{
	var delay=600; //.6 seconds

	setTimeout(function()
	{
		counter+=1;
		a[0][0]++;
		context.font = "90px Verdana";
		context.fillStyle = "#ff0000";
		context.fillText("O",15,80);		
 	}, delay); 
}

function makeOwn()
{
	context.font = "90px Verdana";
	context.fillStyle = "#ff0000";

	if (a[0][0]==a[0][1] && a[0][0]==1 && a[0][2]==0)
	{
		a[0][2]++;
		counter++;
		context.fillText("O",215,80);
	}//1

	else if (a[0][1]==a[0][2] && a[0][1]==1 && a[0][0]==0)
	{
		a[0][0]++;
		counter++;
		context.fillText("O",15,80);
	}//2

	else if (a[0][0]==a[0][2] && a[0][0]==1 && a[0][1]==0)
	{
		a[0][1]++;
		counter++;
		context.fillText("O",115,80);
	}//3

	else if (a[1][0]==a[1][1] && a[1][0]==1 && a[1][2]==0)
	{
		a[1][2]++;
		counter++;
		context.fillText("O",215,180);
	}//4

	else if (a[1][1]==a[1][2] && a[1][1]==1 && a[1][0]==0)
	{
		a[1][0]++;
		counter++;
		context.fillText("O",15,180);
	}//5

	else if (a[1][0]==a[1][2] && a[1][0]==1 && a[1][1]==0)
	{
		a[1][1]++;
		counter++;
		context.fillText("O",115,180);
	}//6

	else if (a[2][0]==a[2][1] && a[2][0]==1 && a[2][2]==0)
	{
		a[2][2]++;
		counter++;
		context.fillText("O",215,280);
	}//7

	else if (a[2][1]==a[2][2] && a[2][1]==1 && a[2][0]==0)
	{
		a[2][0]++;
		counter++;
		context.fillText("O",15,280);
	}//8

	else if (a[2][0]==a[2][2] && a[2][0]==1 && a[2][1]==0)
	{
		a[2][1]++;
		counter++;
		context.fillText("O",115,280);
	}//9

	else if (a[0][0]==a[1][0] && a[0][0]==1 && a[2][0]==0)
	{
		a[2][0]++;
		counter++;
		context.fillText("O",15,280);
	}//10

	else if (a[1][0]==a[2][0] && a[1][0]==1 && a[0][0]==0)
	{
		a[0][0]++;
		counter++;
		context.fillText("O",15,80);
	}//11

	else if (a[0][0]==a[2][0] && a[0][0]==1 && a[1][0]==0)
	{
		a[1][0]++;
		counter++;
		context.fillText("O",15,180);
	}//12

	else if (a[0][1]==a[1][1] && a[0][1]==1 && a[2][1]==0)
	{
		a[2][1]++;
		counter++;
		context.fillText("O",115,280);
	}//13

	else if (a[1][1]==a[2][1] && a[1][1]==1 && a[0][1]==0)
	{
		a[0][1]++;
		counter++;
		context.fillText("O",115,80);
	}//14

	else if (a[0][1]==a[2][1] && a[0][1]==1 && a[1][1]==0)
	{
		a[1][1]++;
		counter++;
		context.fillText("O",115,180);
	}//15

	else if (a[0][2]==a[1][2] && a[0][2]==1 && a[2][2]==0)
	{
		a[2][2]++;
		counter++;
		context.fillText("O",215,280);
	}//16

	else if (a[1][2]==a[2][2] && a[1][2]==1 && a[0][2]==0)
	{
		a[0][2]++;
		counter++;
		context.fillText("O",215,80);
	}//17

	else if (a[0][2]==a[2][2] && a[0][2]==1 && a[1][2]==0)
	{
		a[1][2]++;
		counter++;
		context.fillText("O",215,180);
	}//18

	else if (a[0][0]==a[1][1] && a[0][0]==1 && a[2][2]==0)
	{
		a[2][2]++;
		counter++;
		context.fillText("O",215,280);
	}//19

	else if (a[1][1]==a[2][2] && a[1][1]==1 && a[0][0]==0)
	{
		a[0][0]++;
		counter++;
		context.fillText("O",15,80);
	}//20

	else if (a[0][0]==a[2][2] && a[0][0]==1 && a[1][1]==0)
	{
		a[1][1]++;
		counter++;
		context.fillText("O",115,180);
	}//21

	else if (a[0][2]==a[1][1] && a[0][2]==1 && a[2][0]==0)
	{
		a[2][0]++;
		counter++;
		context.fillText("O",15,280);
	}//22

	else if (a[1][1]==a[2][0] && a[1][1]==1 && a[0][2]==0)
	{
		a[0][2]++;
		counter++;
		context.fillText("O",215,80);
	}//23

	else if (a[0][2]==a[2][0] && a[0][2]==1 && a[1][1]==0)
	{
		a[1][1]++;
		counter++;
		context.fillText("O",115,180);
	}//24

	else
	{
		prevent();
	}			
}

function prevent()
{
	context.font = "90px Verdana";
	context.fillStyle = "#ff0000";

	if (a[0][0]==a[0][1] && a[0][0]==2 && a[0][2]==0)
	{
		a[0][2]++;
		counter++;
		context.fillText("O",215,80);
	}//1

	else if (a[0][1]==a[0][2] && a[0][1]==2 && a[0][0]==0)
	{
		a[0][0]++;
		counter++;
		context.fillText("O",15,80);
	}//2

	else if (a[0][0]==a[0][2] && a[0][0]==2 && a[0][1]==0)
	{
		a[0][1]++;
		counter++;
		context.fillText("O",115,80);
	}//3

	else if (a[1][0]==a[1][1] && a[1][0]==2 && a[1][2]==0)
	{
		a[1][2]++;
		counter++;
		context.fillText("O",215,180);
	}//4

	else if (a[1][1]==a[1][2] && a[1][1]==2 && a[1][0]==0)
	{
		a[1][0]++;
		counter++;
		context.fillText("O",15,180);
	}//5

	else if (a[1][0]==a[1][2] && a[1][0]==2 && a[1][1]==0)
	{
		a[1][1]++;
		counter++;
		context.fillText("O",115,180);
	}//6

	else if (a[2][0]==a[2][1] && a[2][0]==2 && a[2][2]==0)
	{
		a[2][2]++;
		counter++;
		context.fillText("O",215,280);
	}//7

	else if (a[2][1]==a[2][2] && a[2][1]==2 && a[2][0]==0)
	{
		a[2][0]++;
		counter++;
		context.fillText("O",15,280);
	}//8

	else if (a[2][0]==a[2][2] && a[2][0]==2 && a[2][1]==0)
	{
		a[2][1]++;
		counter++;
		context.fillText("O",115,280);
	}//9

	else if (a[0][0]==a[1][0] && a[0][0]==2 && a[2][0]==0)
	{
		a[2][0]++;
		counter++;
		context.fillText("O",15,280);
	}//10

	else if (a[1][0]==a[2][0] && a[1][0]==2 && a[0][0]==0)
	{
		a[0][0]++;
		counter++;
		context.fillText("O",15,80);
	}//11

	else if (a[0][0]==a[2][0] && a[0][0]==2 && a[1][0]==0)
	{
		a[1][0]++;
		counter++;
		context.fillText("O",15,180);
	}//12

	else if (a[0][1]==a[1][1] && a[0][1]==2 && a[2][1]==0)
	{
		a[2][1]++;
		counter++;
		context.fillText("O",115,280);
	}//13

	else if (a[1][1]==a[2][1] && a[1][1]==2 && a[0][1]==0)
	{
		a[0][1]++;
		counter++;
		context.fillText("O",115,80);
	}//14

	else if (a[0][1]==a[2][1] && a[0][1]==2 && a[1][1]==0)
	{
		a[1][1]++;
		counter++;
		context.fillText("O",115,180);
	}//15

	else if (a[0][2]==a[1][2] && a[0][2]==2 && a[2][2]==0)
	{
		a[2][2]++;
		counter++;
		context.fillText("O",215,280);
	}//16

	else if (a[1][2]==a[2][2] && a[1][2]==2 && a[0][2]==0)
	{
		a[0][2]++;
		counter++;
		context.fillText("O",215,80);
	}//17

	else if (a[0][2]==a[2][2] && a[0][2]==2 && a[1][2]==0)
	{
		a[1][2]++;
		counter++;
		context.fillText("O",215,180);
	}//18

	else if (a[0][0]==a[1][1] && a[0][0]==2 && a[2][2]==0)
	{
		a[2][2]++;
		counter++;
		context.fillText("O",215,280);
	}//19

	else if (a[1][1]==a[2][2] && a[1][1]==2 && a[0][0]==0)
	{
		a[0][0]++;
		counter++;
		context.fillText("O",15,80);
	}//20

	else if (a[0][0]==a[2][2] && a[0][0]==2 && a[1][1]==0)
	{
		a[1][1]++;
		counter++;
		context.fillText("O",115,180);
	}//21

	else if (a[0][2]==a[1][1] && a[0][2]==2 && a[2][0]==0)
	{
		a[2][0]++;
		counter++;
		context.fillText("O",15,280);
	}//22

	else if (a[1][1]==a[2][0] && a[1][1]==2 && a[0][2]==0)
	{
		a[0][2]++;
		counter++;
		context.fillText("O",215,80);
	}//23

	else if (a[0][2]==a[2][0] && a[0][2]==2 && a[1][1]==0)
	{
		a[1][1]++;
		counter++;
		context.fillText("O",115,180);
	}//24

	else
	{
		randomMove();
	}	
}

function randomMove()
{
	for(var i=0;i<3;i++)
	{
		for (var j=0;j<3;j++)
		{
			if (a[i][j]==0)
			{
				a[i][j]++;
				counter++;
				context.fillText("O",(15+(j*100)),(80+(i*100)));
				i=3;
				j=3;
			}
		}
	}
}

function clicker (event)
{
	if (oncewin==false && counter%2!=0)
	{
		var rect = canvas.getBoundingClientRect();
		var cx = event.clientX - rect.left;
		var cy = event.clientY - rect.top;

		context.font = "90px Verdana";
		context.fillStyle = "#ff0000";

		if (cx<100 && cx>0)
		{
			if (cy>0 && cy<100 && a[0][0]==0)
			{
				counter  += 1;
				a[0][0]++;
				if (counter%2==0)
				{
					context.fillText("X",15,80);
					a[0][0]++;
				}
				else
				{
					context.fillText("O",15,80);
				}

			}
			if (cy>100 && cy<200 && a[1][0]==0)
			{
				counter  += 1;
				a[1][0]++;
				if (counter%2==0)
				{
					context.fillText("X",15,180);
					a[1][0]++;
				}
				else
					context.fillText("O",15,180);
			}
			if (cy>200 && cy<300 && a[2][0]==0)
			{
				counter  += 1;
				a[2][0]++;
				if (counter%2==0)
				{
					context.fillText("X",15,280);
					a[2][0]++;
				}
				else
					context.fillText("O",15,280);
			}
		}

		if (cx<200 && cx>100)
		{
			if (cy>0 && cy<100 && a[0][1]==0)
			{
				counter  += 1;
				a[0][1]++;
				if (counter%2==0)
				{
					context.fillText("X",115,80);
					a[0][1]++;
				}
				else
					context.fillText("O",115,80);
			}
			if (cy>100 && cy<200 && a[1][1]==0)
			{
				counter  += 1;
				a[1][1]++;
				if (counter%2==0)
				{
					context.fillText("X",115,180);
					a[1][1]++;
				}
				else
					context.fillText("O",115,180);
			}
			if (cy>200 && cy<300  && a[2][1]==0)
			{
				counter  += 1;
				a[2][1]++;
				if (counter%2==0)
				{
					context.fillText("X",115,280);
					a[2][1]++;
				}
				else
					context.fillText("O",115,280);
			}
		}

		if (cx<300 && cx >200)
		{
			if (cy>0 && cy<100 && a[0][2]==0)
			{
				counter  += 1;
				a[0][2]++;
				if (counter%2==0)
				{
					context.fillText("X",215,80);
					a[0][2]++;
				}
				else
					context.fillText("O",215,80);
			}
			if (cy>100 && cy<200 && a[1][2]==0)
			{
				counter  += 1;
				a[1][2]++;
				if (counter%2==0)
				{
					context.fillText("X",215,180);
					a[1][2]++;
				}
				else
					context.fillText("O",215,180);
			}
			if (cy>200 && cy<300 && a[2][2]==0)
			{
				counter  += 1;
				a[2][2]++;
				if (counter%2==0)
				{
					context.fillText("X",215,280);
					a[2][2]++;
				}
				else
					context.fillText("O",215,280);
			}
		}
		check();
		sum = 0;
		for (var i=0;i<3;i++)
		{
			for (var j=0;j<3;j++)
			{
				sum+=a[i][j];
			}
		}

		if (!oncewin)
		{
			makeOwn();
		}
		check();
	}
}

function check(event)
{
	if (!oncewin)
	{
		var bool = false;
		if (a[0][0]==a[0][1] && a[0][1]==a[0][2])
		{
			if (a[0][0]==1)
			{
				alert("You Lose!");
				bool = true;  
				oncewin = true;
			}
			else if(a[0][0]==2)
			{
				alert("You Win!");
				bool = true;
				oncewin = true;
			}
		}

		if (a[1][0]==a[1][1] && a[1][1]==a[1][2])
		{
			if (a[1][0]==1)
			{
				alert("You Lose!");
				bool = true;
				oncewin = true;
			}
			else if(a[1][0]==2)
			{
				alert("You Win!");
				bool = true; 
				oncewin = true;
			}
		}

		if (a[2][0]==a[2][1] && a[2][1]==a[2][2])
		{
			if (a[2][0]==1)
			{
				alert("You Lose!");
				bool = true; 
				oncewin = true;
			}
			else if(a[2][0]==2)
			{
				alert("You Win!");
				bool = true; 
				oncewin = true;
			}
		}

		if (a[0][0]==a[1][0] && a[1][0]==a[2][0])
		{
			if (a[0][0]==1)
			{
				alert("You Lose!");
				bool = true;
				 oncewin = true;
			}
			else if(a[0][0]==2)
			{
				alert("You Win!");
				bool = true; 
				oncewin = true;
			}
		}

		if (a[0][1]==a[1][1] && a[1][1]==a[2][1])
		{
			if (a[0][1]==1)
			{
				alert("You Lose!");
				bool = true; 
				oncewin = true;
			}
			else if(a[0][1]==2)
			{
				alert("You Win!");
				bool = true; 
				oncewin = true;
			}
		}

		if (a[0][2]==a[1][2] && a[1][2]==a[2][2])
		{
			if (a[0][2]==1)
			{
				alert("You Lose!");
				bool = true; 
				oncewin = true;
			}
			else if(a[0][2]==2)
			{
				alert("You Win!");
				bool = true; 
				oncewin = true;
			}
		}

		if (a[0][0]==a[1][1] && a[1][1]==a[2][2])
		{
			if (a[0][0]==1)
			{
				alert("You Lose!");
				bool = true; 
				oncewin = true;
			}
			else if(a[0][0]==2)
			{
				alert("You Win!");
				bool = true;
				oncewin = true;
			}
		}

		if (a[0][2]==a[1][1] && a[1][1]==a[2][0])
		{
			if (a[0][2]==1)
			{
				alert("You Lose!");
				bool = true;
				oncewin = true;
			}
			else if(a[0][2]==2)
			{
				alert("You Win!");
				bool = true;
				oncewin = true;
			}
		}

		if (counter == 9 && bool == false)
		{
			alert("Match results in a draw. Press refresh to start again.");
		}
	}
}