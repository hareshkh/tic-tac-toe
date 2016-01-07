var canvas = document.getElementById('gameSpace'); // fetching canvas as a variable
var context = canvas.getContext('2d'); // everything is drawn using context
var counter = 0;
var oncewin = false;

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

function clicker (event)
{
	if (!oncewin)
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
	}
}

function check(event)
{
	var bool = false;
	if (a[0][0]==a[0][1] && a[0][1]==a[0][2])
	{
		if (a[0][0]==1)
		{
			alert("Player 1 wins!");
			bool = true; oncewin = true; 
			oncewin = true;
		}
		else if(a[0][0]==2)
		{
			alert("Player 2 wins!");
			bool = true;
			oncewin = true;
		}
	}

	if (a[1][0]==a[1][1] && a[1][1]==a[1][2])
	{
		if (a[1][0]==1)
		{
			alert("Player 1 wins!");
			bool = true;
			oncewin = true;
		}
		else if(a[1][0]==2)
		{
			alert("Player 2 wins!");
			bool = true; 
			oncewin = true;
		}
	}

	if (a[2][0]==a[2][1] && a[2][1]==a[2][2])
	{
		if (a[2][0]==1)
		{
			alert("Player 1 wins!");
			bool = true; 
			oncewin = true;
		}
		else if(a[2][0]==2)
		{
			alert("Player 2 wins!");
			bool = true; 
			oncewin = true;
		}
	}

	if (a[0][0]==a[1][0] && a[1][0]==a[2][0])
	{
		if (a[0][0]==1)
		{
			alert("Player 1 wins!");
			bool = true;
			 oncewin = true;
		}
		else if(a[0][0]==2)
		{
			alert("Player 2 wins!");
			bool = true; 
			oncewin = true;
		}
	}

	if (a[0][1]==a[1][1] && a[1][1]==a[2][1])
	{
		if (a[0][1]==1)
		{
			alert("Player 1 wins!");
			bool = true; 
			oncewin = true;
		}
		else if(a[0][1]==2)
		{
			alert("Player 2 wins!");
			bool = true; 
			oncewin = true;
		}
	}

	if (a[0][2]==a[1][2] && a[1][2]==a[2][2])
	{
		if (a[0][2]==1)
		{
			alert("Player 1 wins!");
			bool = true; 
			oncewin = true;
		}
		else if(a[0][2]==2)
		{
			alert("Player 2 wins!");
			bool = true; 
			oncewin = true;
		}
	}

	if (a[0][0]==a[1][1] && a[1][1]==a[2][2])
	{
		if (a[0][0]==1)
		{
			alert("Player 1 wins!");
			bool = true; 
			oncewin = true;
		}
		else if(a[0][0]==2)
		{
			alert("Player 2 wins!");
			bool = true;
			oncewin = true;
		}
	}

	if (a[0][2]==a[1][1] && a[1][1]==a[2][0])
	{
		if (a[0][2]==1)
		{
			alert("Player 1 wins!");
			bool = true;
			oncewin = true;
		}
		else if(a[0][2]==2)
		{
			alert("Player 2 wins!");
			bool = true;
			oncewin = true;
		}
	}

	if (counter == 9 && bool == false)
	{
		alert("Match results in a draw. Press refresh to start again.");
	}
}