// Import the initialized app and database
import { app, database } from './fb.js';
import { ref, set } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js';
import { manageAuthBtns } from './logout.js';

// Get form elements
const form = document.getElementById("signup-form-prevent-refresh");
const email = document.getElementById("email");
const password = document.getElementById("password");
const branchSelect = document.getElementById("branch");
const branchOptions = Array.from(branchSelect.options);

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const selectedValue = branchSelect.value;

    if (selectedValue) {
        const selectedBranchText = selectOptionByValue(branchSelect, selectedValue);

        localStorage.setItem('email', email.value);
        localStorage.setItem('branch', selectedBranchText);

        // Extract username from email
        let username = email.value.split('@')[0];
        const studentsRef = ref(database, 'Students/' + username + '/');

        // Store data in Firebase
        set(studentsRef, {
            email: email.value,
            password: password.value    ,
            branch: selectedBranchText,
            isAdmin: false
        }).then(() => {
            console.log("User signed up successfully");
            alert('Signed up successfully!');

            
            window.location.assign("/index.html"); 
            // Clear form fields after successful signup
            form.reset();
        }).catch((error) => {
            console.error("Error storing data: ", error);
        });
    } else {
        console.log("Please select a branch");
    }
});

function selectOptionByValue(selectElement, optionValue) {
    const options = Array.from(selectElement.options);
    const optionToSelect = options.find(option => option.value === optionValue);
    
    if (optionToSelect) {
        selectElement.value = optionToSelect.value;
        return optionToSelect.text; // Return the text of the selected option
    } else {
        return `All`;
    }
}