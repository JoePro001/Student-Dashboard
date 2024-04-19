"use strict"

/*
    Project Title: School Registration System Web App

    Project Description: Create a web application for a school registration system that
    allows students to register for courses, and their schedules.
    
    Final Project
    Author: Carl Provost
    Date: 10 / 23 / 2023

    Filename: login.js
*/

// Get reference to the login form in the HTML document
const logInForm = document.getElementById("logInForm");

// Function to validate the login form
function validateForm() {
    // Extract values from the input fields
    let studentId = document.getElementById("studentid").value;
    let password = document.getElementById("password").value;
    let isLoggedIn = false;

    // Example: Check if fields are not empty
    if (studentId === "" || password === "") {
        // Display an alert if any field is empty
        alert("Please fill in all fields.");
        return false;
    }
    else {

        // Iterate through the list of students in the JSON data
        for (let i = 0; i < students.length; i++) {
            let student = students[i];
            // Check if the entered credentials match any student in the JSON data
            if (student.id == Number(studentId) && student.password == password) {
                // Store student ID in sessionStorage if login is successful
                sessionStorage.setItem("id", studentId);
                isLoggedIn = true;
            }
        }
        // Display appropriate alert based on login success or failure
        if (isLoggedIn == true) {
            alert("Login successful!");
            // Redirect to the dashboard page upon successful login
            window.location.href = "../html/dashboard.html";
        }
        else {
            alert("Wrong Credidtials")
        }
    }
    return true;
}
// Add a submit event listener to the login form
logInForm.addEventListener("submit", function (e) {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Call the validateForm function when the form is submitted
    validateForm();
});

