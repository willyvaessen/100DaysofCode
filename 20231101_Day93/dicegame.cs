//  C# -if-elseif-else
//  For this lessen I will be creating a dice game.
Random dice = new Random();
int roll1 = dice.Next(1,7);
int roll2 = dice.Next(1,7);
int roll3 = dice.Next(1,7);

int totalScore = roll1 + roll2 + roll3;

if ((roll1 == roll2) || (roll2 == roll3) || (roll1 == roll3))
{
    if ((roll1 == roll2) && (roll2 == roll3))
    {
        Console.WriteLine(" You rolled triples! +6 bonus to total.");
        totalScore += 6;
    } else {

    Console.WriteLine("You rolled doubles! +2 bonus to total!");
    totalScore += 2;
}
}


Console.WriteLine($"Dice roll: {roll1} + {roll2} + {roll3} = {totalScore}");

if (totalScore >= 16)
{
    Console.WriteLine("You win a car!");
} else if (totalScore >=10)
{
    Console.WriteLine("You win a laptop.");
} else if (totalScore >=7)
{
    Console.WriteLine("You win a trip.");
} else {
    Console.WriteLine("You win a kitten.");
}