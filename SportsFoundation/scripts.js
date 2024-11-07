window.onload = functiion() 
{
    const today = new Date ();
    const formatteedDate = today.toLocaleDateString(); // Format date as needed, change to only the year not the whole date(hmk)
    document.getElementById('dateStamp').innerText = formatteedDate;

}
  
//function to show the lightbox with the clicked image
function showLightbox (imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = image;
    lightbox.style.display = 'flex'; 
}

//function to close the lightbox when clicked
function closedLightbox() {
    document.getElementById('lightboxImage').style.display = 'none';
} 
// Function to clear field
function clearField(element) {
    element.value = "";
}

// Function for validation
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (name === "" || email === "" || subject === "" || message === "") {
        alert('All fields are required.');
        return false;
    }
    return true;
}