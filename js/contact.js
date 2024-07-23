document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    // Perform form validation
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
  
    if(name && email && subject && message) {

      console.log('Form submitted:', { name, email, subject, message });
      alert('Your message has been sent!');

      document.getElementById('contactForm').reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
  