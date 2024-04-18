"use strict"

/*
    Project Title: School Registration System Web App

    Project Description: Create a web application for a school registration system that
    allows students to register for courses, and their schedules.
    
    Final Project
    Author: Carl Provost
    Date: 10 / 23 / 2023

    Filename: registration.js
*/

// Function to handle the submission of the registration form
document.addEventListener("DOMContentLoaded", function () {
    // Get the user ID from sessionStorage
    let userId = Number(sessionStorage.getItem("id"));

    // Select the registration form from the DOM
    const registrationForm = document.querySelector("#registration-form");

    // Initialize an array to store selected course IDs
    let selectedCourses = [];

    // Function to handle the form submission
    function submitRegistration(e) {
        // Prevent the default form submission behavior
        e.preventDefault();

        // Get an array of selected course checkboxes that are checked
        selectedCourses = Array.from(document.querySelectorAll("input[type='checkbox']:checked"))
            .map(checkbox => Number(checkbox.id));

        // Log the array of selected course IDs to the console
        console.log("Selected courses:", selectedCourses);

        // Loop through the list of students in the JSON data
        for (let i = 0; i < students.length; i++) {
            let student = students[i];

            // Check if the current student's ID matches the logged-in user's ID
            if (student.id === userId) {
                console.log(student)
                // Concatenate the selected courses to the existing ones
                let newCoursesArray = student.courses.concat(selectedCourses);
                // student.courses = newCoursesArray;
                student.courses.concat(selectedCourses)
                // Log the updated courses array
                console.log("Updated courses:", newCoursesArray);
                student.email = "Hello"
            }
        }
    }
    // Event listener that runs the provided function when the form is submitted
    registrationForm.addEventListener("submit", submitRegistration);
});
