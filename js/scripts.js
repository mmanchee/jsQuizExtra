function factorial(number) {
  let output = number;
  for (let i = number; i > 1; i--) {
    number--;
    output = output * number;
  }
  return output;
}

function isPalindrome(inputA) {
  inputA = inputA.toUpperCase();
  let inputB = inputA.split("").reverse().join("");
  let message;
  if (inputA === inputB) {
    message = "Yes, it is a palendrome.";
  } else {
    message = "No, it is not a palendrome.";
  }
  return message;
}

// function primeShift(input) {
// 	const primeArrayStatic;
// 	for (let i = 2; i < input; i++) {
// 		primeArrayStatic.push(i);
// 	}

// 	let primeArray = [];
// 	let prime = 2;
// 	primeArrayStatic.forEach(function(num) {
// 		if (num % prime !== 0 || num === prime) {
// 			primeArray.push(num);
// 		}
// 		prime++;
// 	})
// 	return primeArray;
// }

// function primeShift(input) {
//   const primeArray = [];
// 	for (let i = 1; i <= input; i++) {
// 		primeArray.push(i);
//   }
//   recLoop(primeArray, 2, input); 
// }

function recLoop(array, prime, input) {
  if (array === 0) {
    array = [];
    for (let i = 1; i <= input; i++) {
      array.push(i);
    }
    recLoop(array, prime, input);
  } else if (prime <= input) {
    let newArray = [];
    array.forEach(function(num){
      if (num % prime !== 0 || num === prime) {
        newArray.push(num);
      }
    });
    prime++;
    recLoop(newArray, prime, input);
  } else {
    $("#result3").text(array);
  } 
}


$(document).ready(function() {
  $("#userInput1").submit(function(event) {
    const input1 = parseInt($("input#input1").val());

    if (isNaN(input1)) {
      alert("Please enter a number and try again.");
    } else {
      const result1 = factorial(input1);

      $("#result1").text(result1);
    }    
    
    event.preventDefault();
  });
  $("#userInput2").submit(function(event) {
    const input2 = $("input#input2").val();
    const result2 = isPalindrome(input2);

    $("#result2").text(result2);
    event.preventDefault();
  });
  $("#userInput3").submit(function(event) {
    const input3 = $("input#input3").val();
    const result3 = recLoop(0, 2, input3);

    $("#result3").text(result3);
    event.preventDefault();
  });
});


