// Display custom alert when the page loads
window.onload = function() {
    document.getElementById("custom-alert").style.display = "block";
};

// Close the custom alert when "Close" button is clicked
document.getElementById("close-custom-alert").addEventListener("click", function() {
    document.getElementById("custom-alert").style.display = "none";
});