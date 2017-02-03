// ---- 0.2 Function
// No 1
function meterToFoot(m)
{
	let oneMeterIsEqualTo = 3.28084;
	let feet = m*oneMeterIsEqualTo;
	console.log(feet);
	return feet;
}

// No 2 
function area(width, height)
{
	let area = width*height;
	console.log(area);
	return area;
}

// No 3 
function cost(h, m, s)
{
	let costPerMinutes = 1.5;

	if (s<60 && s>=0)
	{
		var totalMins = 0;
		totalMins += h*60;
		totalMins += m;
		
		if(s>0)
		{
			totalMins += 1;
		}
		else 
		{
			// do nothing
		}
		let totalCost = costPerMinutes*totalMins
		console.log(totalCost);
		return totalCost;
	}
	else
	{
		console.log(`wrong second`);
		return null;
	}
}

cost(1,2,3);