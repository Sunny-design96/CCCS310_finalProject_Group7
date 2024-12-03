document.getElementById('toggle-List').addEventListener('click', function () {
    // Get the button itself
    const button = this;

    // Get all the ingredients
    const ingredients = document.querySelectorAll('.ingredient');

    // Check the visibility of the precise list on the first ingredient
    const firstIngredient = ingredients[0];
    const preciseList = firstIngredient.querySelector('.precise-list');
    const preciseVisible = preciseList.style.display === 'inline';

    ingredients.forEach(ingredient => {
        const simpleList = ingredient.querySelector('.simple-list');
        const preciseList = ingredient.querySelector('.precise-list');

        // Toggle visibility between simple list and precise list
        if (preciseVisible) {
            preciseList.style.display = 'none';
            simpleList.style.display = 'inline';
        } else {
            preciseList.style.display = 'inline';
            simpleList.style.display = 'none';
        }
    });

    // Update the button text
    button.textContent = preciseVisible
        ? 'Show Measurements'
        : 'Show Simple List';
});

// Ensure initial visibility for correct behavior
document.querySelectorAll('.precise-list').forEach(precise => {
    precise.style.display = 'none'; // Start with precise lists hidden
});


// Show the "Go to top" button when scrolling
window.onscroll = function() {
    const button = document.querySelector('.full-jump');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "inline-block"; // Show button when scrolled down
    } else {
        button.style.display = "none"; // Hide button when at the top
    }
};

// Smooth scroll to top when the button is clicked
document.querySelector('.full-jump').addEventListener('click', function(e) {
    e.preventDefault();  // Prevent the default link behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Smooth scroll
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const closeButtons = document.querySelectorAll(".close-button");

    closeButtons.forEach(function(closeButton) {
        const bannerBox = closeButton.closest(".banner-box");
        const countdownDiv = bannerBox.querySelector(".countdown");
        const countdownTimer = countdownDiv.querySelector(".countdown-timer");

        closeButton.addEventListener("click", function() {
            // Hide the close button and show the countdown
            closeButton.style.display = "none"; // Hide the X
            countdownDiv.style.display = "block"; // Show the countdown div

            let secondsLeft = 3;

            // Update the countdown every second
            const countdownInterval = setInterval(function() {
                secondsLeft--;
                countdownTimer.textContent = secondsLeft;

                // Once countdown reaches 0, hide the banner
                if (secondsLeft <= 0) {
                    bannerBox.style.display = "none"; // Hide the entire banner
                    clearInterval(countdownInterval); // Stop the interval after the countdown
                }
            }, 1000); // Update every 1000 milliseconds (1 second)
        });
    });
});
