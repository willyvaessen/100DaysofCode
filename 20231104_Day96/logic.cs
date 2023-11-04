//  Add Logic to C# Console Applications

//  Unlock the power of logic in C# console applications. Learn how to add logic and decision-making capabilities to your code, enabling your applications to make dynamic choices and respond intelligently to different scenarios.
//  Evaluate Boolean expressions to make decisions in C#

/*      Exercise - Evaluate an expression
Console.WriteLine("a" == "a");
Console.WriteLine("a" == "A");
Console.WriteLine(1 == 2);

string myValue01 = "a";
Console.WriteLine(myValue01 == "a");

//  Improve the check for string equality using the string's built-in helper methods
string value1 = " a";
string value2 = "A ";
Console.WriteLine(value1.Trim().ToLower() == value2.Trim().ToLower());

//  Use the inequality operator
Console.WriteLine("a" != "a");
Console.WriteLine("a" != "A");
Console.WriteLine(1 != 2);

string myValue02 = "a";
Console.WriteLine(myValue02 != "a");


//  Use the Comparison operators
Console.WriteLine(1 > 2);
Console.WriteLine(1 < 2);
Console.WriteLine(1 >= 1);
Console.WriteLine(1 <= 1);


//  Use a method that returns a Boolean
string pangram = "The quick brown fox jumps over the lazy dog.";
Console.WriteLine(pangram.Contains("fox"));
Console.WriteLine(pangram.Contains("cow"));

// These two lines of code will create the same output (Logical Negation)
Console.WriteLine(pangram.Contains("fox") == false);
Console.WriteLine(!pangram.Contains("fox"));

string pangram = "The quick brown fox jumps over the lazy dog.";
Console.WriteLine(!pangram.Contains("fox"));
Console.WriteLine(!pangram.Contains("cow"));
*/

/*      Exercise - Implement the conditional operator
int saleAmount = 999;
//  variable   <   condition   > ? <true>:<false>
int discount = saleAmount > 1000 ? 100 : 50;
Console.WriteLine($"Discount: {discount}");
//  Inline:
Console.WriteLine($"Discount: {(saleAmount > 1000 ? 100 : 50)}");
*/