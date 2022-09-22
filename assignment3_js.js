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
console.log(maxNum);



//Print Smallest number in given number
var num = 5436, temp = num, minNum = 9;
while (temp != 0) {
  var rem = temp % 10;

  if (rem < minNum)// compares and stores the smaller value
    minNum = rem;
  temp = Math.floor(temp / 10);
}
console.log(minNum);
