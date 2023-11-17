// Get the string from the page
// 1. Controller function
function getValue() {
  document.getElementById("alert").classList.add("invisible");
  let userString = document.getElementById("inputString").value 
  let revString = reverseInput(userString);
  displayReversedString(revString);
}

// reverse the string 
// 2. Logic function
function reverseInput(text) {
  let reversedString = ""
  for (let index = text.length - 1; index >= 0 ; index--) {
    reversedString += text[index];
  }
  return reversedString;
}

// display the reversed string to the user
// 3. View function
function displayReversedString(text){

  document.getElementById("msg").innerHTML = `Your  string reversed is: ${text}`
  document.getElementById("alert").classList.remove("invisible");
}



