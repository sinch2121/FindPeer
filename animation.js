document.addEventListener("DOMContentLoaded", function() {
    var discoverButton = document.getElementById("discoverButton");
    var charactersSection = document.getElementById("charactersSection");
    var leftCharacter = document.querySelector(".character.left");
    var rightCharacter = document.querySelector(".character.right");

    discoverButton.addEventListener("click", function() {
        // Animate characters
        animateCharacters();

        // Scroll down to next section
        charactersSection.scrollIntoView({ behavior: 'smooth' });
    });

    function animateCharacters() {
        // Add animation classes to characters
        leftCharacter.classList.add("left-pop");
        rightCharacter.classList.add("right-pop");
    }
});
