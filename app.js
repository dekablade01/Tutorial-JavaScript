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

// No 4 
function interest(n)
{
	let interest = 1.25/100;
	let total = n + n*interest;

	console.log(total);
	return total;
}
// No 5
function areaOfCircle(r)
{
	let area = Math.PI*r*r

	console.log(area);
	return area;
}
// No 6
function degreeToRadian(d)
{
	let radian = `${d/180} PI`;

	console.log(radian);

	return degreeToRadian;
}
// No 7
function distance(x1, y1, x2, y2)
{
	let max_x = Math.max(x1,x2);
	let min_x = Math.min(x1,x2);
	let max_y = Math.max(y1,y2);
	let min_y = Math.min(y1,y2);

	let delta_x = max_x - min_x;
	let delta_y = max_y - min_y;

	let length_power_2 = (delta_x*delta_x)+(delta_y*delta_y);
	let length = Math.sqrt(length_power_2);

	console.log(length);
	return length;
}

// No 8 
function container(x, w)
{
	let item_wight = x;
	let support_weight = w;

	var number_of_items = support_weight/item_wight;
	number_of_items = Math.floor(number_of_items);

	console.log(number_of_items);
	return number_of_items;
}

// ---- 0.4 Condition
// No 1
function max3(a,b,c)
{
	var max = 0;
	if (a>=b && a>=c)
	{
		max = a;
	}
	else if (b>=a && b>=c)
	{
		max = b;
	}
	else if (c>=a && c>=b)
	{
		max = c;
	}
	else 
	{
		//
	}
	console.log(max);
	return max;
}
max3(3, 5, 2);

