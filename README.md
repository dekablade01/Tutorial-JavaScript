# JavaScript

## Variables

ตัวแปรเป็นเหมือนช่องเก็บข้อมูลที่จะใส่ค่าอะไรเข้าไปก็ได้ เช่น

```javascript
var n = 8;
var s = "Ant";
var x;
var a = ['Apple', 'Banana'];
var data = {start: 7, finish: 5};
```

ตัวแปรที่กำหนดค่าไว้จะมี type อยู่ด้วย เช่น var n = 8; ตอนนี้ตัวแปร n มี type เป็น number ถ้าต่อมาเขียนว่า n = "Cat"; คราวนี้ type จะเปลี่ยนเป็น string เราสามารถใช้ typeof เพื่อดู type ของตัวแปรได้ เช่น

```javascript
var n = 8;
console.log(typeof n);
n = "Cat";
console.log(typeof n);
```

## Function
หลายคนคงเคยเรียน function มาตั้งแต่สมัยมัธยม เช่น f(x) = 2x ดังนั้น f(5) = 2*5 = 10 นี่คือ function ง่ายๆในคณิตศาสตร์ ซึ่ง function นี้สามารถเขียนได้ดังนี้

```javascript
function f(x) {
	return 2 * x;
}
```

ถ้าต้องการเรียกใช้ก็เพียงแค่เขียนว่า f(5) จะได้ค่าออกมาคือ 10 หรือ จะกำหนดตัวแปรให้เก็บค่าไว้ก็ได้ เช่น

```javascript
var y = f(5);
```

จะได้ค่า y ตอนนี้คือ 10 เราสามารถนำมาแสดงผลได้เช่นใช้ console.log() หรือ document.write()

```javascript
console.log(y);
```

### แบบฝึกหัดที่ 1
1. ให้เขียน function meterToFoot(x) แปลง x จากหน่วยเมตรเป็นฟุต โดยที่ 1 เมตร = 3.28084 ฟุต
2. ให้เขียน function area(width, height) รับความกว้างและยาวของรูปสี่เหลี่ยม จากนั้นคำนวณหาพื้นที่
3. ให้เขียน function cost(h, m, s) รับตัวเลขเข้ามาเป็นเวลาที่ใช้งานโทรศัพท์ แล้วคำนวณหาค่าโทรศัพท์นาทีละ 1.5 บาท เศษของนาทีให้คิดเป็น 1 นาที เช่น cost(1,2,3) คือ 1 ชั่วโมง 2 นาที 3 วินาที ค่าโทรศัพท์คือ 63 นาที = 94.5 บาท
4. ให้เขียน function interest(n) คำนวณหาดอกเบี้ย 1.25% จากเงินฝาก n บาท
5. ให้เขียน function interest(n) คำนวณหาดอกเบี้ย 1.25% จากเงินฝาก n บาท
6. ให้เขียน function degreeToRadian(d) แปลงมุมจาก degree เป็น radian (1 degree = π radian)
7. ให้เขียน function distance(x1, y1, x2, y2) หาว่าจุด (x1,y1) และ (x2, y2) ห่างกันกี่หน่วย
8. ให้เขียน function container(x,w) หาว่า สินค้านำหนักชิ้นละ x กิโลกรัม จะสามารถขนใส่รถที่บรรทุกได้ w กิโลกรัม กี่ชิ้น

## Iteration
Iteration คือโครงสร้างการทำงานซ้ำๆกัน เช่น คำสั่ง while เช่น ต้องการแสดงคำว่า Happy Birthday ไป 10 ครั้ง ทำได้โดย กำหนดตัวแปร i = 1 จากนั้นใช้คำสั่ง while เพื่อดูว่า i <= 10 หรือไม่ ถ้าน้อยกว่าก็แสดงข้อความ และเพิ่มค่าตัวแปร i อีก 1 ด้วยคำสั่ง i = i + 1

```javascript
var i = 1;
while (i <= 10) {
	console.log("Happy Birthday");
	i = i + 1;
}
```

