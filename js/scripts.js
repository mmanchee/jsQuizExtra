function factorial(number) {
  let output = number;
  // console.log(output);
  for (let i = number; i > 1; i--) {
    number--;
    output = output * number;
    // console.log(output);
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
});


