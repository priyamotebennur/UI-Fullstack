// count the number of digits in a number
var number = 5436, count = 0;
var num = Math.abs(number);
while (num != 0) {
  num = Math.floor(num / 10);
  count++;
}
console.log("Number of digits:", count);

//Finding the average of a number
var num = 5436, sum = 0, count = 0;
var temp = Math.abs(num);
while (temp != 0) {
  rem = temp % 10;
  sum = sum + rem;
  temp = Math.floor(temp / 10);
  count++;
}
console.log("Average is ", sum / count);

//Sum of even digits in a number
var number = 5436;
var num = number, sumEven = 0;
while (num != 0) {
  var result = num % 10;
  if (result % 2 == 0) {
    sumEven += result;
  }
  num = Math.floor(num / 10);
}
console.log(sumEven);


//Sum of odd digit in a number
var number = 5436;
var num = number, sumOdd = 0;
while (num != 0) {
  var result = num % 10;
  if (result % 2 != 0) {
    sumOdd += result;
  }
  num = Math.floor(num / 10);
}
console.log(sumOdd);

//Print Even numbers in a number
var number = 5436;
var num = number;
console.log("Even numbers are:");
while (num != 0) {
  var result = num % 10;
  if (result % 2 == 0) {
    console.log(result)
  }
  num = Math.floor(num / 10);
}

//Print Odd numbers in a number
var number = 5436;
var num = number;
console.log("Odd numbers are:");
while (num != 0) {
  var result = num % 10;
  if (result % 2 != 0) {
    console.log(result)
  }
  num = Math.floor(num / 10);
}

//Print Largest number in given number
var num = 5436, temp = num, maxNum = 0;
while (temp != 0) {
  var rem = temp % 10;
  if (rem > maxNum) // compares and stores the larger value
    maxNum = rem;
  temp = Math.floor(temp / 10);
}
console.log("Largest digit in " + num + "is", maxNum);



//Print Smallest number in given number
var num = 5436, temp = num, minNum = 9;
while (temp != 0) {
  var rem = temp % 10;

  if (rem < minNum)// compares and stores the smaller value
    minNum = rem;
  temp = Math.floor(temp / 10);
}
console.log("smallest digit in " + num + "is", minNum);

//check whether a number is perfect number
function perfectNumber(number) {
  var temp = 0;
  for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }

  if (temp === number && temp !== 0) {
    console.log("It is a perfect number.");
  }
  else {
    console.log("It is not a perfect number.");
  }
}
perfectNumber(28);


//check whether a number is prime number
var num = 123, flag = 0;
if (num == 0 || num == 1)
  flag = 1;

for (var i = 2; i <= num / 2; i++) {
  console.log(num % i);
  if (num % i == 0) {
    flag = 1;
    break;
  }
}
console.log(flag);
if (flag == 1)
  console.log(num + " is not prime number");
else
  console.log(num + " is prime number");



// Write Fibonacci series upto first 10 numbers
var firstnum = 0, secondnum = 1, sum = 0;
console.log(firstnum);
console.log(secondnum);
for (i = 1; i <= 8; i++) {
  sum = firstnum + secondnum;
  firstnum = secondnum;
  secondnum = sum;
  console.log(sum);
}

/** Steps to prepare code:
  1. Declare all inputs and outputs variable in logics
  2. Assign some values to input variables
  3. Perform Business Logic
  4. Compute the final output and display  */

/*** Code to find area of Circle */
var r = 1.2, pi = 3.421, area;
area = pi * r ** 2;
console.log("Area of circle is ", pi * r ** 2);

/**  Code to find SimpleInterest */
var principle = 2000, time = 2, rate = 10;
var SimpleInterest = (principle * time * rate) / 100;
console.log(SimpleInterest);

/**Code to find cube of a number */
var num = 5;
var result = num * num * num;
console.log(result);

/**Code to find (a+b)^2 */
var a = 5, b = 7, value;
value = a ** 2 + b ** 2 + 2 * a * b;
console.log(value);


