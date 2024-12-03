// Data array containing recipe names and links
const recipes = [
    { name: "About", link: "About.html" },
    { name: "RecipeBlog", link: "RecipeBlog.html" },
    { name: "Grilled Salmon", link: "grilled-salmon.html" },
    // Add more recipes here
];

// Select the search input and create a results container
const searchInput = document.querySelector('.search-input'); // Get the search input element
const searchDropdown = document.getElementById('search-dropdown'); // Get the dropdown container for search results
const searchResults = document.getElementById('search-results'); // Get the container to display search results

// Function to filter and display results
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase(); // Get the search query and convert to lowercase
    searchResults.innerHTML = ''; // Clear previous search results
    if (query) { // Check if the query is not empty
        const filteredRecipes = recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(query) // Filter recipes based on the query
        );
        if (filteredRecipes.length > 0) { // Check if there are any matching recipes
            filteredRecipes.forEach(recipe => {
                const item = document.createElement('a'); // Create a new anchor element for each recipe
                item.classList.add('dropdown-item'); // Add class for styling
                item.textContent = recipe.name; // Set the text content to the recipe name
                item.href = recipe.link; // Set the link to the recipe page
                searchResults.appendChild(item); // Append the item to the search results container
            });
            searchDropdown.classList.add('is-active'); // Show the dropdown
        } else {
            // No results found
            const noResult = document.createElement('div'); // Create a new div element for no results
            noResult.classList.add('dropdown-item'); // Add class for styling
            noResult.textContent = 'No results found'; // Set the text content to 'No results found'
            searchResults.appendChild(noResult); // Append the no result item to the search results container
            searchDropdown.classList.add('is-active'); // Show the dropdown
        }
    } else {
        searchDropdown.classList.remove('is-active'); // Hide the dropdown if the query is empty
    }
});

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
    if (!searchDropdown.contains(event.target) && event.target !== searchInput) {
        searchDropdown.classList.remove('is-active'); // Hide the dropdown if clicking outside of it
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'like-button'
    const likeButtons = document.querySelectorAll('.like-button');

    // Iterate over each like button
    likeButtons.forEach(button => {
        // Get the recipe ID from the data attribute
        const recipeId = button.getAttribute('data-recipe-id');
        // Select the span element that displays the like count
        const countSpan = button.querySelector('.like-count');

        // Load the like count from localStorage, default to 0 if not found
        let likeCount = localStorage.getItem(`like-count-${recipeId}`) || 0;
        // Update the like count display
        countSpan.textContent = likeCount;

        // Add click event listener to the like button
        button.addEventListener('click', () => {
            likeCount++;
            // Update the like count display
            countSpan.textContent = likeCount;
            // Save the new like count to localStorage
            localStorage.setItem(`like-count-${recipeId}`, likeCount);
            renderRecipes();
        });
    });

    // Function to render recipes
    function renderRecipes() {
        const recipeCardsContainer = document.querySelector('.recipe-cards .columns');
        const recipeCards = Array.from(recipeCardsContainer.children);

        // Sort recipe cards based on like counts
        recipeCards.sort((a, b) => {
            const likeCountA = parseInt(a.querySelector('.like-count').textContent, 10);
            const likeCountB = parseInt(b.querySelector('.like-count').textContent, 10);
            return likeCountB - likeCountA; // Sort in descending order
        });

        // Clear existing recipes and re-append sorted recipes
        recipeCardsContainer.innerHTML = '';
        recipeCards.forEach(card => recipeCardsContainer.appendChild(card));
    }
    // Initial render of recipes
    renderRecipes();
    
    // Get all "navbar-burger" elements
    const navbarBurgers = document.querySelectorAll('.navbar-burger');

    // Add a click event on each of them
    navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const targetElement = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        targetElement.classList.toggle('is-active');
        });
    });

    // Call the typing effect function
    typeEffect();
});

// Function to create typing effect
function typeEffect() {
    const subtitle = document.querySelector('.hero.subtitle');
    const text = subtitle.textContent;
    title.textContent = '';

    let index = 0;
    function type() {
        if (index < text.length) {
            subtitle.textContent += text.charAt(index);
            index++;
            setTimeout(type, 80); // Adjust typing speed here
        }
    }

    type();
}