โครงสร้างแบบ do { ... } while () จะคล้ายกัน แต่จะทำงานก่อนที่จะตรวจสอบเงื่อนไข เช่น ให้พิมพ์เลขตั้งแต่ 1-10

```javascript
var i = 1;
do {
	console.log(i);
	i = i + 1;
} while (i < 10);
```

โครงสร้างแบบ for มักจะใช้เมื่อมี index หรือ key เช่น

```javascript
for (var i = 0; i < 10; i++) {
	console.log(i);
}
```

## Condition

Condition คือโครงสร้างการทำงานแบบมีเงื่อนไข เช่น คำสั่ง if เช่น
ต้องการให้ทำงานถ้าตัวแปร a มีค่ามากกว่า 5 เขียนว่า if (a > 5) { ... }
ต้องการให้ทำงานถ้าตัวแปร n เป็นเลขคู่ เขียนว่า if (n % 2 == 0) { ... } นั่นคือ ถ้า n หารด้วย 2 แล้วเหลือเศษ 0 ให้ทำงานที่กำหนดให้

ตัวอย่างการเขียน function หาค่าที่มากที่สุดของตัวเลข 2 ตัว

```javascript
function max(a, b) {
	if (a > b) {
		return a;
	} else {
		return b;
	}
}
```

เงื่อนไขอีกแบบนั่นคือ conditional operator มีรูปแบบคือ x ? y : z ถ้า x เป็นจริงให้ทำงานที่ y มิฉะนั้นทำงานที่ z เช่น function ข้างบน เขียนโดยใช้ conditional operator (short if) ดังนี้ 

```javascript
function max(a, b) {
	return a > b ? a : b;
}
```

เงื่อนไขแบบสุดท้ายคือ switch เช่น

```javascript
function getDayName(d) {
	switch (d) {
		case "Mo": d = "Monday";    break;
		case "Tu": d = "Tuesday";   break;
		case "We": d = "Wednesday"; break;
		case "Th": d = "Thursday";  break;
		case "Fr": d = "Friday";    break;
		case "Sa": d = "Saturday";  break;
		case "Su": d = "Sunday";    break;
	}
	return d;
}
```

### แบบฝึกหัดที่ 2
1. ให้เขียน function max3(a, b, c) หาว่าค่าที่มากที่สุดของ a, b และ c คืออะไร เช่น max3(3, 5, 2) ได้คำตอบคือ 5
2. ให้เขียน function sumEven(n) หาผลบวกของเลขคู่ตั้งแต่ 1 ถึง n เช่น sumEven(5) ได้คำตอบคือ 2 + 4 = 6
3. ให้เขียน function divider(n) หาว่าตั้งแต่ 1 ถึง n มีตัวมีกี่ตัวที่หาร n ได้ลงตัว เช่น divider(10) ได้ 4 เพราะมี 4 ตัวคือ 1, 2, 5, 10 ที่หาร 10 ได้ลงตัว
4. ให้เขียน function isPrime(p) หาว่า p เป็นจำนวนเฉพาะหรือไม่ คือมีเพียง 1 และ p ที่หาร p ได้ เช่น isPrime(23) ได้ true
5. ให้เขียน function gcd(a, b) หาว่าตัวเลขไหนที่มากที่สุดที่หารได้ทั้ง a และ b ลงตัว เช่น gcd(15, 10) ได้ 5 เพราะเป็นตัวที่มากที่สุดที่หารได้ทั้ง 15 และ 10
6. ให้เขียน function lcm(a, b) หาว่าตัวเลขที่น้อยที่สุดที่ a และ b ไปหารได้ลงตัวคืออะไร เช่น lcm(15, 10) ได้คำตอบคือ 30 เพราะ 15 ไปหาร 15, 30, 45, ... ได้ลงตัว ส่วน 10 ก็หาร 10, 20, 30, 40, ... ได้ลงตัว ค่าที่น้อยที่สุดคือ 30
7. ให้เขียน function countOdd(a, b) หาว่าระว่าง a ถึง b มีเลขคี่กี่ตัว เช่น countOdd(3, 10) ได้ 4 เพราะมีเลขคี่คือ 3, 5, 7, 9
8. ให้เขียน function divide35(n) หาว่าตั้งแต่ 1 ถึง n มีกี่ตัวที่หารด้วย 3 หรือ 5 ได้ลงตัว เช่น divide35(10) ได้ 5 เพราะ ตั้งแต่ 1 ถึง 10 มีตัวเลข 5 ตัวที่หารด้วย 3 หรือ 5 ได้ลงตัวนั่นคือ 3, 5, 6, 9, 10
9. ให้เขียน function countDivider(a, b, k) หาว่าตั้งแต่ a ถึง b มีกี่จำนวนที่หารด้วย k ได้ลงตัว เช่น countDivider(10, 18, 5) ได้ 2 เพราะตั้งแต่ 10 ถึง 18 มี 2 ตัวที่ 5 หารได้ลงตัวคือ 10 และ 15

