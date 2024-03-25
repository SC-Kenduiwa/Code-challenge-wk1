//input net salary
const readline = require('readline-sync');//required to run the programm and displays enter message in the terminal

function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates and deductions
    const TAX_RATE = 0.15;
    const NHIF_RATE = 0.025;
    const NSSFD_RATE = 0.06;

    // Calculate gross salary
    const grossSalary = (basicSalary + benefits).toFixed(2);

    // Calculate deductions
    const taxDeduction = (grossSalary * TAX_RATE).toFixed(2);
    const nhifDeduction = (grossSalary * NHIF_RATE).toFixed(2);
    const nssfDeduction = (grossSalary * NSSFD_RATE).toFixed(2);

    // Calculate net salary
    const netSalary = (grossSalary - taxDeduction - nhifDeduction - nssfDeduction).toFixed(2);

    return {
        'Gross Salary': grossSalary,
        'Payee (Tax)': taxDeduction,
        'NHIF Deductions': nhifDeduction,
        'NSSF Deductions': nssfDeduction,
        'Net Salary': netSalary
    };
}

// Example usage
const basicSalary = parseFloat(readline.question("Enter basic salary: "));
const benefits = parseFloat(readline.question("Enter benefits: "));

const result = calculateNetSalary(basicSalary, benefits);

// Display results
for (const key in result) {
    console.log(`${key}: ${result[key]}`);
}