// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Get the form element. Using const because we don't reassign form.
  const form = document.querySelector('form'); // const: form reference doesn't change
  // Get the result box element. Using const because we don't reassign resultBox.
  const resultBox = document.querySelector('.result-box'); // const: resultBox reference doesn't change

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from refreshing the page

    // Get input values. Using const because these values don't change after assignment.
    const adjective = document.getElementById('adjective').value; // const: value won't change
    const noun = document.getElementById('noun').value; // const: value won't change
    const verb = document.getElementById('verb').value; // const: value won't change

    // Build the sentence using string concatenation
    var sentence = "The " + adjective + " " + noun + " had one goal: to " + verb + ". What happened next was unexpected.";

    // Show the sentence in the result box
    resultBox.textContent = sentence;
  });
});
