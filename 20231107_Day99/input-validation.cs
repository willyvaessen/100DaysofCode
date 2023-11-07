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
string? readResult;
int numericValue = 0;
bool validInt = false;
Console.WriteLine("Enter an integer between 5 and 10:");
do {
    readResult = Console.ReadLine();
    // Console.WriteLine(int.TryParse(readResult, out numericValue));
    if (int.TryParse(readResult, out numericValue)) {
        // Console.WriteLine("Integer entered is: " + numericValue);
        if ((numericValue < 5) || (numericValue > 10)) {
            // Console.WriteLine("Enter an integer between 5 and 10:");
        } else if ((numericValue >= 5) || (numericValue <= 10)) {
            Console.WriteLine($"Your input value ({numericValue}) has been accepted.");
            validInt = true;
        } else {
            Console.WriteLine("Not sure what you're doing, but it's not right.");
        }
    } else {
        Console.WriteLine("Enter a valid integer.");
    }

} while (validInt == false);
*/
/*  Code project 2 - write code that validates string input
string? readResult;
bool validInput = false;
Console.WriteLine("Enter your role (Adminstrator, Manager or User): ");
do {
    readResult = Console.ReadLine();
    if ((readResult.Trim().ToLower() == "administrator") || (readResult.Trim().ToLower() == "manager") || (readResult.Trim().ToLower() == "user")) {
        Console.WriteLine($"Your input ({readResult}) has been accepted.");
        validInput = true;
    } else {
        Console.WriteLine($"The role name that you entered, \"{readResult}\" is not valid. Enter your role name (Administrator, Manager, or User)");
    }

} while (validInput == false);
*/

