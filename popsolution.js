//change 5 to the total number of questions
var total=5
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Way to Cha-cha-cha to the answer!"
compliments[1]="Jiving to the correct Answer!"
compliments[2]="No Rumba for improvement, CORRECT!"
compliments[3]="All 10s! Correct!"
compliments[4]="Top of the leaderboard!"
compliments[5]="Quickstep to victory!"
compliments[6]="Samba for the win!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="When did the first season of Dancing With The Stars premiere?"
choice1[1]="2005"
choice1[2]="2006"
choice1[3]="2007"
choice1[4]="2008"

question[2]="Who was the first winner of Dancing With The Stars?"
choice2[1]="Drew Lachey"
choice2[2]="Joey Fatone"
choice2[3]="Chris Pratt"
choice2[4]="Kelly Monaco"

question[3]="What is the Dancing With The Stars trophy called?"
choice3[1]="The Mirrorball"
choice3[2]="The Discoball"
choice3[3]="The Golden Shoes"
choice3[4]="The Platinum Globe"

question[4]="Which pro dancer has won the most times?"
choice4[1]="Val Chmerkovskiy"
choice4[2]="Julianne Hough"
choice4[3]="Derek Hough"
choice4[4]="Ezra Sosa"

question[5]="Who won the most recent season of Dancing With The Stars?"
choice5[1]="Jason Mraz"
choice5[2]="Xochitl Gomez"
choice5[3]="Charli D'Amelio"
choice5[4]="JoJo Siwa"

solution[1]="a"
solution[2]="d"
solution[3]="a"
solution[4]="c"
solution[5]="b"

