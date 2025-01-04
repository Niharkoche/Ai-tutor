// Import the initialized app and database
import { app, database } from './fb.js';
import { ref, set, onValue } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js';

// Get email, pass
const form = document.getElementById("login-form-prevent-refresh");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cta = document.getElementById("login-cta");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Avoid refresh.

  const emailValue = email.value;
  const passwordValue = password.value;
  const username = emailValue.split('@')[0];

  // Save email to local storage
  localStorage.setItem('email', emailValue);

  // Reference to Firebase path /Students/{Username}
  const userRef = ref(database, `/Students/${username}/`);

  // Fetch user data from Firebase
  onValue(userRef, (snapshot) => {
      const fetchedData = snapshot.val();

      if (fetchedData) {
          // Check if the password matches
          if (fetchedData.password === passwordValue) {
              // Login successful
              const userEmail = fetchedData.email;
              let userBranch = fetchedData.branch;

              if(fetchedData.isAdmin) userBranch = 'Admin';

              // Store email and branch in local storage
              localStorage.setItem('email', userEmail);
              localStorage.setItem('branch', userBranch);

              console.log("Login successful!");
              alert('Login successful!');

              window.location.assign("/index.html"); 
          } else {
              alert('Incorrect password');
              password.value = "";
              localStorage.clear(); // Assumes no other bugs.
              console.error("Incorrect password!");
          }
      } else {
          console.error("User not found!");
      }
  });
});