## String

ข้อความกำหนดได้ 3 วิธีคือ อยู่ภายในเครื่องหมาย double quote " หรือ single quote ' หรือ back-tick ` ซึ่งแบบสุดท้ายสามารถเขียนได้หลายบรรทัด เช่น

```javascript
var x = "Hello World!";
var y = 'Happy Birthday';
var z =
`Welcome to the
New World!`;
```

string ใน back-tick สามารถทำ template ได้เช่น มีตัวแปร n = 10 ต้องการบอกว่า ตอนนี้มีของ 10 ชิ้น ก็ใช้เครื่องหมาย ${n} ได้เช่น

```javascript
var n = 10;
var s = `There are ${n} item(s).`;
console.log(s);
```

string สามารถนำมาบวกกันได้ เช่น "Happy" + "Birthday" ได้ "HappyBirthday" หรือ "1" + "3" ได้ "13" แต่ระวัง "1" + 3 ได้ "13" และ "x" + 3 ได้ "x3"

การเข้าถึงตัวอักษรแต่ละตัวสามารถใช้ [ ] ได้ เช่น ถ้า s = 'Happy Birthday' แล้ว s[0] คือ 'H' ถ้าอยากรู้ว่ามีกี่ตัวอักษร ใช้ .length เช่น s.length ตอนนี้คือ 14

### แบบฝึกหัดที่ 3
1. ให้เขียน function reverse(s) รับ string เข้ามาแล้วส่งค่ากลับเป็น string ที่ย้อนกลับจากเดิม เช่น reverse("hello") ได้ "olleh" กลับมา
2. ให้เขียน function isAnagram(s, t) รับ string เข้ามา 2 อัน แล้วบอกว่ามันเป็น anagram กันหรือไม่ เช่น gallery และ allergy เป็น anagram กัน เพราะเป็นคำที่สลับตัวอักษรกัน
3. ให้เขียน function isPalindrome(s) เพื่อหาว่า string ที่เข้ามาสามารถอ่านย้อนกลับ แล้วได้ข้อความเดิมหรือไม่ เช่น racecar อ่านย้อนกลับจะได้คำเดิม
4. ให้เขียน function romanNumber(n) รับตัวเลขเข้ามาแปลงเป็นตัวเลขโรมัน เช่น romanNumber(19) ได้ 'XIX'
5. ให้เขียน function print(p) รับข้อมูลเข้ามาหาว่าต้องพิมพ์ทั้งหมดกี่แผ่น เช่น print("1-3,4,7-9") ต้องพิมพ์ทั้งหมด 7 แผ่น ได้แก่ 1,2,3,4,7,8,9
6. ให้เขียน function englishMonth() รับเดือนภาษาไทยมาแล้วแปลงเป็นภาษาอังกฤษ เช่น englishMonth('มกราคม') ได้ 'January' ออกมา
7. ให้เขียน function permute(s) แล้วพิมพ์รายการที่เกิดจากการสลับตัวอักษรทั้งหมดออกมา เช่น permute('ABC') ได้ ABC ACB BAC BCA CAB CBA ไม่จำเป็นต้องเรียงตามนี้แต่ต้องมีครบ
8. ให้เขียน function thaiNumber(x) แปลงเป็นตัวเลขไทย เช่น thaiNumber(23.85) ได้คำตอบเป็น '๒๓.๘๕'
9. หุ่นยนต์สามารถเดินได้ 4 ทิศทางคือ N S E W ได้แก่ เหนือ ใต้ ตะวันออก ตะวันตก ให้เขียน function walk() รับลำดับการเดินเข้ามาแล้วหาว่าอยู่ห่างจุดเริ่มต้นกี่หน่วย เช่น walk("NNEESNESENNENWW") ได้คำตอบคือ 5
10. หุ่นยนต์ตัวหนึ่งสามารถเดินได้ 2 ทางคือ เหนือ กับ ตะวันออก ใช้สัญลักษณ์แทนว่า N และ E ตามลำดับ ให้เขียน function ways(x, y) หาว่า จากจุดเริ่มต้น (0,0) หุ่นตัวนี้ สามารถไปหาจุด (x,y) ได้กี่วิธี เช่น ways(2, 1) ได้ 3 วิธีคือ NEE, NEN และ EEN

