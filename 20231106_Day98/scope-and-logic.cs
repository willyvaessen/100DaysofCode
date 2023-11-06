//  Control Variable Scope and Logic Using Code Blocks in C#

/*  Exercise - Code blocks and variable scope
bool flag = true;
int value = 0;


if (flag)
{
    value = 11;
    Console.WriteLine("Inside of code block: " + value);
}

Console.WriteLine($"Outside of code block: {value}");
*/

/*  Exercise - Remove code blocks from if statements
// bool flag = true;
// if (flag)
// // {
//     Console.WriteLine(flag);
// // }

string name = "steve";
if (name == "bob") Console.WriteLine("Found Bob");
else if (name == "steve") Console.WriteLine("Found Steve");
else Console.WriteLine("Found Chuck");
*/


//  Exercise - Complete a challenge activity using variable scope
int[] numbers = { 4, 8, 15, 16, 23, 42 };
int total =0;   //  Added the declaration here
bool found = false;

foreach (int number in numbers)
{    // int total;  // Commented this one out and placed it outside the code block.

    total += number;

    if (number == 42)
       found = true;
}

if (found)
    Console.WriteLine("Set contains 42");

Console.WriteLine($"Total: {total}");