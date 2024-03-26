///function used to determine grade
function calculateGrade(mark) {
    if (mark > 79) return 'A';   // If mark is greater than 79, return 'A'
    if (mark >= 60) return 'B';  //If mark is between 60 and 79 (inclusive), return 'B'
    if (mark >= 49) return 'C';  // If mark is between 49 and 59 (inclusive), return 'C'
    if (mark >= 40) return 'D';  // If mark is between 40 and 49 (inclusive), return 'D'
    else {
        return 'E';               // If mark is less than 40, return 'E'
                 }            
}
function main() {
    const readline = require('readline').createInterface({//read input from terminal
        input: process.stdin,//using the keyboard
        output: process.stdout//using the terminal
    });
    readline.question("Enter the student's mark (between 0 and 100): ", mark => {//starting the session
        mark = parseFloat(mark);
        if (!isNaN(mark) && mark >= 0 && mark <= 100) {//checking to see if a number btwn 0-100 is entered
            const grade = calculateGrade(mark);//declaring the variable grade to a function that will cal the grades
            console.log(`The student's grade is: ${grade}`);//console logging variable grade
        } else {
            console.log("Invalid input! Please enter a mark between 0 and 100.");//checking for errors based on line 17
        }
        readline.close();//ending the session
    });

}
main();//call the main function to start the program/prompt the user to input the marks
