	
	function performOperation() {
	// Get user input from input fields
	let num1 = parseInt(document.getElementById('input1').value);
	let num2 = parseInt(document.getElementById('input2').value);
	// Check if inputs are valid numbers
	if (!isNaN(num1) && !isNaN(num2)) {
	// Perform the operation
					let additionResult = add(num1, num2);
                    let multiplicationResult = multiply(num1, num2);
                    let divisionResult = divide(num1, num2);

					// Display the result
					displayResult(additionResult, multiplicationResult, divisionResult);
				} else {
					displayResult('Please enter valid numbers');
				}
			}

            function add(a, b) {
                // Introduce a debugger statement to pause execution
				debugger;

				// Add the numbers
				return a + b;
            }

			function multiply(a, b) {
				// Introduce a debugger statement to pause execution
				debugger;

				// Multiply the numbers
				return a * b;
			}

            function divide(a, b) {
				// Introduce a debugger statement to pause execution
				debugger;

				// Divide a by b
				return a / b;
			}

			function displayResult(additionResult, multiplicationResult, divisionResult) {
				// Display the result in the paragraph element
				const resultElement = document.getElementById('result');

                if(isNaN(parseInt(additionResult))) {
                    resultElement.textContent = additionResult;
                } else {
				resultElement.innerHTML =  `- Addition result: ${additionResult}<br>
                                            - Multiplication result: ${multiplicationResult}<br>
                                            - Division result: ${divisionResult}<br>`;
			}
        }
		
