//  Add looping logic to your code using the do-while and while statements in C#

/*  Exercise - Create do and while iteration loops

do
{
    // This code executes at least one time
} while (true);
*/
/*  Write a do-while statement to break when a certain random number is generated

Random random = new Random();
int current = 0;

do
{
    current = random.Next(1, 11);
    Console.WriteLine(current);
} while (current != 7);

*/
/*  Write a while statement that iterates only while a random number is greater than some value
Random random = new Random();
int current = random.Next(1, 11);

while (current >= 3)
{
    Console.WriteLine(current);
    current = random.Next(1, 11);
}
Console.WriteLine($"Last number: {current}");

*/
/*  Use the continue statement to step directly to the Boolean expression
Random random = new Random();
int current = random.Next(1, 11);

do
{
    current = random.Next(1, 11);

    if (current >= 8) continue;

    Console.WriteLine(current);
} while (current != 7);
*/

