//Eloquent JavaScript exercises

//Chapter 2, Exercise 1
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);

//Chapter 2, Exercise 2
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

//Chapter 2, Exercise 3
var size = 8;

var chessBoard = "";

for (var i = 0; i <= size; i++){
  if(i%2==0){ //if i is even
    for (var j = 0; j <= size; j++){
      if(j%2==0){
        chessBoard += " ";//on the even line, on the even character
      } else {
        chessBoard += "#"; //on the even line, on the odd character
      }
    }
    chessBoard += "\n"; //new line
  } else {
    for (var k = 0; k <= size; k++){
      if(k%2==0){
        chessBoard += "#"; //on the odd line, on the even character
      } else {
        chessBoard += " "; //on the odd line, on the odd character
      }
    }
    chessBoard += "\n"; //new line
  }
}

console.log(chessBoard) //new line

//Chapter 3, Exericse 1
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

//Chapter 3, Exercise 2
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

//Chapter 3, Exercise 3, part 1
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

//Chapter 3, Exercise 3, part 2
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

//Chapter 4, Exercise 1, part 1
var range = function(start,end){
  var numbers = [];
  for(i = start; i <= end; i++){
    numbers.push(i)
  }
  return numbers;
}

console.log(range(2,9))

//Chapter 4, Exercise 1, part 2
var sum = function(array){
  var total = 0;
  for(var i = 0; i < array.length; i++){
    total += array[i];
  }
  return total;
}

//Chapter 4, Exercise 2, part 1
var reverseArray = function(array){
  var newArray = [];
  newArray.push(array[0]); //adds the first item to the array
  for(var i = 1; i < array.length; i++){
    newArray.unshift(array[i])
  }
  return newArray;
}

console.log(reverseArray(["A", "B", "C"]));

