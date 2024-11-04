function saveTeam(button) {
    const team = button.closest('.team');
    const savedLink = document.getElementById('saved-link');
  
    // Clone the team element
    const clonedTeam = team.cloneNode(true);
  
    // Append the cloned team to the saved link's href attribute on saved.html
    const savedUrl = savedLink.href;
    const savedPage = savedUrl.substring(savedUrl.lastIndexOf('/') + 1); // Extract the saved.html page name
    const queryParams = new URLSearchParams({
      teamName: team.querySelector('h2').innerText,
      teamDescription: team.querySelector('p').innerText
    });
    const newUrl = savedPage + '?' + queryParams.toString();
    savedLink.href = newUrl;
  }
  