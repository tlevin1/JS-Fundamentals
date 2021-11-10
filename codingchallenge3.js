/*Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK */ 

// 1
const dolphinsScore1 = 96;
const dolphinsScore2 = 108;
const dolphinsScore3 = 89;

const koalasScore1 = 88;
const koalasScore2 = 91;
const koalasScore3 = 110;

const dolphinAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3)/3;
const koalaAverage = (koalasScore1 + koalasScore2 + koalasScore3)/3;

console.log(`Round 1 - Dolphin Score: ${dolphinAverage} Koalas Score: ${koalaAverage}`);

if (dolphinAverage > koalaAverage){
    console.log(`Dolphins win with a score of ${dolphinAverage}`);
}

else if (dolphinAverage <  koalaAverage){
    console.log(`Koalas win with a score of ${koalaAverage}`);
}
else{
    console.log(`Its a draw ${koalaAverage} and ${dolphinAverage}`)
}



//3
const dBonusScore1 = 97;
const dBonusScore2 = 112;
const dBonusScore3 = 101;

const kBonusScore1 = 109;
const kBonusScore2 = 95;
const kBonusScore3 = 123;

const minScore = 100;

const dBonusAverage = (dBonusScore1 + dBonusScore2 + dBonusScore3)/3;
const kBonusAverage = (kBonusScore1 + kBonusScore2 + kBonusScore3)/3;

console.log(`Round 2 - Dolphin Score: ${dBonusAverage} Koalas Score: ${kBonusAverage}`);

if (dBonusAverage > kBonusAverage && dBonusAverage >= minScore){
    console.log(`Dolphins win with a score of ${dBonusAverage}`);
}
else if(dBonusAverage < kBonusAverage && kBonusAverage >= minScore){
    console.log(`Koalas win with a score of ${kBonusAverage}`);
}

else {
    console.log(`Its a Draw! ${kBonusAverage} : ${dBonusAverage}`);
}


//4

const dBonus2Score1 = 97;
const dBonus2Score2 = 112;
const dBonus2Score3 = 101;

const kBonus2Score1 = 109;
const kBonus2Score2 = 95;
const kBonus2Score3 = 106;


const dBonus2Average = (dBonus2Score1 + dBonus2Score2 + dBonus2Score3)/3;
const kBonus2Average = (kBonus2Score1 + kBonus2Score2 + kBonus2Score3)/3;

console.log(`Round 3 - Dolphin Score: ${dBonus2Average} Koalas Score: ${kBonus2Average}`);

if (dBonus2Average > kBonus2Average && dBonus2Average >= minScore){
    console.log(`Dolphins win with a score of ${dBonus2Average}`);
}
else if(dBonus2Average < kBonus2Average && kBonus2Average >= minScore){
    console.log(`Koalas win with a score of ${kBonus2Average}`);
}

else if (dBonus2Average === kBonus2Average && dBonus2Average >= minScore){
    console.log(`Its a Draw! ${kBonus2Average} : ${dBonus2Average}`);
}
else{
    console.log(`Average scores doesn't meet min requirement, no team wins :(`);
}