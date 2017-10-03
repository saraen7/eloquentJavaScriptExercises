//Eloquent JavaScript exercises

//Chapter 2
//Exercise 1
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);

//Exercise 2
for (var i = 1; i <= 100; i++) {
  if(i%5==0 && i%3==0){
    console.log("FizzBuzz")
  } else if(i%5==0){
    console.log("Buzz")
  } else if(i%3==0){
    console.log("Fizz")
  } else {
    console.log(i)
  }
}

//Exericse 3
//on work computer

//Chapter 3
//Exericse 1
var min = function(a, b){
  if(a < b){
    console.log(a);
  } else if (b < a){
    console.log(b);
  } else {
    return null;
  }
};

min(4,5); //example

//Exercise 2
//note this works on negative numbers too even though in the example it's not supposed to
var even = function(a) {
  var toText = a.toString();
  var lastChar = toText.slice(-1);
  var lastDigit = +(lastChar);
  if(lastDigit == 0) {
    return true;
  } else if (lastDigit ==1) {
    return false;
  } else {
    return even(lastDigit-2)
  }
}

//Exercise 3, part 1
var countBs = function(a) {
  a = a.toString();
  var b = 0;
  for(i = 0; i < a.length; i++) {
    if(a.charAt(i)==="B"){
      b++;
    }
  }
  return b;
}
countBs("BBC");

//Exercise 3, part 2
var countChar = function(a,c) {
  a = a.toString();
  c = c.toString();
  var b = 0;
  for(i = 0; i < a.length; i++) {
    if(a.charAt(i)===c){
      b++;
    }
  }
  return b;
}
countChar("kakkerlak", "k");
