//  Exercise - Complete a challenge activity using for and if statements

//      FizzBuzz challenge
//      FizzBuzz is a popular coding challenge and interview question.
//      It exercises your understanding of the for statement, the if statement,
//      the % remainder operator, and your command of basic logic.

/*  Here are the FizzBuzz rules that you need to implement in your code project:

    Output values from 1 to 100, one number per line, inside the code block of
    an iteration statement.
    When the current value is divisible by 3, print the term Fizz next to the
    number.
    When the current value is divisible by 5, print the term Buzz next to the
    number.
    When the current value is divisible by both 3 and 5, print the term FizzBuzz
    next to the number.
*/

//  For scalability, I'll declare a variable for the highest number.
int maxNumber = 100; //  Challenge is for 100, example goes to 22

//  First create a loop
for (int i = 1; i <= maxNumber; i++)
{
    if ((i % 3 == 0) && (i % 5 == 0))
    {
        Console.WriteLine(i + " - FizzBuzz");
    }
    else if (i % 3 == 0)
    {
        Console.WriteLine(i + " - Fizz");
    }
    else if (i % 5 == 0)
    {
        Console.WriteLine(i + " - Buzz");
    }
    else
    {
        Console.WriteLine(i);
    }
}

