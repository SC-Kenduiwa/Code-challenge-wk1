//input net salary
const readline = require('readline-sync');//required to run the programm and displays enter message in the terminal

function calculateNetSalary(basicSalary, benefits) {//used to calc the tax rate,NHIF rate NSSFD rate
    // Constants for tax rates and deductions
    const TAX_RATE = 0.15;
    const NHIF_RATE = 0.025;
    const NSSFD_RATE = 0.06;

    // Calculate gross salary
    const grossSalary = (basicSalary + benefits).toFixed(2);//used to tell a computer working with a whole number

    // Calculate deductions
    const taxDeduction = (grossSalary * TAX_RATE).toFixed(2);
    const nhifDeduction = (grossSalary * NHIF_RATE).toFixed(2);
    const nssfDeduction = (grossSalary * NSSFD_RATE).toFixed(2);

    // Calculate net salary
    const netSalary = (grossSalary - taxDeduction - nhifDeduction - nssfDeduction).toFixed(2);//telling the computer we are working with whole numbers not decimals

    return {
        'Gross Salary': grossSalary,
        'Payee (Tax)': taxDeduction,
        'NHIF Deductions': nhifDeduction,
        'NSSF Deductions': nssfDeduction,
        'Net Salary': netSalary
    };
}

// Example usage
const basicSalary = parseFloat(readline.question("Enter basic salary: "));//used to ask question 
//used to assign a number to a variable

const benefits = parseFloat(readline.question("Enter benefits: "));

const result = calculateNetSalary(basicSalary, benefits);
//takes function in line 4 to assign the variable which will later display the result at the terminal

// Display results
for (const key in result) {//used to display results
    console.log(`${key}: ${result[key]}`);
}