## Array

array คือโครงสร้างข้อมูลที่เรียงต่อกัน เช่น มีข้อมูล Apple, Banana และ Coconut ต้องการเก็บใน array เขียนได้เป็น

```javascript
var a = ['Apple', 'Banana', 'Coconut'];
```

ในขณะนี้ a มี 3 ช่องคือ a[0] เก็บค่า 'Apple' ไว้ a[1] เก็บ 'Banana' และ a[2] เก็บ 'Coconut'
การเพิ่มข้อมูลเข้าไปใช้คำสั่ง push() เช่น

```javascript 
a.push('Durian');
```

ตอนนี้ a[3] มีค่าคือ 'Durian' และ a มีค่าคือ ["Apple", "Banana", "Coconut", "Durian"]

การเรียงข้อมูลใน array ใช้ .sort() เช่น

```javascript
var a = ["Coconut", "Banana", "Apple"];
a.sort();
```
ตอนนี้ a คือ ["Apple", "Banana", "Coconut"]

array ยังมีความเป็น associative หรือ hash หรือ map อีกด้วย เช่น a['Sunday'] = 'Sun' ก็คือ a มีตัวแปรชื่อ Sunday มีค่า 'Sun' หรือจะเขียน a.Sunday = 'Sun' ก็ได้ผลเช่นเดียวกัน

Iteration บน array จะมีอีก 2 อย่างคือ for in และ for of เพื่อ list ค่า key และ value ตามลำดับ

```javascript
 a = [1, 2, 3];

// keys in a = [0, 1, 2]
for (var k in a) {
	console.log(k);
}

// values of a = [1, 2, 3]
for (var v of a) {
	console.log(v);
}
```

### แบบฝึกหัดที่ 4

