$(document).ready(function() {
  $("#userInput").submit(function(event) {
    const input1 = parseInt($("input#input1").val());

    if (isNaN(input1)) {
      alert("Please enter a number and try again.");
    } else {
      const result1 = factorial(input1);

      $("#result").text(result1);
    }    
    
    event.preventDefault();
  });
});


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