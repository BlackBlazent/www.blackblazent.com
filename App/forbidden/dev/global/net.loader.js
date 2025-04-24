window.onload = function() {
    // Simulate page load and show loading container
    showLoading('medium');  // Change to 'okay' or 'slow' for testing different speeds

    // After a short time, hide the loading (simulate the end of loading)
    setTimeout(function() {
        document.getElementById('loadingContainer').style.display = 'none';
    }, 3000);  // 3 seconds (you can change this duration as needed)
};

// Function to show loading based on status
function showLoading(status) {
    const loadingContainer = document.getElementById('loadingContainer');
    
    // Show the loading container
    loadingContainer.style.display = 'flex';

    // Set the emoji based on the loading speed
    switch (status) {
        case 'medium':
            loadingContainer.innerText = '👍'; // Medium speed
            break;
        case 'okay':
            loadingContainer.innerText = '💖'; // Okay speed
            break;
        case 'slow':
            loadingContainer.innerText = '😑'; // Slow speed
            break;
        default:
            loadingContainer.innerText = '👍'; // Default to medium speed
            break;
    }
}
