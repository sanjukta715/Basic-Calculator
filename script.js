let display = document.getElementById("display");

// Append numbers or operators to the display
function appendValue(value) {
  display.value += value;
}

// Clear the entire display
function clearDisplay() {
  display.value = "";
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Evaluate the expression and display the result
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
