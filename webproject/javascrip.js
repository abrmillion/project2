
document.getElementById('jobSearchForm').addEventListener('submit', function(event) {
     event.preventDefault();
 
     // Get form values
     let keywords = document.getElementById('keywords').value;
     let location = document.getElementById('location').value;
     let company = document.getElementById('company').value;
 
     // Basic validation
     if (!keywords && !location && !company) {
         alert('Please enter at least one search criteria.');
     } else {
         // Submit the form if validation passes
         this.submit();
     }
 });