//  Exercise - Complete a challenge activity to differentiate between do and
//      while iteration statements

/*  Examine the difference between do and while statement iterations

As you have seen, C# supports four types of iteration statements: for, foreach, do-while, and while. Microsoft's language reference documentation describes these statements as follows:

    The for statement: executes its body while a specified Boolean expression (the 'condition') evaluates to true.
    The foreach statement: enumerates the elements of a collection and executes its body for each element of the collection.
    The do-while statement: conditionally executes its body one or more times.
    The while statement: conditionally executes its body zero or more times.
*/
/*
string? readResult;
Console.WriteLine("Enter a string:");
do
{
    readResult = Console.ReadLine();
} while (readResult == null);
*/
/*
string? readResult;
bool validEntry = false;
Console.WriteLine("Enter a string containing at least three characters:");
do
{
    readResult = Console.ReadLine();
    if (readResult != null)
    {
        if (readResult.Length >= 3)
        {
            validEntry = true;
        }
        else
        {
            Console.WriteLine("Your input is invalid, please try again.");
        }
    }
} while (validEntry == false);
*/

/*  Capture user input in a string variable named readResult
int numericValue = 0;
bool validNumber = false;

validNumber = int.TryParse(readResult, out numericValue);
*/

/*  Code project 1 - write code that validates integer input