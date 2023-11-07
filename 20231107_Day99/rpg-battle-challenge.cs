//  Exercise - Complete a challenge activity using do and while iteration statements

//      Role playing game battle challenge

//  The attack is a random number from 1-10
Random attackPower = new Random();
int attack = attackPower.Next(1, 11);

//  I need two players: a Monster and a Hero, each starts with an amount of healt:
int heroHealth = 10;
int heroAttack;
int monsterAttack;
int monsterHealth = 10;

while ((heroHealth > 0) && (monsterHealth > 0)) {
        heroAttack = attackPower.Next(1,11);
        monsterHealth -= heroAttack;
        Console.WriteLine($"Monster was damaged and lost {heroAttack} health and now has {monsterHealth} health.");
        monsterAttack = attackPower.Next(1,11);
        heroHealth -= monsterAttack;
        Console.WriteLine($"Hero was damaged and lost {monsterAttack} health and now has {heroHealth} health.");
    }

/*  Review the solution to do and while challenge activity
int hero = 10;
int monster = 10;

Random dice = new Random();

do
{
    int roll = dice.Next(1, 11);
    monster -= roll;
    Console.WriteLine($"Monster was damaged and lost {roll} health and now has {monster} health.");

    if (monster <= 0) continue;

    roll = dice.Next(1, 11);
    hero -= roll;
    Console.WriteLine($"Hero was damaged and lost {roll} health and now has {hero} health.");

} while (hero > 0 && monster > 0);

Console.WriteLine(hero > monster ? "Hero wins!" : "Monster wins!");
*/