//Chapter 4, Exercise 2, part 2
var reverseArrayInPlace = function(array){
  for(var i = 0; i < Math.floor((array.length-1)/2); i++){
    var temp = array[i];
    array[i] = array[array.length-1-i]; //set the first part of the array equal to the last part of the array
    array[array.length-1-i] = temp; //set the last part of the array equal to the temporary variable
  }
  return array;
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

//Chapter 4, Exercise 3, part 1
//Converts an array to a nested list
function arrayToList(array){
  var list = null;
  for(var i = array.length-1; i >= 0; i--){ //more efficient to go backwards through the array to nest the list properly
    list = {value: array[i], rest: list};
  }
  return list;
}

console.log(arrayToList([10, 20])); //to test

//Chapter 4, Exercise 3, part 2
//Converts a list to an array
function listToArray(list){
  var array = [];
  for(var i = list; i; i = i.rest){
    array.push(i);
  }
  return array;
}

console.log(listToArray(arrayToList([10, 20, 30]))); //to test in conjunction with exercise 3, part 1

//Chater 4, Exercise 3, part 3
function prepend(element,list){
  var newList = {value: element, rest: list};
  return newList;
}

console.log(prepend(10, prepend(20, null))); //to test

//Chapter 4, Exercise 3, part 4
function nth(list,number){
  if(!list){ //if the value does not exist in the list
    return undefined; //return undefined
  } else if (number == 0){ //if the value of the list is 0
    return list.value; //return the first position in the list
  } else { //otherwise
    return nth(list.rest, number - 1); //return the position in the list minus 1 (because arrays)
  }
}

console.log(nth(arrayToList([10, 20, 30]), 1)); //for testing in conjunction with exercise 3, part 1

//Chapter 4, Exercise 4, part 1 - does not work as of 10/7/17
function deepEqual(val1,val2){
  if(typeof val1 == "object" && typeof val2 == "object" && val1 != null && val2 != null){ //if val1 and val2 are both objects and not null
    for(val1 in val2){ //see if val1 equals val2
      return true;
    } else {
      return false;
    }
  } else if (val1 === val2){ //if val1 and val2 are not objects but are equal
    return true;
  } else { //if val1 and val2 are not the same
    return false;
  }
}

var obj = {here: {is: "an"}, object: 2}; //needed to test
console.log(deepEqual(obj, obj)); //test for true
console.log(deepEqual(obj, {here: 1, object: 2})); //test for false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); //test for true

//Chapter 5, Exercise 1 - does not work as of 10/7/17
var arrays = [[1, 2, 3], [4, 5], [6]]; //for testing

console.log(reduce(arrays,function(arrays){
  var combinedArray = [];
  for(var i = 0; i < arrays.length-1; i++){
    combinedArray.push(arrays[i])
  }
},0));

//correct - from the author
console.log(arrays.reduce(function(flat, current) {
  return flat.concat(current);
}, []));
//I do not understand how the "start" can be [], why the function only takes two variables when there are three arrays in the variable array, ahhhhh

//Chapter 5, Exercise 2
//family information in JSON format from the author
var ANCESTRY_FILE = JSON.stringify([
  {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
  {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
  {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
  {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
  {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
  {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
  {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
  {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
  {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
  {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
  {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
  {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"},
  {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
  {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
  {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"},
  {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
  {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
  {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
  {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
  {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"},
  {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
  {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
  {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
  {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
  {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
  {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
  {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
  {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}
])

var ancestry = JSON.parse(ANCESTRY_FILE);

//Average function from the author
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

//byName object from the author
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

//my code - copied from the author :(
var ageDifference = ancestry.filter(function(person){
  return byName[person.mother] != null;
}).map(function(person){
  return person.born - byName[person.mother].born;
});

console.log(average(ageDifference));

//Chapter 5, excercise 3, Historical Life Expectancy
/*my attempt that just doesn't work
var centuries = {};

var deathCentury = ancestry.map(function(person){
  return Math.ceil(person.died / 100);

})

forEach(deathCentury){
  if(centuries.deathCentury != null){
    //update existing array with person.(died-born)
    centuries.deathCentury.push([deathCentury,person.born-person.died])
  } else {
    //update centuries with deathCentury and update that array with person.(died-born)
    centuries.push(deathCentury[person.born-person.died])
  })
}*/

//Author's answer with my comments to explain
function groupBy(array, groupOf) { //creates a function called groupBy that takes an array and element called "groupOf"
  var groups = {}; //creates an empty object called "groups"
  array.forEach(function(element) { //pass every element in the array through a function - WHERE DOES ELEMENT COME FROM?
    var groupName = groupOf(element); //creates a variable call "groupName" that is equal to an element of "groupOf"
    if (groupName in groups) //if the "groupName" array exists in the object "groups"
      groups[groupName].push(element); //then add the element to the "groupsName" array within the object "groups"
    else //if the "groupName" array does not exist in the object "groups"
      groups[groupName] = [element]; //the create a new "groups" array with the name "groupName" and set that equal to the element
  });
  return groups; //return all of the "groupName" arrays within the object "groups" - in this case, it should be the first two digits of each applicable century
}

var byCentury = groupBy(ancestry, function(person) { //creates a variable called "byCentury" and sets it equal to the Ancestry JSON object
  return Math.ceil(person.died / 100); //grouped by death century for each person
});

for (var century in byCentury) { //WHERE DOES CENTURY COME FROM? for every "century" within the "byCentury" variable
  var ages = byCentury[century].map(function(person) { //copy the Ancestry array (map) sorted "byCentury"
    return person.died - person.born; //return the age of each person at death
  });
  console.log(century + ": " + average(ages)); //log the century with the average age of death
}

//Chapter 5, exercise 4, Every and Then Some
function every(array,argument){
  for(var i = 0; i <= array.length-1; i++){
    if(array[i] === argument){
      return true;
    } else {
      return false;
    }
  }
  if (!false){
    return true;
  } else {
    return false;
  }
}

console.log(every([2,2,2], 2))

function some(array,argument){
  for(var i = 0; i <= array.length-1; i++){
    if(array[i]===argument){
      return true;
    } else {
      return false;
    }
  }
}

console.log(some([6,3,1], 2))

//Chapter 6, Exercise 1, A Vector Type
function Vector(x,y){
  this.x = x;
  this.y = y;
};

Vector.prototype.plus = function(otherVector){
  return new Vector(this.x + otherVector.x, this.y + otherVector.y);
};

Vector.prototype.minus = function(otherVector){
  return new Vector(this.x - otherVector.x, this.y - otherVector.y);
};

//What I did originally
//get: length() {return Math.sqrt((this.x*this.x)+(this.y*this.y));}

//From the author
Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});

console.log(new Vector(1, 2).plus(new Vector(2, 3))); //to test

console.log(new Vector(1, 2).minus(new Vector(2, 3))); //to test

console.log(new Vector(3, 4).length); //to test

//Chapter 6, Exercise 2, Another Cell
//I really didn't understand this one

//Chapter 6, Exercise 3, Sequence Interface
//Honestly as far as I got before tapping out
function logFive(array){
  if(array.length <=5){
    console.log(array);
  } else {
    for( var i = 0; i <= 5; i++){
      console.log(array[i]);
    }
  }
}

ArraySeq = {};

//Chapter 8, Exercise 1, Retry
function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure))
        throw e;
    }
  }
}

console.log(reliableMultiply(8, 8)); //to test with

//Chapter 8, Exercise 2, The Locked Box
var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body){
  try {
    if(box.locked === true){
      box.unlock();
    }
    return body;
  } finally {
    if(box.locked === false){
        box.lock();
    }
  }
}

withBoxUnlocked(function() { //to test with
  box.content.push("gold piece");
});

try { //to test with
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked); //to test with

//Chapter 9, Exercise 1, Regexp Golf
function verify(regexp, yes, no) { //from author to test with
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
  });
}

//car and cat
verify(/ca[rt]/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

//pop and prop
verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop"]);

//ferret, ferry, and ferrari
verify(/ferr(et|y|ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

//Any word ending in ious
verify(/ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

//A whitespace character followed by a dot, comma, colon, or semicolon
verify(/\s[.,:;]/,
       ["bad punctuation ."],
       ["escape the dot"]);

//A word longer than six letters
verify(/\w{7,}/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

//A word without the letter e
verify(/\b[^\We]+\b/i,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);

//Chapter 9, Exercise 2, Quoting Style
var text = "'I'm the cook,' he said, 'it's my job.'";
//replace ' where new string followed by non alphabet character followed by ' OR where ' followed by non alphabet character followed by end of string, globally
console.log(text.replace(/(^\W)'|'(\W/$)/g, '$1"$2')); //I have questions about this

//Chapter 9, Exercise 3, Numbers Again
var number = /^(\+|-|)(\d+(\.\d*)?|\.\d+)([eE](\+|-|)\d+)?$/;

// Tests:
["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
 "1e+12"].forEach(function(s) {
  if (!number.test(s))
    console.log("Failed to match '" + s + "'");
});
["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
 "."].forEach(function(s) {
  if (number.test(s))
    console.log("Incorrectly accepted '" + s + "'");
});

//Chapter 10, Exercise 1, Month Names
var month = function() {
  var names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return {
    name: function(number) { return names[number]; },
    number: function(name) { return names.indexOf(name); }
  };
}();

console.log(month.name(2));
// → March
console.log(month.number("November"));
// → 10

//Chapter 10, Exercise 2, A Return to Electronic Life
//skipping because I skipped Chapter 7 so far

//Chapter 10, Exercise 3, Circular Dependencies
//Thought experiment, has to do with caching

//Chapter 13, Exercise 1, Build A Table
<!doctype html>
<script src="code/mountains.js"></script>
<script src="code/chapter/13_dom.js"></script>

<style>
  /* Defines a cleaner look for tables */
  table  { border-collapse: collapse; }
  td, th { border: 1px solid black; padding: 3px 8px; }
  th     { text-align: left; }
</style>

<body>
<script>
  function buildTable(data) {
    var table = document.createElement("table");

    var fields = Object.keys(data[0]);
    var headRow = document.createElement("tr");
    fields.forEach(function(field) {
      var headCell = document.createElement("th");
      headCell.textContent = field;
      headRow.appendChild(headCell);
    });
    table.appendChild(headRow);

    data.forEach(function(object) {
      var row = document.createElement("tr");
      fields.forEach(function(field) {
        var cell = document.createElement("td");
        cell.textContent = object[field];
        if (typeof object[field] == "number")
          cell.style.textAlign = "right";
        row.appendChild(cell);
      });
      table.appendChild(row);
    });

    return table;
  }

  document.body.appendChild(buildTable(MOUNTAINS));
</script>
</body>

//Chapter 13, Exercise 2, Elements by Tag Name
<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
function byTagName(node, tagName) {
  var found = [];
  tagName = tagName.toUpperCase();

  function explore(node) {
    for (var i = 0; i < node.childNodes.length; i++) {
      var child = node.childNodes[i];
      if (child.nodeType == document.ELEMENT_NODE) {
        if (child.nodeName == tagName)
          found.push(child);
        explore(child);
      }
    }
  }

  explore(node);
  return found;
}

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>

//Chapter 13, Exercise 3, The Cat's Hat
<!doctype html>
<script src="code/mountains.js"></script>
<script src="code/chapter/13_dom.js"></script>

<body style="min-height: 200px">

<img src="img/cat.png" id="cat" style="position: absolute">
<img src="img/hat.png" id="hat" style="position: absolute">

<script>
  var cat = document.querySelector("#cat");
  var hat = document.querySelector("#hat");

  var angle = 0, lastTime = null;
  function animate(time) {
    if (lastTime != null)
      angle += (time - lastTime) * 0.0015;
    lastTime = time;

    cat.style.top = (Math.sin(angle) * 50 + 80) + "px";
    cat.style.left = (Math.cos(angle) * 200 + 230) + "px";
    // By adding π to the angle, the hat ends up half a circle ahead of the cat
    var hatAngle = angle + Math.PI;
    hat.style.top = (Math.sin(hatAngle) * 50 + 80) + "px";
    hat.style.left = (Math.cos(hatAngle) * 200 + 230) + "px";

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
</script>

</body>

//Chapter 14, Exercise 1, Censored Keyboard
<input type="text">
<script>
  var field = document.querySelector("input");
  field.addEventListener("keydown", function(event) {
    if (event.keyCode == "Q".charCodeAt(0) ||
        event.keyCode == "W".charCodeAt(0) ||
        event.keyCode == "X".charCodeAt(0))
      event.preventDefault();
  });
</script>

//Chapter 14, Exercise 2, Mouse Trail
<style>
  .trail { /* className for the trail elements */
    position: absolute;
    height: 6px; width: 6px;
    border-radius: 3px;
    background: teal;
  }
  body {
    height: 300px;
  }
</style>

<script>
  var dots = [];
  for (var i = 0; i < 12; i++) {
    var node = document.createElement("div");
    node.className = "trail";
    document.body.appendChild(node);
    dots.push(node);
  }
  var currentDot = 0;

  addEventListener("mousemove", function(event) {
    var dot = dots[currentDot];
    dot.style.left = (event.pageX - 3) + "px";
    dot.style.top = (event.pageY - 3) + "px";
    currentDot = (currentDot + 1) % dots.length;
  });
</script>

//Chapter 14, Exercise 3, Tabs
<div id="wrapper">
  <div data-tabname="one">Tab one</div>
  <div data-tabname="two">Tab two</div>
  <div data-tabname="three">Tab three</div>
</div>
<script>
  function asTabs(node) {
    var tabs = [];
    for (var i = 0; i < node.childNodes.length; i++) {
      var child = node.childNodes[i];
      if (child.nodeType == document.ELEMENT_NODE)
        tabs.push(child);
    }

    var tabList = document.createElement("div");
    tabs.forEach(function(tab, i) {
      var button = document.createElement("button");
      button.textContent = tab.getAttribute("data-tabname");
      button.addEventListener("click", function() { selectTab(i); });
      tabList.appendChild(button);
    });
    node.insertBefore(tabList, node.firstChild);

    function selectTab(n) {
      tabs.forEach(function(tab, i) {
        if (i == n)
          tab.style.display = "";
        else
          tab.style.display = "none";
      });
      for (var i = 0; i < tabList.childNodes.length; i++) {
        if (i == n)
          tabList.childNodes[i].style.background = "violet";
        else
          tabList.childNodes[i].style.background = "";
      }
    }
    selectTab(0);
  }
  asTabs(document.querySelector("#wrapper"));
</script>

//Chapter 16, Exercise 1, Shapes
<!doctype html>
<script src="code/chapter/15_game.js"></script>
<script src="code/game_levels.js"></script>
<script src="code/chapter/16_canvas.js"></script>

<canvas width="600" height="200"></canvas>
<script>
  var cx = document.querySelector("canvas").getContext("2d");

  function parallelogram(x, y) {
    cx.beginPath();
    cx.moveTo(x, y);
    cx.lineTo(x + 50, y);
    cx.lineTo(x + 70, y + 50);
    cx.lineTo(x - 20, y + 50);
    cx.closePath();
    cx.stroke();
  }
  parallelogram(30, 30);

  function diamond(x, y) {
    cx.translate(x + 30, y + 30);
    cx.rotate(Math.PI / 4);
    cx.fillStyle = "red";
    cx.fillRect(-30, -30, 60, 60);
    cx.resetTransform();
  }
  diamond(140, 30);

  function zigzag(x, y) {
    cx.beginPath();
    cx.moveTo(x, y);
    for (var i = 0; i < 8; i++) {
      cx.lineTo(x + 80, y + i * 8 + 4);
      cx.lineTo(x, y + i * 8 + 8);
    }
    cx.stroke();
  }
  zigzag(240, 20);

  function spiral(x, y) {
    var radius = 50, xCenter = x + radius, yCenter = y + radius;
    cx.beginPath();
    cx.moveTo(xCenter, yCenter);
    for (var i = 0; i < 300; i++) {
      var angle = i * Math.PI / 30;
      var dist = radius * i / 300;
      cx.lineTo(xCenter + Math.cos(angle) * dist,
                yCenter + Math.sin(angle) * dist);
    }
    cx.stroke();
  }
  spiral(340, 20);

  function star(x, y) {
    var radius = 50, xCenter = x + radius, yCenter = y + radius;
    cx.beginPath();
    cx.moveTo(xCenter + radius, yCenter);
    for (var i = 1; i <= 8; i++) {
      var angle = i * Math.PI / 4;
      cx.quadraticCurveTo(xCenter, yCenter,
                          xCenter + Math.cos(angle) * radius,
                          yCenter + Math.sin(angle) * radius);
    }
    cx.fillStyle = "gold";
    cx.fill();
  }
  star(440, 20);
</script>

//Chapter 16, Exercise 2, The Pie Chart
<!doctype html>
<script src="code/chapter/15_game.js"></script>
<script src="code/game_levels.js"></script>
<script src="code/chapter/16_canvas.js"></script>

<canvas width="600" height="300"></canvas>
<script>
  var cx = document.querySelector("canvas").getContext("2d");
  var total = results.reduce(function(sum, choice) {
    return sum + choice.count;
  }, 0);

  var currentAngle = -0.5 * Math.PI;
  var centerX = 300, centerY = 150;

  results.forEach(function(result) {
    var sliceAngle = (result.count / total) * 2 * Math.PI;
    cx.beginPath();
    cx.arc(centerX, centerY, 100,
           currentAngle, currentAngle + sliceAngle);

    var middleAngle = currentAngle + 0.5 * sliceAngle;
    var textX = Math.cos(middleAngle) * 120 + centerX;
    var textY = Math.sin(middleAngle) * 120 + centerY;
    cx.textBaseLine = "middle";
    if (Math.cos(middleAngle) > 0)
      cx.textAlign = "left";
    else
      cx.textAlign = "right";
    cx.font = "15px sans-serif";
    cx.fillStyle = "black";
    cx.fillText(result.name, textX, textY);

    currentAngle += sliceAngle;
    cx.lineTo(centerX, centerY);
    cx.fillStyle = result.color;
    cx.fill();
  });
</script>

//Chapter 16, Exercise 3, Bouncing Ball Animation
<!doctype html>
<script src="code/chapter/15_game.js"></script>
<script src="code/game_levels.js"></script>
<script src="code/chapter/16_canvas.js"></script>

<canvas width="400" height="400"></canvas>
<script>
  var cx = document.querySelector("canvas").getContext("2d");

  var lastTime = null;
  function frame(time) {
    if (lastTime != null)
      updateAnimation(Math.min(100, time - lastTime) / 1000);
    lastTime = time;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  var x = 100, y = 300;
  var radius = 10;
  var speedX = 100, speedY = 60;

  function updateAnimation(step) {
    cx.clearRect(0, 0, 400, 400);
    cx.strokeStyle = "blue";
    cx.lineWidth = 4;
    cx.strokeRect(25, 25, 350, 350);

    x += step * speedX;
    y += step * speedY;
    if (x < 25 + radius || x > 375 - radius)
      speedX = -speedX;
    if (y < 25 + radius || y > 375 - radius)
      speedY = -speedY;
    cx.fillStyle = "red";
    cx.beginPath();
    cx.arc(x, y, radius, 0, 7);
    cx.fill();
  }
</script>

//Chapter 17, Exercise 1, Content Negotiation
function requestAuthor(type) {
  var req = new XMLHttpRequest();
  req.open("GET", "http://eloquentjavascript.net/author", false);
  req.setRequestHeader("accept", type);
  req.send(null);
  return req.responseText;
}

var types = ["text/plain",
             "text/html",
             "application/json",
             "application/rainbows+unicorns"];

types.forEach(function(type) {
  try {
    console.log(type + ":\n", requestAuthor(type), "\n");
  } catch (e) {
    console.log("Raised error: " + e);
  }
});

//Chapter 17, Exericse 2, Waiting for Multiple Promises
function all(promises) {
  return new Promise(function(succeed, fail) {
    var results = [], pending = promises.length;
    promises.forEach(function(promise, i) {
      promise.then(function(result) {
        results[i] = result;
        pending -= 1;
        if (pending == 0)
          succeed(results);
      }, function(error) {
        fail(error);
      });
    });
    if (promises.length == 0)
      succeed(results);
  });
}

// Test code.
all([]).then(function(array) {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise(function(success) {
    setTimeout(function() { success(val); },
               Math.random() * 500);
  });
}
all([soon(1), soon(2), soon(3)]).then(function(array) {
  console.log("This should be [1, 2, 3]:", array);
});
function fail() {
  return new Promise(function(success, fail) {
    fail(new Error("boom"));
  });
}
all([soon(1), fail(), soon(3)]).then(function(array) {
  console.log("We should not get here");
}, function(error) {
  if (error.message != "boom")
    console.log("Unexpected failure:", error);
});

//Chapter 18, Exercise 1, A JavaScript Workbench
<!doctype html>
<script src="code/promise.js"></script>

<textarea id="code">return "hi";</textarea>
<button id="button">Run</button>
<pre id="output"></pre>

<script>
  document.querySelector("#button").addEventListener("click", function() {
    var code = document.querySelector("#code").value;
    var outputNode = document.querySelector("#output");
    try {
      var result = new Function(code)();
      outputNode.innerText = String(result);
    } catch (e) {
      outputNode.innerText = "Error: " + e;
    }
  });
</script>

//Chapter 18, Exercise 2, Autocompletion
<!doctype html>
<script src="code/promise.js"></script>

<input type="text" id="field">
<div id="suggestions" style="cursor: pointer"></div>

<script>
  // Builds up an array with global variable names, like
  // 'alert', 'document', and 'scrollTo'
  var terms = [];
  for (var name in window)
    terms.push(name);

  var textfield = document.querySelector("#field");
  var suggestions = document.querySelector("#suggestions");

  textfield.addEventListener("input", function() {
    var matching = terms.filter(function(term) {
      return term.indexOf(textfield.value) == 0;
    });
    suggestions.textContent = "";
    matching.slice(0, 20).forEach(function(term) {
      var node = document.createElement("div");
      node.textContent = term;
      node.addEventListener("click", function() {
        textfield.value = term;
        suggestions.textContent = "";
      });
      suggestions.appendChild(node);
    });
  });
</script>

//Chapter 18, Exercise 3,
<!doctype html>
<script src="code/promise.js"></script>

<div id="grid"></div>
<button id="next">Next generation</button>
<button id="run">Auto run</button>

<script>
  var width = 30, height = 15;

  // I will represent the grid as an array of booleans.

  var gridNode = document.querySelector("#grid");
  // This holds the checkboxes that display the grid in the document.
  var checkboxes = [];
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var box = document.createElement("input");
      box.type = "checkbox";
      gridNode.appendChild(box);
      checkboxes.push(box);
    }
    gridNode.appendChild(document.createElement("br"));
  }

  function gridFromCheckboxes() {
    return checkboxes.map(function(box) { return box.checked; });
  }
  function checkboxesFromGrid(grid) {
    return grid.forEach(function(value, i) { checkboxes[i].checked = value; });
  }
  function randomGrid() {
    var result = [];
    for (var i = 0; i < width * height; i++)
      result.push(Math.random() < 0.3);
    return result;
  }

  checkboxesFromGrid(randomGrid());

  // This does a two-dimensional loop over the square around the given
  // x,y position, counting all fields that have a cell but are not the
  // center field.
  function countNeighbors(grid, x, y) {
    var count = 0;
    for (var y1 = Math.max(0, y - 1); y1 <= Math.min(height - 1, y + 1); y1++) {
      for (var x1 = Math.max(0, x - 1); x1 <= Math.min(width - 1, x + 1); x1++) {
        if ((x1 != x || y1 != y) && grid[x1 + y1 * width])
          count += 1;
      }
    }
    return count;
  }

  function nextGeneration(grid) {
    var newGrid = new Array(width * height);
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        var neighbors = countNeighbors(grid, x, y);
        var offset = x + y * width;
        if (neighbors < 2 || neighbors > 3)
          newGrid[offset] = false;
        else if (neighbors == 2)
          newGrid[offset] = grid[offset];
        else
          newGrid[offset] = true;
      }
    }
    return newGrid;
  }

  function turn() {
    checkboxesFromGrid(nextGeneration(gridFromCheckboxes()));
  }

  document.querySelector("#next").addEventListener("click", turn);

  var running = null;
  document.querySelector("#run").addEventListener("click", function() {
    if (running) {
      clearInterval(running);
      running = null;
    } else {
      running = setInterval(turn, 400);
    }
  });
</script>
