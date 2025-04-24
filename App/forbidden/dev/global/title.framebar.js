// Title bar headers
document.addEventListener("DOMContentLoaded", () => {
    const titles = [
        "Hello! Blazer's 👋",
        "Experience the unexperienced 🤯",
        "Went through your grit 🤩",
        "The unfold future 🌳"
    ]; // List of titles
    let index = 0; // Start index

    // Function to update the title
    setInterval(() => {
        document.title = titles[index];
        index = (index + 1) % titles.length; // Cycle through the titles
    }, 10000); // Change title every 10 seconds
});
