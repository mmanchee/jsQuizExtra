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

function primeShift(input) {
	const primeArrayStatic;
	for (let i = 2; i < input; i++) {
		primeArrayStatic.push(i);
	}

	let primeArray = [];
	let prime = 2;
	primeArrayStatic.forEach(function(num) {
		if (num % prime !== 0 || num === prime) {
			primeArray.push(num);
		}
		prime++;
	})
	return primeArray;
}

function primeShift(input) {
  let primeArray = [];
  let prime = 1;

  for (let i = 2; i < input; i++) {
    prime++;
    for (let e = 2; e < input; e++) {
      if (i % prime === 0 && i !== prime) {
        primeArray.push(i);
      }
    }    
  }
}

recLoop(array, prime, num) {
  
  for (let i = num; i > prime; i--) {

    if ()
  }
  prime++;
  recLoop(array, prime, num);
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
    //alert(input2);
    const result2 = isPalindrome(input2);

    $("#result2").text(result2);
    event.preventDefault();
  });
  $("#userInput3").submit(function(event) {
    const input3 = $("input#input3").val();
    const result3 = primeShift(input3);

    $("#result3").text(result3);
    event.preventDefault();
  });
});


