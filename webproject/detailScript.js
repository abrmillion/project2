document.addEventListener('DOMContentLoaded', function() {
     // Handle job application form submission
     document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
         event.preventDefault(); // Prevent the default form submission
 
         // Get the form element
         const form = event.target;
 
         // Check if the form is valid
         if (form.checkValidity()) {
             // Get the values from the input fields
             const formData = new FormData(form);
             const name = formData.get('name');
             const email = formData.get('email');
             const portfolio = formData.get('portfolio');
             const coverletter = formData.get('coverletter');
             const resume = formData.get('resume');
 
             // Display the input values for demonstration
             console.log('Name:', name);
             console.log('Email:', email);
             console.log('Portfolio:', portfolio);
             console.log('Cover Letter:', coverletter);
             console.log('Resume:', resume);
 
             // Implement your form submission logic here
             // For example, you might want to send these values to your server
 
             alert('Application submitted successfully!');
         } else {
             // If the form is not valid, display an error message
             alert('Please fill out all required fields.');
         }
     });
 });
 