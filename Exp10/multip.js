// multip.js

// Check if the user provided a number as a command line argument
if (process.argv.length !== 3) {
    console.log("Usage: node multip.js <number>");
    process.exit(1);
  }
  
  // Parse the number from the command line argument
  const number = parseInt(process.argv[2]);
  
  if (isNaN(number)) {
    console.log("Please enter a valid number.");
    process.exit(1);
  }
  
  // Generate and print the multiplication table
  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
  }
  