function fetchGitHubUser() {
    const username = document.getElementById("username").value.trim();
    if (!username) {
        console.error("Please enter a GitHub username.");
        return;
    }

    const url = `https://api.github.com/users/${username}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`GitHub user not found: ${username}`);
            }
            return response.json();
        })
        .then(user => {
            document.getElementById("name").textContent = user.name || "N/A";
            document.getElementById("blog").innerHTML = user.blog 
                ? `<a href="${user.blog}" target="_blank">${user.blog}</a>` 
                : "N/A";
            document.getElementById("created").textContent = user.created_at || "N/A";

            document.getElementById("picture").innerHTML = `
                <img src="${user.avatar_url}" alt="Profile Picture" width="150" style="border-radius: 50%;">
            `;
        })
        .catch(error => {
            console.error("Error fetching GitHub user:", error);
        });
}
