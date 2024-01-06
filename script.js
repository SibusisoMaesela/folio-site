document.addEventListener("DOMContentLoaded", function() {
    const counterNumber = document.getElementById("counter-number");
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");

    let count = 0;

    function updateCounter() {
        counterNumber.textContent = count;
        counterNumber.style.color = count < 0 ? "red" : count > 0 ? "green" : "black";
    }

    incrementButton.addEventListener("click", () => {
        count++;
        updateCounter();
    });

    decrementButton.addEventListener("click", () => {
        count--;
        updateCounter();
    });

    updateCounter();
});

