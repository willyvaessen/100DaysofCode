//  Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 65, high: 78 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  const { today: { low: lowToday, high: highToday}} = LOCAL_FORECAST;
  // const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

// Only change code above this line

console.log(LOCAL_FORECAST.today);

//  Original code from assignment:

//  const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;


//  Use Destructuring Assignment to Assign Variables from Arrays

let a = 8, b = 6;
// Only change code below this line

[a, b] = [b, a];

console.log(a, b);


//  Destructuring via rest elements


function removeFirstTwo(list) {
  // return list;
  const [a, b, ...arr] = list;

  return arr;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

console.log(sourceWithoutFirstTwo);



//  Use Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max, min}) => (max + min) /2;

// Only change code above this line
console.log(half);
//  Original code from assignment:
//  const half = (stats) => (stats.max + stats.min) / 2.0;