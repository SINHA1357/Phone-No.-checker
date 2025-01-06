document.getElementById("check-btn").addEventListener("click", validatePhoneNumber);
document.getElementById("clear-btn").addEventListener("click", clearResults);

function validatePhoneNumber() {
    const userInput = document.getElementById("user-input").value.trim();
    const resultDiv = document.getElementById("results-div");

    
    if (!userInput) {
        alert("Type a phone number");
        return;
    }

    const phoneRegex = /^(1\s?)?(\(?\d{3}\)?[\s\-]?)?\d{3}[\s\-]?\d{4}$/;
    const validPhoneRegex = /^(1\s?)?(\(?\d{3}\)?[\s\-]?)?\d{3}[\s\-]?\d{4}$/;

    if (validPhoneRegex.test(userInput)) {
        resultDiv.textContent = `Valid  number: ${userInput}`;
    } else {
        resultDiv.textContent = `Invalid Indian number: ${userInput}`;
    }
}

function clearResults() {
    document.getElementById("results-div").textContent = "";
}
