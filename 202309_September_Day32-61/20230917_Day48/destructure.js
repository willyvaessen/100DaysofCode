//  Use Destructuring Assignment to Extract Values from Objects

const HIGH_TEMPERATURES1 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const { today, tomorrow } = HIGH_TEMPERATURES1;

// Only change code above this line

//  Original Code from assignment:
// const today = HIGH_TEMPERATURES1.today;
// const tomorrow = HIGH_TEMPERATURES1.tomorrow;


//  Use Destructuring Assignment to Assign Variables from Objects

const HIGH_TEMPERATURES2 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const { today:highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES2;

// Only change code above this line

//  Original Code from assignment:
// const highToday = HIGH_TEMPERATURES2.today;
// const highTomorrow = HIGH_TEMPERATURES2.tomorrow;