1. ให้เขียน function sum(a) หาผลบวกของค่าใน array ที่ส่งเข้ามา
2. ให้เขียน function maximum(a) หาค่าที่มากที่สุดใน array ที่ส่งเข้ามา
3. มัธยฐาน หรือ median คือค่ากลางของข้อมูล เช่น [1, 2, 3] มีค่า median คือ 2 แต่ [1, 2, 3, 4] มี median คือ (2+3)/2 = 2.5 ให้เขียน function median(a) รับ array เข้ามาแล้วส่งค่ากลับเป็น median ของ array
4. ฐานนิยม หรือ mode คือข้อมูลที่พบมากที่สุด เช่น [3, 2, 3, 1, 4] มีค่า mode คือ 3 ให้เขียน function mode(a) หาว่า mode ของ array ที่ส่งเข้าไปคืออะไร
5. ให้เขียน function divider(n) หาว่ามีตัวเลขอะไรบ้างระหว่าง 1 ถึง n ที่หาร n ได้ลงตัวส่งค่ากลับมาเป็น array เช่น divider(12) ได้ [1,2,3,4,6,12]
6. ให้เขียน function commonDivider(m, n) หาว่ามีตัวเลขอะไรบ้างที่หาร m และ n ได้ลงตัว เช่น commonDivider(10, 15) ได้ [1, 5]
7. บริษัทขุดเจาะน้ำมันได้สำรวจน้ำมันดิบตามบ่อต่างๆว่ามีประมาณกี่หน่วย บ่อน้ำมันเรียงต่อกันไปเรื่อยๆ ถ้าเข้าไปเจาะน้ำมันที่บ่อไหน บ่อที่อยู่ติดกันก็จะขุดไม่ได้ เช่น ถ้าเข้าไปขุดบ่อที่ 3 บ่อที่ 2 และ 4 ก็จะขุดไม่ได้ ให้เขียน function maximum(a) รับ array ของปริมาณน้ำมันดิบที่มีในแต่ละบ่อ แล้วหาว่าปริมาณน้ำมันดิบที่สามารถขุดได้คือ กี่หน่วย เช่น [3, 2, 4, 8, 5] ได้น้ำมันดิบมากที่สุดคือ 3 + 4 + 5 = 12
8. ให้เขียน function common(a, b) รับ array สองอันแล้วบอกว่ามีตัวร่วมกันคืออะไรบ้าง เช่น common([1, 2, 3, 4], [2, 4, 6, 8]) ได้ผลลัพธ์เป็น [2, 4]
9. ให้เขียน function factor(n) รับเลขจำนวนเต็มเข้ามาแล้วบอกว่า มาจากเลขอะไรคูณกัน เช่น factor(18) = 2 * 3 * 3 ถ้าตอบว่า 2 * 9 ยังไม่ถูกเพราะ 9 แยกออกมาเป็น 3 * 3 ได้อีก
10. ให้เขียน function subset(a) แล้วบอกว่ามี subset ที่เป็นไปได้คืออะไรบ้าง เช่น subset(['Apple', 'Banana', 'Coconut']) ได้ [], ['Apple'], ['Banana'], ['Coconut'], ['Apple', 'Banana'], ['Banana', 'Coconut'], ['Apple', 'Coconut'], ['Apple', 'Banana', 'Coconut'] ไม่จำเป็นต้องเรียงตามลำดับนี้แต่ต้องมีทุกตัว

## Object

object สามารถเขียนได้ง่ายๆ ภายในเครื่องหมายวงเล็บปีกกา เช่น { } จะได้ object ที่สามารถใช้งานได้ทันที หรือจะใส่ข้อมูลลงไปด้วยก็ได้เช่นกัน

```javascript
var book = { title: 'Web Programming', price: 29.95 };
```

object สามารถเพิ่มข้อมูลเข้าไปได้ เช่น จากข้างบนสามารถเพิ่มว่ามีหนังสืออยู่กี่เล่มได้

```javascript
book.available = 3;
```

ใน object มี function ได้ เช่น ต้องการเพิ่ม function getDiscountedPrice()

```javascript
book.getDiscountedPrice = function() {
	return this.price * 0.90;
}
```

สมมุติว่ามี array ของสินค้าและราคา ต้องการเรียงตามราคาสินค้า เช่น

```javascript
var data = [
	{name: 'Apple'  , price: 0.95},
	{name: 'Banana' , price: 0.90},
	{name: 'Coconut', price: 1.45}
];
```

ใช้คำสั่งเดิมคือ data.sort() แต่ส่ง function สำหรับเปรียบเทียบเข้าไป function นี้ return -1 ถ้าตัวทางซ้ายมาก่อน และ +1 ถ้าตัวทางขวามาก่อน นอกนั้นให้เป็น 0 เช่น

```javascript
function sortByPrice(a, b) {
	if (a.price < b.price) return -1;
	if (a.price > b.price) return +1;
	return 0;
}
```

จากนั้นใช้คำส่ง data.sort(sortByPrice) ได้ทันที

