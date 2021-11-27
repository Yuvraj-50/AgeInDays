var currentYear = new Date().getFullYear();
document.getElementById("btn").addEventListener("click", function () {
  var userAge = prompt("what year you were born");
  var ageInDays = (currentYear - userAge) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "your are " + ageInDays + " days old."
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("result").appendChild(h1);
});

function reset() {
  document.getElementById("ageInDays").remove();
}
