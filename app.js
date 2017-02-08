// ---- Excercise 1 Function
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

// ---- Excerise 2 0.4 Condition
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

// No 2
function sumEven(n)
{
	var i = 2;
	var sum = 0;
	while(i<=n)
	{
		sum+=i;
		i+=2;
	}
	console.log(sum);
	return sum;
}

// No 3
function divider(n)
{
	var counter = 1;
	var dividers = [];

	while (counter <= n)
	{
		if (n % counter == 0)
		{
			dividers.push(counter);
		}
		counter+=1;
	}
	console.log(dividers);
	return dividers;
}

// No 4
function isPrime(p)
{
	var counter = 2 
	var isPrime = true
	if(p>0)
	{
		while (counter < p)
		{
		if ( p%counter == 0)
			{
				isPrime = false
			}
			counter += 1;
		}

	console.log(isPrime);
	return isPrime;

	}
	else
	{
		console.log(`must be greater than 0`);
	}
	
}

// No 5
function gcd(a, b)
{
	var min = Math.min(a,b);
	var max = Math.max(a,b);
	var counter = 1;
	var gcd = 1;
	while(counter<=min)
	{
		if(min%counter == 0 && max%counter ==0)
		{
			gcd = counter;
		}
		counter += 1;
	}
	console.log(gcd);
	return gcd;
}

// No 6 
function lcm(a, b)
{
	let divide = gcd(a,b);

	let lcm = (a/divide)*(b/divide)*divide;
	
	console.log(lcm);
	return lcm;
}

// No 7 
function countOdd(a, b)
{
	var min = Math.min(a,b);
	let max = Math.max(a,b);

	var odds = [];

	if (min%2 == 0)
	{
		min += 1;
		console.log(`first is even`);
	}
	else
	{
		// 
	}
		var counter = min;

		while(counter <= max)
		{
			odds.push(counter);
			counter += 2;
		}

		console.log(odds.length);
		return odds.length;
	
}

// No 8
function divide35(n)
{
	var max = n;
	var counter = 1;
	var ableToDivide = [];

	while (counter <= max)
	{
		if (counter%3 == 0 || counter%5 == 0)
		{
			ableToDivide.push(counter);
		}
		counter += 1;
	}
	console.log(ableToDivide.length);
	return ableToDivide.length;
}

// No 9
function countDivider(a, b, k)
{
	var min = a;
	var max = b;
	var counter = a;
	var ableToDivide = [];
	while (counter <= b)
	{
		if(counter%k ==0)
		{
			ableToDivide.push(counter);
		}
		counter += 1;
	}
	console.log(ableToDivide.length);
	return ableToDivide.length;
}

// Excerise 3 -- String
// No 1

function reverse(s)
{
	s = s.toLowerCase();
	let length = s.length;
	var newString = "";
	var counter = length-1;

	while(counter >= 0)
	{
		newString += s[counter];

		counter -= 1;
	}
	console.log(newString);
	return newString;
}

// No 2

function isAnagram(s, t)
{
	var isAnagram = true;
	if (s.length == t.length)
	{
		let string_1 = s.toLowerCase();
		let string_2 = t.toLowerCase();

		var string_1_array = [];
		var string_2_array = [];

		var counter = string_1.length-1;

		while(counter >= 0)
		{
			string_1_array[counter] += string_1[counter];
			string_2_array[counter] += string_2[counter];
			counter -= 1;
		}
		string_2_array.sort();
		string_1_array.sort();
		counter = 0;
		while( counter < string_1_array.length )
		{
			if(string_1_array[counter] != string_2_array[counter])
			{
				isAnagram = false;
			}
			else
			{

			}
			counter += 1;
		}
	}
	else
	{
		isAnagram = false;
	}
	console.log(isAnagram);
	return isAnagram;
}

// No 3
function isPalindrome(s)
{
	var original = s; 
	var afterReverse = reverse(s);
	var isPalindrome = false;

	if (original == afterReverse)
	{
		isPalindrome = true;
	}
	else
	{
		isPalindrome = false;
	}

	console.log(isPalindrome);
	return isPalindrome;
}
isPalindrome("racecar");
