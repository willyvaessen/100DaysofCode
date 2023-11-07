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
/*  Project 1 code solution from assignment
string? readResult;
string valueEntered = "";
int numValue = 0;
bool validNumber = false;

Console.WriteLine("Enter an integer value between 5 and 10");

do
{
    readResult = Console.ReadLine();
    if (readResult != null)
    {
        valueEntered = readResult;
    }

    validNumber = int.TryParse(valueEntered, out numValue);

    if (validNumber == true)
    {
        if (numValue <= 5 || numValue >= 10)
        {
            validNumber = false;
            Console.WriteLine($"You entered {numValue}. Please enter a number between 5 and 10.");
        }
    }
    else
    {
        Console.WriteLine("Sorry, you entered an invalid number, please try again");
    }
} while (validNumber == false);

Console.WriteLine($"Your input value ({numValue}) has been accepted.");

readResult = Console.ReadLine();
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
/*  Project 2 code from assignment
string? readResult;
string roleName = "";
bool validEntry = false;

do
{
    Console.WriteLine("Enter your role name (Administrator, Manager, or User)");
    readResult = Console.ReadLine();
    if (readResult != null)
    {
        roleName = readResult.Trim();
    }

    if (roleName.ToLower() == "administrator" || roleName.ToLower() == "manager" || roleName.ToLower() == "user")
    {
        validEntry = true;
    }
    else
    {
        Console.Write($"The role name that you entered, \"{roleName}\" is not valid. ");
    }

} while (validEntry == false);

Console.WriteLine($"Your input value ({roleName}) has been accepted.");
readResult = Console.ReadLine();
*/
/*  Code project 3 - Write code that processes the contents of a string array
string[] myStrings = new string[2] { "I like pizza. I like roast chicken. I like salad", "I like all three of the menu choices" };

foreach (string myString in myStrings) {
    Console.WriteLine(myString);
    int periodLocation = myString.IndexOf(".");
    do {
        Console.WriteLine(myString.Substring(0, periodLocation));
    myString.Remove(0, periodLocation);
    Console.WriteLine(myString.Remove(0, (periodLocation + 1)).TrimStart());
    string newString = myString.Remove(0, (periodLocation + 1)).TrimStart();
    // Console.WriteLine("The period is located at index " + periodLocation);
    } while (periodLocation >= 0);
}
*/
/*  Project 3 code friom assignment
string[] myStrings = new string[2] { "I like pizza. I like roast chicken. I like salad", "I like all three of the menu choices" };
int stringsCount = myStrings.Length;

string myString = "";
int periodLocation = 0;

for (int i = 0; i < stringsCount; i++)
{
    myString = myStrings[i];
    periodLocation = myString.IndexOf(".");

    string mySentence;

    // extract sentences from each string and display them one at a time
    while (periodLocation != -1)
    {

        // first sentence is the string value to the left of the period location
        mySentence = myString.Remove(periodLocation);

        // the remainder of myString is the string value to the right of the location
        myString = myString.Substring(periodLocation + 1);

        // remove any leading white-space from myString
        myString = myString.TrimStart();

        // update the comma location and increment the counter
        periodLocation = myString.IndexOf(".");

        Console.WriteLine(mySentence);
    }

    mySentence = myString.Trim();
    Console.WriteLine(mySentence);
}
*/