### แบบฝึกหัดที่ 5

5.1 ให้เขียน function thaiArea(a) รับขนาดที่ดินเป็นตารางเมตรเข้ามา แล้วบอกว่ามีขนาดกี่ไร่ กี่งาน กี่ตารางวา เช่น thaiArea(2100) ได้คำตอบคือ 1 ไร่ 1 งาน 25 ตารางวา หรือ {r: 1, n: 1, w: 25}

5.2 กำหนดให้มีข้อมูลคือ
```javascript
var data = [
	{ city: 'เมืองนนทบุรี', code: '11000' },
	{ city: 'บางบัวทอง',  code: '11110' },
	{ city: 'ปากเกร็ด',   code: '11120' },
	{ city: 'บางกรวย',   code: '11130' },
	{ city: 'บางใหญ่',    code: '11140' },
	{ city: 'ไทรน้อย',    code: '11150' }
];
```
ใช้เขียน function findCode(city) รับชื่ออำเภอเข้ามาแล้วหาว่า รหัสไปรษณีย์ของอำเภอนั้นคืออะไร ถ้าไม่เจอให้ตอบว่า not found

5.3 กำหนดให้มีข้อมูลคือ
```javascript
var data = {
	'เมืองนนทบุรี' : '11000',
	'บางบัวทอง'  : '11110',
	'ปากเกร็ด'   : '11120',
	'บางกรวย'   : '11130',
	'บางใหญ่'    : '11140',
	'ไทรน้อย'    : '11150'
};
```
ใช้เขียน function getCode(city) รับชื่ออำเภอเข้ามาแล้วหาว่า รหัสไปรษณีย์ของอำเภอนั้นคืออะไร ถ้าไม่เจอให้ตอบว่า not found

5.4 ให้เขียน function sortMedal(list) รับข้อมูลเข้ามาเป็นทีมและเหรียญรางวัล ให้เรียงข้อมูลจาก gold, silver, bronze เช่น
```javasript
sort([
	{name: 'Bangkok',    gold: 5, silver: 2, bronze: 3},
	{name: 'Nonthaburi', gold: 3, silver: 4, bronze: 4},
	{name: 'Supanburi',  gold: 3, silver: 5, bronze: 4}
]);
```
ได้ผลเป็น
```javascript
[
	{name: 'Bangkok',    gold: 5, silver: 2, bronze: 3},
	{name: 'Supanburi',  gold: 3, silver: 5, bronze: 4},
	{name: 'Nonthaburi', gold: 3, silver: 4, bronze: 4}
]
```
Supanburi และ Nonthaburi ได้เหรียญทองเท่ากัน ต้องไปดูเหรียญเงินแทน

5.5 ให้เขียน function dispense(n) รับจำนวนเงินเข้ามาแล้วบอกกว่าตู้ ATM ต้องจ่ายธนบัตรอะไรกี่ใบ เช่น dispense(1700) ได้คำตอบคือ ต้องใช้ธนบัตร 1000 จำนวน 1 ใบ ธนบัตร 500 จำนวน 1 ใบ ธนบัตร 100 จำนวน 2 ใบ
```javascript
[
	{denomination: 1000, amount: 1},
	{denomination:  500, amount: 1},
	{denomination:  100, amount: 2}
]
```

5.6 ถ้ามี stamp ราคา 1 บาท 4 บาท 5 บาท อยู่ไม่จำกัดจำนวน ในการขาย stamp เพื่อติดจดหมาย ต้องการขาย stamp ให้น้อยที่สุด เช่น ต้องการติดจดหมาย 8 บาท ถ้าติดเป็น 5 + 1 + 1 + 1 ต้องใช้ 4 ดวง แต่ถ้าติดเป็น 4 + 4 ใช้แค่ 2 ดวงเท่านั้น

