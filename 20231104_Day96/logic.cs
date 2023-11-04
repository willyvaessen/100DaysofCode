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

/*  Exercise - Complete a challenge activity using conditional operators

//      Conditional operator challenge
//      Code challenge: write code to display the result of a coin flip

//  Use the Random class to generate a value.
Random coin = new Random();

int coinFlip = coin.Next(2);
 Console.WriteLine($"Result: {(coinFlip == 0 ? "Heads" : "Tails") }");

*/

//  Exercise - Complete a challenge activity using conditional operators

//      Decision logic challenge

string permission = "Admin";
int level = 55;

//  First: check if the user is an admin or manager
if (!permission.Contains("Admin") || !permission.Contains("Manager"))
{
    //  Not Admin or Manager:
    Console.WriteLine("You do not have sufficient privileges.");
}

else

{
    //  Admin or Manager profile detected
    //  Now determine level of access.
    if ((level > 55 ) && (permission.Contains("Admin")))
    {
        Console.WriteLine("Welcome, Super Admin user.");
    }
    else if ((level <= 55 ) && (permission.Contains("Admin")))
    {
        Console.WriteLine("Welcome, Admin user.");
    }
    if ((level >= 20 ) && (permission.Contains("Manager")))
    {
        Console.WriteLine("Contact an Admin for access.");
    }
    if ((level < 20 ) && (permission.Contains("Manager")))
    {
        Console.WriteLine("You do not have sufficient privileges.");
    }

}


/*  Assigment solution provided:
string permission = "Admin|Manager";
int level = 53;

if (permission.Contains("Admin"))
{
    if (level > 55)
    {
        Console.WriteLine("Welcome, Super Admin user.");
    }
    else
    {
        Console.WriteLine("Welcome, Admin user.");
    }
}
else if (permission.Contains("Manager"))
{
    if (level >= 20)
    {
        Console.WriteLine("Contact an Admin for access.");
    }
    else
    {
        Console.WriteLine("You do not have sufficient privileges.");
    }
}
else
{
    Console.WriteLine("You do not have sufficient privileges.");
}
*/