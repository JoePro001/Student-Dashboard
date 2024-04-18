"use strict";

/*
    Project Title: School Registration System Web App

    Project Description: Create a web application for a school registration system that
    allows students to register for courses, and their schedules.
    
    Final Project
    Author: Carl Provost
    Date: 10 / 23 / 2023

    Filename: global.js
*/

// Wait for the HTML document to be fully loaded before executing the JavaScript code
document.addEventListener("DOMContentLoaded", function () {

    // Get references to the hamburger button, navigation list, and close button
    const hamburgerButton = document.getElementById("ham");
    const navList = document.getElementById("list");
    const closeButton = document.getElementById("close");
    const logOutButton = document.getElementById("logOut");

    // Add a click event listener to the hamburger button
    hamburgerButton.addEventListener("click", function () {
        // Display the navigation list, hide the hamburger button, and show the close button
        navList.style.display = "block";
        hamburgerButton.style.display = "none";
        closeButton.style.display = "flex";
    })
    // Add a click event listener to the close button
    closeButton.addEventListener("click", function () {
        // Hide the navigation list, hide the close button, and show the hamburger button
        navList.style.display = "none";
        closeButton.style.display = "none";
        hamburgerButton.style.display = "flex";
    })
    // Function to log out the user
    function logout() {
        // Remove the stored student ID from sessionStorage
        sessionStorage.removeItem("id");
        alert("Logged Out")
        // Redirect to the login page after logout
        window.location.href = "../html/provostcarl_index.html";
    }
    // Adding a click event listener to the logout button
    logOutButton.addEventListener("click", logout)
});