ให้เขียน function minimumStamp(s, v) รับ array ของ stamp เช่น [1, 4, 5] ให้หาว่าต้องใช้ stamp น้อยที่สุดกี่ดวงเพื่อรวมกันเป็นมูลค่าที่กำหนด จากตัวอย่าง minimumStamp([1,4,5], 8) ได้คำตอบเป็น 2

5.7  ให้เขียน function closest(points) รับ array ของจุด (x,y) เข้ามา แล้วหาว่าจุดที่อยู่ใกล้กันที่สุดมีระยะทางกี่หน่วย เช่น
```javascript 
closest(
	[
		{x: 0,y: 0},
		{x:10,y:10},
		{x: 1,y: 1}
	]
)
```
ได้คำตอบคือ 1.414

5.8 บริษัทแห่งหนึ่ง มีบัตรประจำตัวให้พนักงาน swipe เวลาผ่านเข้าออก ให้เขียน function workingHour(a) หาว่าพนักงานแต่ละคนมาทำงานเวลาไหนและกลับเวลาไหน เช่น
```javascript
var data = [
	{name: 'James', time: '08:05:12'},
	{name: 'James', time: '08:08:17'},
	{name: 'James', time: '08:22:09'},
	{name: 'John' , time: '08:35:28'},
	{name: 'James', time: '17:35:11'},
	{name: 'John' , time: '17:40:16'}
]
```
ได้คำตอบคือ
```javascript
[
	{name: 'James', arrive: '08:05:12', leave: '17:35:11'},
	{name: 'John' , arrive: '08:35:28', leave: '17:40:16'},
]
```

5.9 บริษัทแห่งหนึ่ง ใช้ระบบติดตามพิกัดพนักงานผ่านทาง GPS ทุกครั้งที่มีปัญหาเกิดขึ้นในที่ต่างๆ จะมีการแจ้งพิกัดเข้ามา ให้เขียน function findNearest() เพื่อค้นหาพนักงานที่ใกล้ที่สุด เช่น
```javascript
findNearest(
{
	location: [13.776196, 100.443564],
	users: [
		{ name: 'James', location: [13.778918, 100.476235]},
		{ name: 'John' , location: [13.781090, 100.447631]}
	]
}
);
```
ได้ผลลัพธ์เป็น John เพราะเขาอยู่ใกล้กว่า ให้ใช้ function หาระยะทางตามนี้
```javascript
function distance(lat1, lon1, lat2, lon2) {
	lat1 = parseFloat(lat1);
	lon1 = parseFloat(lon1);
	lat2 = parseFloat(lat2);
	lon2 = parseFloat(lon2);
	var p = 0.017453292519943295;           // Math.PI / 180
	var c = Math.cos;
	var a = 0.5 - c((lat2 - lat1) * p) / 2 +
		c(lat1 * p) * c(lat2 * p) *
		(1 - c((lon2 - lon1) * p)) / 2;
	return 12742 * Math.asin(Math.sqrt(a)); // 2 * 6371 km
}

```

5.10 บริษัทแห่งหนึ่ง ต้องการเก็บข้อมูลว่าพนักงานเดินทางวันละกี่กิโลเมตร จะได้จ่ายค่าน้ำมันได้ตรงกับความจริงมากที่สุด ให้เขียน function calculate(a) รับ array เข้ามาหาว่าพนักงานคนนี้เดินทางกี่กิโลเมตร เช่น
```javascript
calculate([
{ latitude: 13.780676, longitude: 100.446019 },
{ latitude: 13.779994, longitude: 100.443683 },
{ latitude: 13.779697, longitude: 100.443307 },
{ latitude: 13.779222, longitude: 100.443215 },
{ latitude: 13.777211, longitude: 100.443422 },
{ latitude: 13.775232, longitude: 100.443582 },
{ latitude: 13.770618, longitude: 100.444166 },
{ latitude: 13.765426, longitude: 100.444718 },
{ latitude: 13.759273, longitude: 100.445331 },
{ latitude: 13.752660, longitude: 100.446223 }
]);
```
ได้ผลลัพธ์ 3.34 กิโลเมตร (ระยะทางจริง 3.4 กิโลเมตร)
