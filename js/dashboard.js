"use strict";

/*
    Project Title: School Registration System Web App

    Project Description: Create a web application for a school registration system that
    allows students to register for courses, and their schedules.
    
    Final Project
    Author: Carl Provost
    Date: 10 / 23 / 2023

    Filename: dashboard.js
*/

// Wait for the HTML document to be fully loaded before executing the JavaScript code
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the user ID from session storage
    let userId = Number(sessionStorage.getItem("id"));
    // Get references to the elements in the HTML document
    let dashboardTitle = document.querySelector("#userName");
    let regCourses = document.getElementById("regCourses");

    // Loop through the list of students in the JSON data
    for (let i = 0; i < students.length; i++) {
        let student = students[i];

        // Check if the current student's ID matches the logged-in user's ID
        if (student.id === userId) {
            // Display a personalized welcome message for the user
            dashboardTitle.textContent = `Hello and Welcome, ${student.name}`;

            // Loop through the courses the student is registered for
            for (let k = 0; k < student.courses.length; k++) {
                let li = document.createElement("li");

                // Match the course ID from the student's registration with the course data
                for (let l = 0; l < courses.length; l++) {
                    if (courses[l].id == student.courses[k]) {
                        // Display the course information in a list item
                        li.textContent = `#${k + 1} ${student.courses[k]} ${courses[l].title}`
                    }
                }
                // Append the list item to the course list
                regCourses.appendChild(li)
            }
        }
    }
});