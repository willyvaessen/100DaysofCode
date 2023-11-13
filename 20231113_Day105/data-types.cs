//  Work with Variable Data in C# Console Applications

/*  Signed integral types
Console.WriteLine("Signed integral types:");

Console.WriteLine($"sbyte  : {sbyte.MinValue} to {sbyte.MaxValue}");
Console.WriteLine($"short  : {short.MinValue} to {short.MaxValue}");
Console.WriteLine($"int    : {int.MinValue} to {int.MaxValue}");
Console.WriteLine($"long   : {long.MinValue} to {long.MaxValue}");
*/
/*  Unsigned integral types
Console.WriteLine("");
Console.WriteLine("Unsigned integral types:");

Console.WriteLine($"byte   : {byte.MinValue} to {byte.MaxValue}");
Console.WriteLine($"ushort : {ushort.MinValue} to {ushort.MaxValue}");
Console.WriteLine($"uint   : {uint.MinValue} to {uint.MaxValue}");
Console.WriteLine($"ulong  : {ulong.MinValue} to {ulong.MaxValue}");
*/
/*  Floating point types
Console.WriteLine("");
Console.WriteLine("Floating point types:");

Console.WriteLine($"float  : {float.MinValue} to {float.MaxValue} (with ~6-9 digits of precision)");
Console.WriteLine($"double : {double.MinValue} to {double.MaxValue} (with ~15-17 digits of precision)");
Console.WriteLine($"decimal: {decimal.MinValue} to {decimal.MaxValue} (with 28-29 digits of precision)");
*/
/*  Exercise - Discover reference types
int[] data = new int[3];
*/

//  Convert data types using casting and conversion techniques in C#
//  Exercise - Explore data type casting and conversion
/*      Question: Is it possible that attempting to change the value's data
/      type would throw an exception at run time?
int first = 2;
string second = "4";
int result = first + second;
Console.WriteLine(result);
//  Results in: error CS0029: Cannot implicitly convert type 'string' to 'int'
*/
/*  This works, but uses safe data conversions
int first = 2;
string second = "4";
string result = first + second;
Console.WriteLine(result);
*/
//      Question: Is it possible that attempting to change the value's data
//      type would result in a loss of information?
/*  Implicit conversion.
int myInt = 3;
Console.WriteLine($"int: {myInt}");

decimal myDecimal = myInt;
Console.WriteLine($"decimal: {myDecimal}");
*/
/*  Explicit conversion.

decimal myDecimal = 3.14m;
Console.WriteLine($"decimal: {myDecimal}");

int myInt = (int)myDecimal;
Console.WriteLine($"int: {myInt}");
*/
/*  Casting decimal into float
decimal myDecimal = 1.23456789m;
float myFloat = (float)myDecimal;

Console.WriteLine($"Decimal: {myDecimal}");
Console.WriteLine($"Float  : {myFloat}");
*/
//  Performing Data Conversions
/*  Use ToString() to convert a number to a string
int first = 5;
int second = 7;
string message = first.ToString() + second.ToString();
Console.WriteLine(message);
*/
/*  Convert a string to an int using the Parse() helper method
string first = "5";
string second = "7";
int sum = int.Parse(first) + int.Parse(second);
Console.WriteLine(sum);
*/
/*  Convert a string to a int using the Convert class
string value1 = "5";
string value2 = "7";
int result = Convert.ToInt32(value1) * Convert.ToInt32(value2);
Console.WriteLine(result);
*/
/*  Compare casting and converting a decimal into an int
int value = (int)1.5m;  //  Casting truncates
Console.WriteLine(value);

int value2 = Convert.ToInt32(1.5m); //  Converting rounds up
Console.WriteLine(value2);
*/
/*  Exercise - Examine the TryParse() method
//  string name = "Bob";
//  Console.WriteLine(int.Parse(name));
string value = "bad";
int result = 0;
if (int.TryParse(value, out result))
{
    Console.WriteLine($"Measurement: {result}");
}
else
{
    Console.WriteLine("Unable to report the measurement.");
}
if (result >0)
    Console.WriteLine($"Measurement (w/ offset): {50 + result}");
*/
/*  Exercise - Complete a challenge to combine string array values as strings and as integers
//  My solution
string[] values = { "12.3", "45", "ABC", "11", "DEF" };
decimal result = 0;
decimal total = 0;
string message = "";

foreach (string value in values) {
    // Console.WriteLine(value);
    if (decimal.TryParse(value, out result)) {
        total += result;
        // Console.WriteLine(result);
    } else {
        message += value;
    }
}

Console.WriteLine($"Message: {message}");
Console.WriteLine($"Total: {total}");
*/
/*  Review a solution for combining string array values as strings and as integers challenge
//  Solution provided by Microsoft:
string[] values = { "12.3", "45", "ABC", "11", "DEF" };

decimal total = 0m;
string message = "";

foreach (var value in values)
{
    decimal number; // stores the TryParse "out" value
    if (decimal.TryParse(value, out number))
    {
        total += number;
    } else
    {
        message += value;
    }
}

Console.WriteLine($"Message: {message}");
Console.WriteLine($"Total: {total}");
*/
//  Exercise - Complete a challenge to output math operations as specific number types
//  My solution
int value1 = 12;
decimal value2 = 6.2m;
float value3 = 4.3f;

// Your code here to set result1
// Hint: You need to round the result to nearest integer (don't just truncate)
int result1 = value1 / Convert.ToInt32(value2);
Console.WriteLine($"Divide value1 by value2, display the result as an int: {result1}");

// Your code here to set result2
decimal result2 = value2 / (decimal)value3;
Console.WriteLine($"Divide value2 by value3, display the result as a decimal: {result2}");

// Your code here to set result3
float result3 = value3 / (float)value1;
Console.WriteLine($"Divide value3 by value1, display the result as a float: {result3}");
/*  Review a solution
//  Solution provided by Microsoft
int value1 = 12;
decimal value2 = 6.2m;
float value3 = 4.3f;

// The Convert class is best for converting the fractional decimal numbers into whole integer numbers
// Convert.ToInt32() rounds up the way you would expect.
int result1 = Convert.ToInt32((decimal)value1 / value2);
Console.WriteLine($"Divide value1 by value2, display the result as an int: {result1}");

decimal result2 = value2 / (decimal)value3;
Console.WriteLine($"Divide value2 by value3, display the result as a decimal: {result2}");

float result3 = value3 / value1;
Console.WriteLine($"Divide value3 by value1, display the result as a float: {result3}");
*/