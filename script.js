// Generate a random number array
const predefinedNumbers = Array.from({length: 5}, () => Math.floor(Math.random() * 100));

document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userNumber = parseInt(document.getElementById('userNumber').value);
    const resultElement = document.getElementById('result');

    if (predefinedNumbers.includes(userNumber)) {
        resultElement.textContent = `Success! The number ${userNumber} is in the predefined array.`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `Sorry, the number ${userNumber} is not in the predefined array.`;
        resultElement.style.color = 'red';
    }

    // Optional: Display the predefined numbers for reference
    console.log('Predefined numbers:', predefinedNumbers);
});
